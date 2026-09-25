(() => {
    const toggle = document.querySelector('[data-theme-toggle]');

    if (!toggle) return;

    const STORAGE_KEY = 'portfolio-theme';
    const icon = toggle.querySelector('.theme-icon');

    const savedTheme = localStorage.getItem(STORAGE_KEY);
    const prefersLight = window.matchMedia(
        '(prefers-color-scheme: light)'
    ).matches;

    function applyTheme(theme, save = true) {
        const isLight = theme === 'light';

        document.body.classList.toggle('light', isLight);

        document.documentElement.style.colorScheme =
            isLight ? 'light' : 'dark';

        toggle.setAttribute(
            'aria-label',
            isLight
                ? 'Ativar tema escuro'
                : 'Ativar tema claro'
        );

        toggle.setAttribute(
            'title',
            isLight
                ? 'Tema escuro'
                : 'Tema claro'
        );

        if (icon) {
            icon.textContent = isLight ? '☼' : '☾';
        }

        if (save) {
            localStorage.setItem(STORAGE_KEY, theme);
        }
    }

    const initialTheme =
        savedTheme ||
        (prefersLight ? 'light' : 'dark');

    applyTheme(initialTheme, false);

    toggle.addEventListener('click', () => {
        const nextTheme =
            document.body.classList.contains('light')
                ? 'dark'
                : 'light';

        applyTheme(nextTheme);
    });
})();