document.addEventListener('DOMContentLoaded', () => {
    // --- Theme Toggle Functionality ---
    const themeToggleButton = document.getElementById('theme-toggle');
    const themeIcon = themeToggleButton?.querySelector('.theme-icon');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    function updateThemeIcon(theme) {
        if (themeIcon) {
            themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
        }
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        updateThemeIcon(theme);
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        const initialTheme = prefersDarkScheme.matches ? 'dark' : 'light';
        applyTheme(initialTheme);
    }

    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            applyTheme(newTheme);
        });
    }

    prefersDarkScheme.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            applyTheme(e.matches ? 'dark' : 'light');
        }
    });

    // --- "See More" Button Functionality ---
    const seeMoreButtons = document.querySelectorAll('.see-more-btn');

    seeMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const abstract = button.nextElementSibling;
            abstract.classList.toggle('hidden');

            // Update button text
            if (abstract.classList.contains('hidden')) {
                button.textContent = 'See More';
            } else {
                button.textContent = 'See Less';
            }
        });
    });
    const y = document.getElementById("year");
    if (y) {
        y.textContent = new Date().getFullYear();
    }
});