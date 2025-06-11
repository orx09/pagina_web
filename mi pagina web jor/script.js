document.addEventListener('DOMContentLoaded', () => {
    // --- Navegación Responsiva (Burger Menu) ---
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        navLinks.classList.toggle('nav-active');

        // Animate Links
        navItems.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // Cerrar el menú al hacer clic en un enlace (para móviles)
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('nav-active')) {
                navLinks.classList.remove('nav-active');
                burger.classList.remove('toggle');
                navItems.forEach(link => {
                    link.style.animation = ''; // Reset animation
                });
            }
        });
    });

    // Animación de los enlaces del menú
    // (Esta animación se define en CSS pero se activa con JS)
    // @keyframes navLinkFade {
    //     from {
    //         opacity: 0;
    //         transform: translateX(50px);
    //     }
    //     to {
    //         opacity: 1;
    //         transform: translateX(0px);
    //     }
    // }


    // --- Efecto "Scroll Reveal" para secciones ---
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal');

    const revealOnScroll = () => {
        scrollRevealElements.forEach(element => {
            // Obtener la posición de la sección
            const elementTop = element.getBoundingClientRect().top;
            const viewportHeight = window.innerHeight;

            // Si la sección está visible en la ventana
            if (elementTop < viewportHeight - 150) { // El 150 es un offset para que aparezca un poco antes
                element.classList.add('active');
            } else {
                element.classList.remove('active'); // Opcional: quitar la clase si se sale de la vista
            }
        });
    };

    // Ejecutar la función al cargar y al hacer scroll
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Ejecutar al cargar para elementos ya visibles
});