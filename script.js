// Get references
const container = document.getElementById('horizontal-scroll-container');
const sections = document.querySelectorAll('.scroll-section');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const smallEarth = document.querySelector('#home .animate-pulse');
const content = document.getElementById('horizontal-scroll-container');
const mainHeader = document.querySelector('#default-header');
const altHeaderZoomed = document.querySelector('#alt-header-zoomed');
const exitBigMode = document.getElementById('close-btn');
const zoomedInContent = document.getElementById('zoomed-in-content');

let currentIndex = 0; // Tracks the current section
let isZoomedIn = false; // Tracks whether the site is in zoomed-in mode

// Handle arrow visibility
function hiddenarrow() {
    if (isZoomedIn) {
        prevButton.style.display = "none";
        nextButton.style.display = "none";
    } else if (currentIndex === 0) {
        prevButton.style.display = "none";
        nextButton.style.display = "block";
    } else if (currentIndex === 2) {
        prevButton.style.display = "block";
        nextButton.style.display = "none";
    } else if (currentIndex === sections.length - 1) {
        prevButton.style.display = "block";
        nextButton.style.display = "none";
    } else {
        prevButton.style.display = "block";
        nextButton.style.display = "block";
    }
}

zoomedInContent.classList.add('hidden');

// Load directly on #home (index 1) without animation
window.addEventListener('load', () => {
    // Directly scroll to the #home section (index 1) without animation
    if (sections[1]) {
        const offset = sections[1].offsetLeft; // Get the offset of the #home section
        container.scrollLeft = offset; // Set the scroll position instantly
        currentIndex = 1;
        hiddenarrow(); // Update arrow visibility
    }
});

// Scroll to specific section
function scrollToSection(index, smoothScroll = true) {
    if (sections[index] && container) {
        const offset = sections[index].offsetLeft;
        if (smoothScroll) {
            container.scrollTo({
                left: offset,
                behavior: 'smooth'
            });
        } else {
            container.scrollLeft = offset;
        }
        currentIndex = index;
        hiddenarrow(); // Update arrow visibility
    }
}

// Handle previous and next button clicks
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        scrollToSection(currentIndex - 1);
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < sections.length - 1) {
        scrollToSection(currentIndex + 1);
    }
});

// Enable big mode (zoom-in effect)
if (smallEarth && content) {
    smallEarth.addEventListener('click', () => {
        if (isZoomedIn) {
            exitBigModeHandler();
        } else {
            enterBigModeHandler();
        }
    });
}

// Enter zoom-in mode with header transition
function enterBigModeHandler() {
    isZoomedIn = true;

    // Apply zoom effect
    content.style.transform = 'scale(3)';
    content.style.transition = 'transform 0.7s ease-in-out';

    // Fade out the main header and fade in the alternate header
    mainHeader.style.opacity = '0';
    mainHeader.style.transition = 'opacity 0.2s ease-in-out';
    setTimeout(() => {
        mainHeader.style.display = 'none';
        altHeaderZoomed.style.display = 'flex';
        altHeaderZoomed.style.opacity = '1';
    }, 500);

    // Show close button
    if (exitBigMode) {
        exitBigMode.style.display = 'block';
    }

    // Hide navigation arrows in big mode
    prevButton.style.display = 'none';
    nextButton.style.display = 'none';

    // Show zoomed-in content
    zoomedInContent.classList.remove('hidden');
}

// Exit zoom mode with header transition
function exitBigModeHandler() {
    isZoomedIn = false;

    // Reset zoom effect
    content.style.transform = 'scale(1)';
    content.style.transition = 'transform 0.7s ease-in-out';

    // Fade out the alternate header and fade in the main header
    altHeaderZoomed.style.opacity = '0';
    altHeaderZoomed.style.transition = 'opacity 0.2s ease-in-out';
    setTimeout(() => {
        altHeaderZoomed.style.display = 'none';
        mainHeader.style.display = 'flex';
        mainHeader.style.opacity = '1';
    }, 500);

    // Hide close button
    if (exitBigMode) {
        exitBigMode.style.display = 'none';
    }

    // Show navigation arrows and update their visibility
    hiddenarrow();

    // Hide zoomed-in content
    zoomedInContent.classList.add('hidden');
}

// Add listener for the exit big mode button
if (exitBigMode) {
    exitBigMode.addEventListener('click', exitBigModeHandler);
}

// Handle Escape key to exit zoom mode
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isZoomedIn) {
        exitBigModeHandler();
    }
});

// Ensure clicks outside the zoomed element exit big mode
if (content) {
    content.addEventListener('click', (e) => {
        if (isZoomedIn && !e.target.closest('.scroll-section')) {
            exitBigModeHandler();
        }
    });
}

// Project cards animation and interaction
const projectCards = document.querySelectorAll('#home .project-card');
const modal = document.getElementById('project-modal');
const modalContent = document.getElementById('modal-content');
const closeModal = document.getElementById('close-modal');

// Calculate random positions around Big Earth with minimum spacing
function getRandomPosition(existingPositions) {
    const minDistance = 300; // Distance minimale entre les cartes
    const radius = 500; // Distance depuis le centre
    const minTopMargin = 100; // Marge minimale depuis le haut
    let attempts = 0;
    const maxAttempts = 100;
    
    while (attempts < maxAttempts) {
        const angles = [-Math.PI/4, -Math.PI/6, 0, Math.PI/6, Math.PI/4, 
                       Math.PI - Math.PI/4, Math.PI - Math.PI/6, Math.PI, 
                       Math.PI + Math.PI/6, Math.PI + Math.PI/4];
        const angle = angles[Math.floor(Math.random() * angles.length)];
        const x = Math.cos(angle) * radius;
        let y = Math.sin(angle) * radius;
        
        // Assurer une marge minimale depuis le haut
        y = Math.max(y, minTopMargin);
        
        const isTooClose = existingPositions.some(pos => {
            const dx = pos.x - x;
            const dy = pos.y - y;
            return Math.sqrt(dx * dx + dy * dy) < minDistance;
        });
        
        if (!isTooClose || existingPositions.length === 0) {
            return { x, y };
        }
        
        attempts++;
    }
    
    return { x: radius, y: minTopMargin };
}

// Position and animate project cards
const existingPositions = [];
projectCards.forEach((card, index) => {
    const pos = getRandomPosition(existingPositions);
    existingPositions.push(pos);
    
    // Set initial position
    gsap.set(card, {
        position: 'absolute',
        left: '50%',
        top: '50%',
        x: pos.x,
        y: pos.y,
        xPercent: -50,
        yPercent: -50,
        scale: 1
    });

    // Add floating animation
    gsap.to(card, {
        y: `+=${20}`,
        x: `+=${10}`,
        duration: 2 + (Math.random() * 1),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.2
    });
});

// Modal functionality
projectCards.forEach((card, index) => {
    const voirPlusBtn = card.querySelector('.voir-plus');
    if (voirPlusBtn) {
        voirPlusBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const project = projectData[index];
            modal.classList.remove('hidden');
            
            // Add dark overlay and center positioning
            modal.style.backgroundColor = 'rgba(0, 0, 0, 0.75)';
            modal.style.display = 'flex';
            modal.style.alignItems = 'center';
            modal.style.justifyContent = 'center';
            modal.style.position = 'fixed';
            modal.style.top = '0';
            modal.style.left = '0';
            modal.style.width = '100%';
            modal.style.height = '100%';
            modal.style.zIndex = '50';
            
            modalContent.innerHTML = `
                <div class="relative bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 w-[40%]">
                    <button id="close-modal" class="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <img src="${project.image}" alt="${project.title}" class="w-full h-64 object-cover rounded-lg mb-4">
                    <h2 class="text-2xl font-genocide mb-4 text-white">${project.title}</h2>
                    <p class="text-white/80">${project.fullDescription}</p>
                </div>
            `;

            gsap.fromTo(modal, 
                { opacity: 0 },
                { opacity: 1, duration: 0.3 }
            );
            gsap.fromTo(modalContent.firstElementChild,
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.3, ease: "back.out" }
            );

            // Add close button functionality
            const newCloseBtn = modalContent.querySelector('#close-modal');
            if (newCloseBtn) {
                newCloseBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    closeModalHandler();
                });
            }
        });
    }
});

function closeModalHandler() {
    gsap.to(modal, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
            modal.classList.add('hidden');
            modal.style.display = 'none';
            modal.style.pointerEvents = 'none'; // Disable pointer events when hidden
        }
    });
}

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModalHandler();
    }
});

// Project data
const projectData = [
    {
        title: "Project Title 1",
        description: "Brief description of project 1",
        fullDescription: "Detailed description of project 1 that will appear in the modal",
        image: "media/project1.jpg"
    },
    {
        title: "Project Title 2",
        description: "Brief description of project 2",
        fullDescription: "Detailed description of project 2 that will appear in the modal",
        image: "media/project2.jpg"
    },
    {
        title: "Project Title 3",
        description: "Brief description of project 3",
        fullDescription: "Detailed description of project 3 that will appear in the modal",
        image: "media/project3.jpg"
    }
];

// Add click handlers for "Voir Plus" buttons
document.querySelectorAll('.voir-plus').forEach((button, index) => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        const project = projectData[index];
        modal.classList.remove('hidden');
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; // Fond semi-transparent
        
        modalContent.innerHTML = `
            <div class="relative bg-white/20 backdrop-blur-md p-8 rounded-xl border border-white/20 max-w-2xl mx-auto mt-20">
                <button id="close-modal" class="absolute top-4 right-4 text-white hover:text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <img src="${project.image}" alt="${project.title}" class="w-full h-64 object-cover rounded-lg mb-4">
                <h2 class="text-2xl font-genocide mb-4 text-white">${project.title}</h2>
                <p class="text-white/80">${project.fullDescription}</p>
            </div>
        `;

        gsap.fromTo(modal, 
            { opacity: 0 },
            { opacity: 1, duration: 0.3 }
        );
        gsap.fromTo(modalContent.firstElementChild,
            { scale: 0.8, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.3, ease: "back.out" }
        );

        // Réinitialiser les gestionnaires d'événements pour le nouveau bouton de fermeture
        const newCloseBtn = modalContent.querySelector('#close-modal');
        if (newCloseBtn) {
            newCloseBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                closeModalHandler();
            });
        }
    });
});

function closeModalHandler() {
    gsap.to(modal, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => modal.classList.add('hidden')
    });
}

// Fermer en cliquant en dehors
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModalHandler();
    }
});

// Fermer avec la touche Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModalHandler();
    }
});

// Initialize EmailJS
(function() {
    emailjs.init("9wakw3bfFNMWwtnrd");
})();

// Contact form functionality
const contactForm = document.querySelector('#contact form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const templateParams = {
            title: this.querySelector('input[placeholder="Sujet"]').value,
            name: this.querySelector('input[type="text"]').value,
            time : new Date().toLocaleString(),
            message: this.querySelector('textarea').value,
            email: this.querySelector('input[type="email"]').value,
        };

        emailjs.send('service_xk19c8r', 'template_ye75amd', templateParams)
            .then(function() {
                alert('Message sent successfully!');
                contactForm.reset();
            }, function(error) {
                console.error('Failed to send message:', error);
                alert('Failed to send message. Please try again.');
            });
    });
}