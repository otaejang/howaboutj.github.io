document.addEventListener('DOMContentLoaded', () => {
    // --- Theme Toggle Functionality ---
    const themeToggleButton = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        applyTheme(prefersDarkScheme.matches ? 'dark' : 'light');
    }

    themeToggleButton.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(newTheme);
    });

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
});