// script.js

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
});

// Smooth scrolling
const anchorLinks = document.querySelectorAll('a[href^="#"]');

for (const link of anchorLinks) {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Scroll to the target element smoothly
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
}