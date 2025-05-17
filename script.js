const projectData = [
    {
        title: "Clapseur - YouTube",
        description: "Video, montage, derush, upload, son, DA produit par mes soins ",
        fullDescription: `
            <div class="space-y-8">
                <div class="relative w-full h-64">
                    <video class="w-full h-full object-cover rounded-lg" autoplay loop muted playsinline>
                        <source src="media/yt.mp4" type="video/mp4">
                    </video>
                </div>
                
                <div class="prose prose-invert max-w-none center">

                    <h2 class="text-xl font-genocide text-white/90 mt-8" center>Le Concept</h2>
                    <p class="text-white/80 leading-relaxed mb-6">
                        La chaine YouTube etait un projet que j'avais lance en 2016, et j'ai commencé par créer des vidéos basique sur les jeux vidéo. J'ai ensuite commencé à publier des vidéos sur YouTube, en agrandissant ma malette de conaissance dans ce milieu.
                    </p>
                    
                    <div class="space-y-4 center">
                    <h3 class="text-xl font-genocide text-white/90 mt-8" center">Competences/Connaissance</h3>
                    <p class="text-white/80 leading-relaxed">
                        Clapseur est une chaîne YouTube dédiee à la creation de contenu innovant et engageant. C'est un défi que je relève depuis 2016. Chaque vidéo est soigneusement produite pour offrir une expérience unique aux spectateurs.
                    </p>
                    
                    <h3 class="text-xl font-genocide text-white/90 mt-8" center">Contenu</h3>
                    <ul class="list-disc list-inside text-white/80 space-y-2">
                        <li>Vidéos Best-off</li>
                        <li>Contenu original et créatif</li>
                        <li>Montage Peu commun</li>
                        <li>Interaction avec la communauté fréquente</li>
                    </ul>
                </div>
                </div>
            </div>`,
        image: "media/yt.webp",
        videoUrl: "media/yt.mp4",
        websiteUrl: "https://www.youtube.com/@clapseur" 
    },
    {
        title: "Clapseur - Soundcloud",
        description: "Un historique publique de mes projets musicaux",
        fullDescription: `
            <div class="space-y-6">
                <div class="relative w-full h-96">
                    <iframe 
                        width="100%" 
                        height="300" 
                        scrolling="no" 
                        frameborder="no" 
                        allow="autoplay" 
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1543949563&color=%2321201f&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
                    </iframe>
                    <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
                        <a href="https://soundcloud.com/clapseur" title="Clapseur" target="_blank" style="color: #cccccc; text-decoration: none;">Clapseur</a> · 
                        <a href="https://soundcloud.com/clapseur/spy-shit" title="Spy shit" target="_blank" style="color: #cccccc; text-decoration: none;">Spy shit</a>
                    </div>
                </div>
                
                <div class="space-y-4">
                    <h3 class="text-xl font-genocide text-white/90">Le Projet</h3>
                    <p class="text-white/80 leading-relaxed">
                        La musique deupis mon plus jeune age m'a toujours fait vibré et a été une manière pour moi de m'exprimer d'une autre manière.
                    </p>
                    
                    <h3 class="text-xl font-genocide text-white/90">Caracteristiques</h3>
                    <ul class="list-disc list-inside text-white/80 space-y-2">
                        <li>Musique varie</li>
                        <li>Prodeuction de MAO</li>
                        <li>FL Studio/Abbleton</li>
                        <li>Multi-genre</li>
                    </ul>
                </div>
            </div>`,
        websiteUrl: "https://soundcloud.com/clapseur",
        image: "media/sc.png",
    },
    {
        title: "Clapseur - Twitch",
        description: "Ma chaine de streaming contabilisant le plus grand nombre de d'abonnés.",
        fullDescription: `
            <div class="space-y-6">
                <div class="relative w-full h-96">
<div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;"><iframe src="https://player.twitch.tv/?channel=clapseur&autoplay=false&parent=iframe.ly&parent=cdn.iframe.ly&parent=iframely.net&parent=iframely.com&parent=if-cdn.com" style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;" allowfullscreen scrolling="no" allow="encrypted-media *;"></iframe></div>
                </div>
                
                <div class="space-y-4">
                    <h3 class="text-xl font-genocide text-white/90">L'Inspiration</h3>
                    <p class="text-white/80 leading-relaxed">
                        J'ai longtemps aimé le jeu Counter-Strike 2, et j'ai toujours aimé la communaute de ce jeu. J'ai donc décidé de créer une chaine Twitch qui mettait en valeur ma passion pour le jeu et espere egalement pourvoir la transmettre a d'autres personnes.
                    </p>
                    
                    <h3 class="text-xl font-genocide text-white/90">Contenu</h3>
                    <ul class="list-disc list-inside text-white/80 space-y-2">
                        <li>Vidéos Best-off</li>
                        <li>Contenu original et créatif</li>
                        <li>Montage Peu commun</li>
                        <li>Interaction avec la communauté fréquente</li>
                    </ul>
                </div>
            </div>`,
        image: "media/tw.png",
        videoUrl: "media/tw.png",
        websiteUrl: "https://www.twitch.tv/clapseur"
    }
];

const regularProjectData = [
    {
        title: "Skinfolio",
        description: "Transformer vos skins CS2 en portolio inancier professionnel.",
        fullDescription: `
                <div class="relative w-full h-64">
                    <img class="w-full h-full object-cover rounded-lg" src="media/project1.png" alt="YouTube thumbnail">
                </div>
            
            <div class="space-y-8 text-center">
                <h2 class="text-center text-xl font-genocide text-white/90 mt-8 mx-auto">Le Projet</h2>
                <p class="text-white/80 leading-relaxed mb-6">
                    Une application web innovante qui transforme votre inventaire CS2 en un portfolio financier professionnel.
                </p>
                
                <h2 class="text-center text-xl font-genocide text-white/90 mt-8 mx-auto">Caracteristiques</h2>
                <ul class="list-disc list-inside text-white/80 space-y-2">
                    <li>Analyse détaillée des skins</li>
                    <li>Suivi des prix en temps réel</li>
                    <li>Statistiques de trading</li>
                    <li>Interface professionnelle</li>
                </ul>
            </div>`,
            websiteUrl: "https://skinfolio-xi.vercel.app"
    },
    {
        title: "Retro Morpion",
        description: "On me refuse pas un jeu auquel on fait parti.",
        fullDescription: `
            <div class="relative w-full h-64">
                <img class="w-full h-full object-cover rounded-lg" src="media/project2.png" alt="Retro Morpion thumbnail">
            </div>
            
            <div class="space-y-8 text-center">
                <h2 class="text-center text-xl font-genocide text-white/90 mt-8 mx-auto">Le Jeu</h2>
                <p class="text-white/80 leading-relaxed mb-6">
                    Une réinvention moderne du jeu classique du Morpion, avec une interface rétro et des animations fluides.
                </p>
                
                <h2 class="text-center text-xl font-genocide text-white/90 mt-8 mx-auto">Fonctionnalites</h2>
                <ul class="list-disc list-inside text-white/80 space-y-2">
                    <li>Mode 2 joueurs local</li>
                    <li>Intégration photo des joueurs</li>
                    <li>Design rétro authentique</li>
                    <li>Effets sonores nostalgiques</li>
                </ul>
            </div>`,
            websiteUrl: "https://morpion-seven.vercel.app/index.html" 
    },
    {
        title: "Lluvia Eterna",
        description: "Brief description of project 3",
        fullDescription: `
            <div class="relative w-full h-64">
                <img class="w-full h-full object-cover rounded-lg" src="media/project3.png" alt="Lluvia Eterna thumbnail">
            </div>
            
            <div class="space-y-8 text-center">
                <h2 class="text-center text-xl font-genocide text-white/90 mt-8 mx-auto">Le Concept</h2>
                <p class="text-white/80 leading-relaxed mb-6">
                    Une parfumerie en ligne remettant en valeur les souvenirs d'enfance.
                </p>
                
                <h2 class="text-center text-xl font-genocide text-white/90 mt-8 mx-auto">Caracteristiques</h2>
                <ul class="list-disc list-inside text-white/80 space-y-2">
                    <li>Parfumerie en ligne</li>
                    <li>Collection de parfums</li>
                    <li>Design épuré et noble</li>
                    <li>Expérience utilisateur intuitive</li>
                </ul>
            </div>`,
            websiteUrl: "https://lluvia-eterna.vercel.app" // Fixed URL
            
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

// Add this line to get references to your regular project cards
const regularProjectCards = document.querySelectorAll('.project-card');

// Add the handler to regular project cards
regularProjectCards.forEach((card, index) => {
    card.addEventListener('click', createProjectModalHandler(regularProjectData[index]));
});

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
        div.className = 'floating-div bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4 cursor-pointer';
        div.style.position = 'absolute';
        div.style.zIndex = '900';
        div.style.width = '150px';
        div.style.height = '100px';
        div.style.overflow = 'hidden';
        
        // Get data from projectData array instead of regularProjectData
        const project = projectData[i];
        // Updated HTML with smaller image container and project data
        div.innerHTML = `
            <div class="h-full flex flex-col justify-between">
                <div class="h-8 overflow-hidden rounded mb-1">
                    <img src="${project.image}" alt="${project.title}" style="width: 80px; height: 50px; object-fit: contain; margin: 0 auto;" class="rounded">
                </div>
                <h3 style="font-size: 8px; margin-bottom: 2px; color: white; font-family: genocide;">${project.title}</h3>
                <p style="font-size: 6px; color: rgba(255,255,255,0.8); display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${project.description}</p>
            </div>
        `;

        // Add click handler to the entire div
        div.addEventListener('click', createProjectModalHandler(projectData[i]));

        document.querySelector('#home').appendChild(div);
        floatingDivs.push(div);

        // Calculate initial position with increased radius and custom positioning for the third div
        let x, y;
        if (i === 2) { // For the third div (Project 3)
            x = -radius * 1; // Keep the same horizontal position
            y = radius * 0;  // Reduce the vertical offset to move it higher
        } else if (i === 1) { // For the second div (Project 2)
            x = radius * 0;  // Adjust horizontal position
            y = radius * 0.8;  // Reduce the vertical offset to move it higher
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
                // Use projectData instead of regularProjectData
                const project = projectData[i];
                
                const modal = document.getElementById('project-modal');
                const modalContent = document.getElementById('modal-content');
                
                // Show modal
                modal.classList.remove('hidden');
                modal.style.opacity = '0';
                modal.style.display = 'flex';
                modal.style.alignItems = 'center';
                modal.style.justifyContent = 'center';
                modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; // Darker background
                
                // Set modal content size and scrollable content
                modalContent.style.height = '90vh';
                modalContent.style.width = '50%';
                modalContent.style.maxWidth = '50%';
                modalContent.style.margin = 'auto';
                modalContent.style.overflowY = 'auto';
                modalContent.style.backgroundColor = 'rgba(0, 0, 0, 0.9)'; // Darker content background
                
                // Add website URL (default to # if not provided)
                const websiteUrl = project.websiteUrl || "https://example.com";
                
                modalContent.innerHTML = `
                    <button id="close-modal" class="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div class="overflow-y-auto h-full pr-4 -mr-4 pb-16">
                        ${project.fullDescription.replace(/<h2/g, '<h2 class="text-center text-xl font-genocide text-white/90 mt-8"')}
                        <div class="mt-8 text-center">
                            <a href="${websiteUrl}" target="_blank" class="inline-block px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all font-genocide border border-white/30 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                Visualiser
                            </a>
                        </div>
                    </div>
                `;
                
                // Add modal event listeners
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) {
                        // Close instead of hide
                        modal.style.display = 'none';
                        modal.classList.add('hidden');
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

function createProjectModalHandler(project) {
    return (e) => {
        e.stopPropagation();
        
        const modal = document.getElementById('project-modal');
        const modalContent = document.getElementById('modal-content');
        
        // Show modal
        modal.classList.remove('hidden');
        modal.style.opacity = '0';
        modal.style.display = 'flex';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        
        // Set modal content size and scrollable content
        modalContent.style.height = '90vh';
        modalContent.style.width = '50%';
        modalContent.style.maxWidth = '50%';
        modalContent.style.margin = 'auto';
        modalContent.style.overflowY = 'auto';
        modalContent.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        
        // Add website URL (default to # if not provided)
        const websiteUrl = project.websiteUrl || "https://example.com";
        
        modalContent.innerHTML = `
            <button id="close-modal" class="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <div class="overflow-y-auto h-full pr-4 -mr-4 pb-16">
                ${project.fullDescription.replace(/<h2/g, '<h2 class="text-center text-xl font-genocide text-white/90 mt-8"')}
                <div class="mt-8 text-center">
                    <a href="${websiteUrl}" target="_blank" class="inline-block px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all font-genocide border border-white/30 shadow-lg animate-pulse hover:animate-none">
                        Visualiser
                    </a>
                </div>
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

// Function to close modal
function closeModalHandler() {
    const modal = document.getElementById('project-modal');
    
    // Animation for closing
    gsap.to(modal, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
            modal.style.display = 'none';
            modal.classList.add('hidden');
        }
    });
}

// Add event listeners for regular project cards
document.addEventListener('DOMContentLoaded', function() {
    const regularProjectCards = document.querySelectorAll('#floating-projects .project-card');
    
    regularProjectCards.forEach((card, index) => {
        const voirPlusBtn = card.querySelector('.voir-plus');
        
        if (voirPlusBtn) {
            voirPlusBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                
                const project = regularProjectData[index];
                const modal = document.getElementById('project-modal');
                const modalContent = document.getElementById('modal-content');
                
                // Show modal
                modal.classList.remove('hidden');
                modal.style.opacity = '0';
                modal.style.display = 'flex';
                modal.style.alignItems = 'center';
                modal.style.justifyContent = 'center';
                modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
                modal.style.position = 'fixed';
                modal.style.top = '0';
                modal.style.left = '0';
                modal.style.width = '100%';
                modal.style.height = '100%';
                modal.style.zIndex = '2000'; // Higher z-index to appear above header
                
                // Set modal content
                modalContent.style.height = '90vh';
                modalContent.style.width = '50%';
                modalContent.style.maxWidth = '50%';
                modalContent.style.margin = 'auto';
                modalContent.style.overflowY = 'auto';
                modalContent.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
                modalContent.style.position = 'relative';
                modalContent.style.padding = '2rem';
                modalContent.style.borderRadius = '0.5rem';
                
                modalContent.innerHTML = `
                    <h1 class="text-3xl font-genocide text-white/90 mb-8 text-center"></h1>
                    <button id="close-modal" class="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div class="overflow-y-auto h-full pr-4 -mr-4">
                        ${project.fullDescription}
                    </div>
                `;
                
                // Add modal event listeners
                modal.addEventListener('click', function(e) {
                    if (e.target === modal) {
                        closeModalHandler();
                    }
                });
                
                const closeBtn = modalContent.querySelector('#close-modal');
                if (closeBtn) {
                    closeBtn.addEventListener('click', function(e) {
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

// Modify the regular view project cards click handlers
document.querySelectorAll('#floating-projects .project-card .voir-plus').forEach((button, index) => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        const project = regularProjectData[index];
        
        const modal = document.getElementById('project-modal');
        const modalContent = document.getElementById('modal-content');


        
        // Add click handler for the entire div instead of just the button
        div.addEventListener('click', (e) => {
            e.stopPropagation();
            const project = projectData[i];
            
            const modal = document.getElementById('project-modal');
            const modalContent = document.getElementById('modal-content');
            
            // Show modal
            modal.classList.remove('hidden');
            modal.style.opacity = '0';
            modal.style.display = 'flex';
            modal.style.alignItems = 'center';
            modal.style.justifyContent = 'center';
            modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            
            modalContent.style.height = '90vh';
            modalContent.style.width = '50%';
            modalContent.style.maxWidth = '50%';
            modalContent.style.margin = 'auto';
            modalContent.style.overflowY = 'auto';
            modalContent.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
            
            modalContent.innerHTML = `
                <h1 class="text-3xl font-genocide text-white/90 mb-8 text-center fixed top-20 left-1/2 transform -translate-x-1/2">${project.title}</h1>
                <button id="close-modal" class="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div class="overflow-y-auto h-full pr-4 -mr-4 mt-16">
                    ${project.fullDescription}
                </div>
            `;
            
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.style.display = 'none';
                    modal.classList.add('hidden');
                }
            });
            
            const closeBtn = modalContent.querySelector('#close-modal');
            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    modal.style.display = 'none';
                    modal.classList.add('hidden');
                });
            }
            
            gsap.to(modal, {
                opacity: 1,
                duration: 0.3
            });
            
            gsap.fromTo(modalContent,
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.3, ease: "back.out" }
            );
        });
    });
});
