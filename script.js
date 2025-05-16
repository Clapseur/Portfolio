const projectData = [
    {
        title: "Clapseur - YoutTube",
        description: "Vidéo produite par mes mains de A a Z ",
        fullDescription: `
            <div class="space-y-8">
                <div class="relative w-full h-64">
                    <video class="w-full h-full object-cover rounded-lg" autoplay loop muted playsinline>
                        <source src="media/skinfolio-demo.mp4" type="video/mp4">
                    </video>
                </div>
                
                <div class="prose prose-invert max-w-none">
                    <h1 class="text-3xl font-genocide text-white/90 mb-4">${this.title}</h1>
                    
                    <div class="flex gap-2 mb-6">
                        <span class="px-3 py-1 bg-white/10 rounded-full text-sm">React.js</span>
                        <span class="px-3 py-1 bg-white/10 rounded-full text-sm">Steam API</span>
                        <span class="px-3 py-1 bg-white/10 rounded-full text-sm">Node.js</span>
                    </div>

                    <h2 class="text-xl font-genocide text-white/90 mt-8">Le Concept</h2>
                    <p class="text-white/80 leading-relaxed mb-6">
                        Skinfolio transforme vos skins CS2 en un portfolio financier professionnel. Une approche unique qui marie le gaming et la finance, permettant aux joueurs de visualiser leur collection comme un véritable investissement.
                    </p>
                    
                    <h2 class="text-xl font-genocide text-white/90 mt-8">Technologies Utilisées</h2>
                    <ul class="list-disc list-inside text-white/80 space-y-2 mb-6">
                        <li>React.js pour l'interface utilisateur</li>
                        <li>Steam API pour la récupération des données</li>
                        <li>Node.js pour le backend</li>
                        <li>MongoDB pour le stockage des données</li>
                    </ul>

                    <h2 class="text-xl font-genocide text-white/90 mt-8">Fonctionnalités Clés</h2>
                    <div class="grid grid-cols-2 gap-4 mt-4">
                        <div class="bg-white/5 p-4 rounded-lg">
                            <h3 class="font-genocide text-lg mb-2">Analyse en temps réel</h3>
                            <p class="text-sm text-white/70">Suivi des prix du marché en direct</p>
                        </div>
                        <div class="bg-white/5 p-4 rounded-lg">
                            <h3 class="font-genocide text-lg mb-2">Historique détaillé</h3>
                            <p class="text-sm text-white/70">Visualisation de l'évolution des prix</p>
                        </div>
                    </div>
                </div>
            </div>`,
        image: "media/project1.jpg",
        videoUrl: "media/skinfolio-demo.mp4"
    },
    {
        title: "Clapseur - Soundcloud",
        description: "Un historique publique de mes projets musicaux",
        fullDescription: `
            <div class="space-y-6">
                <div class="relative w-full h-96">
                    <video class="w-full h-full object-cover rounded-lg" autoplay loop muted playsinline>
                        <source src="media/morpion-demo.mp4" type="video/mp4">
                    </video>
                </div>
                
                <div class="space-y-4">
                    <h3 class="text-xl font-genocide text-white/90">Le Projet</h3>
                    <p class="text-white/80 leading-relaxed">
                        Une réinvention moderne du jeu classique du Morpion, avec une interface épurée et des animations fluides. Le jeu inclut un mode joueur contre joueur local et un mode contre l'IA.
                    </p>
                    
                    <h3 class="text-xl font-genocide text-white/90">Caractéristiques</h3>
                    <ul class="list-disc list-inside text-white/80 space-y-2">
                        <li>Interface minimaliste et responsive</li>
                        <li>Animations fluides avec GSAP</li>
                        <li>IA avec différents niveaux de difficulté</li>
                        <li>Mode sombre/clair</li>
                    </ul>
                </div>
            </div>`,
        image: "media/project2.jpg",
        videoUrl: "media/morpion-demo.mp4"
    },
    {
        title: "Clapseur - Youtube",
        description: "Parfumerie en ligne basé sur les souvenirs d'enfance.",
        fullDescription: `
            <div class="space-y-6">
                <div class="relative w-full h-96">
                    <video class="w-full h-full object-cover rounded-lg" autoplay loop muted playsinline>
                        <source src="media/clapseur-demo.mp4" type="video/mp4">
                    </video>
                </div>
                
                <div class="space-y-4">
                    <h3 class="text-xl font-genocide text-white/90">L'Inspiration</h3>
                    <p class="text-white/80 leading-relaxed">
                        Clapseur est une chaîne YouTube dédiée à la création de contenu innovant et engageant. Chaque vidéo est soigneusement produite pour offrir une expérience unique aux spectateurs.
                    </p>
                    
                    <h3 class="text-xl font-genocide text-white/90">Contenu</h3>
                    <ul class="list-disc list-inside text-white/80 space-y-2">
                        <li>Vidéos hebdomadaires</li>
                        <li>Contenu original et créatif</li>
                        <li>Édition professionnelle</li>
                        <li>Interaction avec la communauté</li>
                    </ul>
                </div>
            </div>`,
        image: "media/project3.jpg",
        videoUrl: "media/clapseur-demo.mp4"
    }
];

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

    // Hide both headers immediately
    mainHeader.style.opacity = '0';
    mainHeader.style.transition = 'opacity 0.2s ease-in-out';
    altHeaderZoomed.style.opacity = '0';
    altHeaderZoomed.style.transition = 'opacity 0.2s ease-in-out';
    
    setTimeout(() => {
        mainHeader.style.display = 'none';
        altHeaderZoomed.style.display = 'none';
    }, 500);

    // Create and animate floating divs in big mode
    const floatingDivs = [];
    const numDivs = 3; // Number of floating divs
    const radius = 150; // Increased radius for better spacing

    for (let i = 0; i < numDivs; i++) {
        const div = document.createElement('div');
        div.className = 'floating-div bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4';
        div.style.position = 'absolute';
        div.style.zIndex = '900';
        div.style.width = '150px';
        div.style.height = '100px';
        div.style.overflow = 'hidden';
        
        div.innerHTML = `
            <div class="h-full flex flex-col justify-between">
                <h3 style="font-size: 8px; margin-bottom: 4px; color: white; font-family: genocide;">Project ${i + 1}</h3>
                <p style="font-size: 6px; color: rgba(255,255,255,0.8); display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">${projectData[i]?.description || 'Brief description'}</p>
                <button class="voir-plus animate-pulse hover:animate-none bg-white/10 hover:bg-white/20 px-2 py-1 rounded transition-all" style="font-size: 7px; color: white;">Voir plus</button>
            </div>
        `;

        document.querySelector('#home').appendChild(div);
        floatingDivs.push(div);

        // Calculate initial position with increased radius and custom positioning for the third div
        let x, y;
        if (i === 2) { // For the third div (Project 3)
            x = -radius * 1.2; // Keep the same horizontal position
            y = radius * 0.5;  // Reduce the vertical offset to move it higher
        } else if (i === 1) { // For the second div (Project 2)
            x = radius * 0;  // Adjust horizontal position
            y = radius * 0.6;  // Reduce the vertical offset to move it higher
        } else {
            const angle = (i / (numDivs - 1)) * Math.PI; // Distribute other divs evenly
            x = Math.cos(angle) * radius;
            y = Math.sin(angle) * radius;
        }

        // Set initial position
        gsap.set(div, {
            left: '50%',
            top: '50%',
            x: x,
            y: y,
            xPercent: -50,
            yPercent: -50,
            opacity: 0
        });

        // Add floating animation with reduced movement
        gsap.to(div, {
            y: `+=${4 + Math.random() * 2}`, // Reduced vertical movement
            x: `+=${2 + Math.random() * 1}`, // Reduced horizontal movement
            rotation: Math.random() * 2 - 1, // Reduced rotation
            duration: 2.5 + Math.random() * 1.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: i * 0.2
        });

        // Fade in
        gsap.to(div, {
            opacity: 1,
            duration: 0.5,
            delay: 0.5 + i * 0.1
        });

        // Add click handler for voir plus button
        const voirPlusBtn = div.querySelector('.voir-plus');
        if (voirPlusBtn) {
            voirPlusBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const project = projectData[i];
                
                const modal = document.getElementById('project-modal');
                const modalContent = document.getElementById('modal-content');
                
                // Show modal
                modal.classList.remove('hidden');
                modal.style.opacity = '0';
                
                modalContent.innerHTML = `
                    <button id="close-modal" class="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div class="overflow-y-auto max-h-[80vh] pr-4 -mr-4">
                        ${project.fullDescription}
                    </div>
                `;
                
                // Add modal event listeners
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) {
                        closeModalHandler();
                    }
                });
                
                const closeBtn = modalContent.querySelector('#close-modal');
                if (closeBtn) {
                    closeBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        closeModalHandler();
                    });
                }
                
                // Animation
                gsap.to(modal, {
                    opacity: 1,
                    duration: 0.3
                });
                
                gsap.fromTo(modalContent,
                    { scale: 0.8, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 0.3, ease: "back.out" }
                );
            });
        }
    }

    // Store reference to floating divs for cleanup
    window.floatingDivs = floatingDivs;

    // Ensure proper header transition
    mainHeader.style.opacity = '0';
    mainHeader.style.transition = 'opacity 0.2s ease-in-out';
    setTimeout(() => {
        mainHeader.style.display = 'none';
        altHeaderZoomed.style.display = 'flex';
        altHeaderZoomed.style.opacity = '1';
        altHeaderZoomed.style.zIndex = '1000'; // Ensure header stays on top
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

// Update exitBigModeHandler to clean up floating divs
function exitBigModeHandler() {
    isZoomedIn = false;

    // Clean up floating divs
    if (window.floatingDivs) {
        window.floatingDivs.forEach(div => {
            gsap.to(div, {
                opacity: 0,
                duration: 0.3,
                onComplete: () => {
                    if (div.parentNode) {
                        div.parentNode.removeChild(div);
                    }
                }
            });
        });
        window.floatingDivs = null;
    }

    // Reset zoom effect
    content.style.transform = 'scale(1)';
    content.style.transition = 'transform 0.7s ease-in-out';

    // Show main header
    mainHeader.style.display = 'flex';
    mainHeader.style.opacity = '1';
    mainHeader.style.transition = 'opacity 0.2s ease-in-out';

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
// Keep this one as it's more specific and targets only project cards within #home
const projectCards = document.querySelectorAll('#home .project-card');

const modal = document.getElementById('project-modal');
const modalContent = document.getElementById('modal-content');
const closeModal = document.getElementById('close-modal');

// Create a reusable click handler function for project modals
function createProjectModalHandler(project) {
    return (e) => {
        e.stopPropagation();
        
        const modal = document.getElementById('project-modal');
        const modalContent = document.getElementById('modal-content');
        
        // Show modal
        modal.classList.remove('hidden');
        modal.style.opacity = '0';
        
        modalContent.innerHTML = `
            <button id="close-modal" class="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <div class="overflow-y-auto max-h-[80vh] pr-4 -mr-4">
                ${project.fullDescription}
            </div>
        `;
        
        // Add modal event listeners
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModalHandler();
            }
        });
        
        const closeBtn = modalContent.querySelector('#close-modal');
        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                closeModalHandler();
            });
        }
        
        // Animation
        gsap.to(modal, {
            opacity: 1,
            duration: 0.3
        });
        
        gsap.fromTo(modalContent,
            { scale: 0.8, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.3, ease: "back.out" }
        );
    };
}

// Calculate random positions around Big Earth with minimum spacing
function getRandomPosition(existingPositions) {
    const minDistance = 300; // Minimum distance between cards
    const radius = 500; // Distance from center of Big Earth
    const exclusionZone = 350; // Larger than minDistance to ensure no overlap
    let attempts = 0;
    const maxAttempts = 100;
    
    while (attempts < maxAttempts) {
        // Use specific angles for left and right sides
        const angles = [-Math.PI/4, -Math.PI/6, 0, Math.PI/6, Math.PI/4, 
                       Math.PI - Math.PI/4, Math.PI - Math.PI/6, Math.PI, 
                       Math.PI + Math.PI/6, Math.PI + Math.PI/4];
        const angle = angles[Math.floor(Math.random() * angles.length)];
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        // Check distance from other cards with larger exclusion zone
        const isTooClose = existingPositions.some(pos => {
            const dx = pos.x - x;
            const dy = pos.y - y;
            return Math.sqrt(dx * dx + dy * dy) < exclusionZone;
        });
        
        if (!isTooClose || existingPositions.length === 0) {
            return { x, y };
        }
        
        attempts++;
    }
    
    // If no position found, place it further out
    return { x: radius * 1.2, y: 0 };
}

// Position and animate project cards
// Remove the duplicate declaration here and just use existingPositions
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

function closeModalHandler() {
    const modalToClose = document.getElementById('project-modal');
    if (modalToClose) {
        gsap.to(modalToClose, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
                modalToClose.classList.add('hidden');
                const modalContent = document.getElementById('modal-content');
                modalContent.innerHTML = '';
            }
        });
    }
}

// Modal functionality
projectCards.forEach((card, index) => {
    const voirPlusBtn = card.querySelector('.voir-plus');
    if (voirPlusBtn) {
        voirPlusBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const project = projectData[index];
            
            const modal = document.getElementById('project-modal');
            const modalContent = document.getElementById('modal-content');
            
            // Show modal
            modal.classList.remove('hidden');
            modal.style.opacity = '0';
            
            modalContent.innerHTML = `
                <button id="close-modal" class="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <img src="${project.image}" alt="${project.title}" class="w-full h-64 object-cover rounded-lg mb-4">
                <h2 class="text-2xl font-genocide mb-4 text-white">${project.title}</h2>
                <p class="text-white/80">${project.description}</p>
            `;
            
            // Add event listeners
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    closeModalHandler();
                }
            });
            
            const closeBtn = modalContent.querySelector('#close-modal');
            if (closeBtn) {
                closeBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    closeModalHandler();
                });
            }
            
            // Animation
            gsap.to(modal, {
                opacity: 1,
                duration: 0.3
            });
            
            gsap.fromTo(modalContent,
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.3, ease: "back.out" }
            );
        });
    }
});

// Handle escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
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
                const successMessage = document.createElement('p');
                successMessage.textContent = 'Message sent successfully!';
                successMessage.className = 'text-green-500 text-sm mb-2';
                contactForm.querySelector('button[type="submit"]').insertAdjacentElement('beforebegin', successMessage);
                setTimeout(() => successMessage.remove(), 3000);
                contactForm.reset();
            }, function(error) {
                const errorMessage = document.createElement('p');
                errorMessage.textContent = 'Failed to send message: ' + error.text;
                errorMessage.className = 'text-red-500 text-sm mb-2';
                contactForm.querySelector('button[type="submit"]').insertAdjacentElement('beforebegin', errorMessage);
                setTimeout(() => errorMessage.remove(), 5000);
            });
    });
}
div.className = 'project-card pointer-events-auto bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4 w-64 cursor-pointer hover:scale-105 transition-transform';
div.innerHTML = `
    <img src="${projectData[i].image}" alt="${projectData[i].title}" class="w-full h-40 object-cover rounded-lg">
    <h3 class="text-white mt-2 font-genocide">${projectData[i].title}</h3>
    <p class="text-white/80 text-sm mt-1">${projectData[i].description}</p>
    <button class="voir-plus mt-4 px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all w-full">
        Voir Plus
    </button>
`;

// Update the project cards in normal mode
projectCards.forEach((card, index) => {
    card.className = 'project-card pointer-events-auto bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4 w-80 cursor-pointer hover:scale-105 transition-transform';
    card.innerHTML = `
        <div class="relative h-48 mb-4 overflow-hidden rounded-lg">
            <img src="${projectData[index].image}" alt="${projectData[index].title}" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        <h3 class="text-lg font-genocide text-white mb-2">${projectData[index].title}</h3>
        <p class="text-white/80 text-sm mb-4 line-clamp-2">${projectData[index].description}</p>
        <button class="voir-plus w-full py-2 px-4 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all text-sm font-medium">
            Voir Plus
        </button>
    `;
});
