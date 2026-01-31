document.addEventListener('DOMContentLoaded', () => {
    
    // Configuration for the Intersection Observer
    // Threshold 0.15 means the animation triggers when 15% of the element is visible
    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.15 
    };

    // Callback function: What happens when an element is seen?
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the class that triggers the CSS opacity/transform transition
                entry.target.classList.add('reveal-visible');
                
                // Stop observing this element (animation happens only once)
                observer.unobserve(entry.target);
            }
        });
    };

    // Create the observer instance
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // 1. Observe "Pair Groups" (for the Highlights section)
    const pairGroups = document.querySelectorAll('.pair-group');
    pairGroups.forEach(group => {
        observer.observe(group);
    });

    // 2. Observe General Wrappers (About Text, Section Headers, Contact Grid)
    const generalWrappers = document.querySelectorAll('.reveal-wrapper');
    generalWrappers.forEach(wrapper => {
        observer.observe(wrapper);
    });

    // 3. Observe Individual Contact Items (if they aren't wrapped)
    // Note: In your HTML, contact items have the class 'reveal-item' but are inside a 'reveal-wrapper'.
    // The wrapper handles the trigger for the group in the contact section.

    // --- Sticky Navbar Logic ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        // If user scrolls down more than 50px
        if (window.scrollY > 50) {
            // Add shadow and make background slightly more opaque
            navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
            navbar.style.background = "rgba(255, 255, 255, 0.98)";
        } else {
            // Revert to initial state
            navbar.style.boxShadow = "0 1px 0 rgba(0,0,0,0.05)";
            navbar.style.background = "rgba(255, 255, 255, 0.95)";
        }
    });

    // --- Mobile Menu Logic ---
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.mobile-menu-overlay');
    const closeBtn = document.querySelector('.close-menu');

    const closeMenu = () => {
        document.body.classList.remove('menu-open');
    };

    hamburger?.addEventListener('click', () => {
        document.body.classList.add('menu-open');
    });

    overlay?.addEventListener('click', closeMenu);
    closeBtn?.addEventListener('click', closeMenu);

    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

});