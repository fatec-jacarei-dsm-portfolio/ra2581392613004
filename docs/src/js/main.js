(() => {
    const menuToggle =
        document.querySelector('.menu-toggle');

    const nav =
        document.querySelector('.nav');

    const navLinks =
        document.querySelectorAll('.nav-link');


    // ==============================
    // MENU MOBILE
    // ==============================

    if (menuToggle && nav) {

        menuToggle.setAttribute(
            'aria-expanded',
            'false'
        );

        menuToggle.addEventListener('click', () => {

            const isOpen =
                nav.classList.toggle('active');

            menuToggle.setAttribute(
                'aria-expanded',
                String(isOpen)
            );

            menuToggle.setAttribute(
                'aria-label',
                isOpen
                    ? 'Fechar menu'
                    : 'Abrir menu'
            );
        });


        navLinks.forEach((link) => {

            link.addEventListener('click', () => {

                nav.classList.remove('active');

                menuToggle.setAttribute(
                    'aria-expanded',
                    'false'
                );

                menuToggle.setAttribute(
                    'aria-label',
                    'Abrir menu'
                );
            });

        });
    }


    // ==============================
    // ANO AUTOMÁTICO
    // ==============================

    const year =
        document.querySelector('#current-year');

    if (year) {
        year.textContent =
            new Date().getFullYear();
    }


    // ==============================
    // LINK ATIVO
    // ==============================

    const sections =
        document.querySelectorAll(
            'main section[id]'
        );


    function updateActiveLink() {

        if (
            !sections.length ||
            !navLinks.length
        ) {
            return;
        }

        const scrollPosition =
            window.scrollY + 180;

        let currentSection =
            'inicio';


        sections.forEach((section) => {

            if (
                scrollPosition >=
                section.offsetTop
            ) {
                currentSection =
                    section.id;
            }

        });


        navLinks.forEach((link) => {

            const isActive =
                link.getAttribute('href') ===
                `#${currentSection}`;

            link.classList.toggle(
                'active',
                isActive
            );

        });
    }


    // Atualiza durante o scroll
    window.addEventListener(
        'scroll',
        updateActiveLink,
        { passive: true }
    );


    // Atualiza ao redimensionar
    window.addEventListener(
        'resize',
        updateActiveLink
    );


    // Atualização inicial
    updateActiveLink();

})();