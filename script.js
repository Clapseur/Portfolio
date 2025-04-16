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