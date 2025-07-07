// **********************************************************
        // * JAVASCRIPT GOES HERE FOR INTERACTIVITY                *
        // * You could add JS for:                                 *
        // * - Smooth scrolling for navigation links               *
        // * - Image carousels/sliders                             *
        // * - Product configurators                               *
        // * - "Load More" buttons                                 *
        // * - Animations on scroll                                *
        // **********************************************************

        // Example: Add active class to navigation based on scroll position
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('nav ul li a');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= sectionTop - sectionHeight / 3) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.href.includes(current)) {
                    link.classList.add('active');
                }
            });
        });