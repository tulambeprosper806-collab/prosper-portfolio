const body = document.body;
const toggleButton = document.querySelector('.theme-toggle');

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-mode');
    if (toggleButton) toggleButton.textContent = '🌙';
}

if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        const isLight = body.classList.toggle('light-mode');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        toggleButton.textContent = isLight ? '🌙' : '☀️';
        toggleButton.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
    });
}

const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-list a').forEach((link) => {
    const target = link.getAttribute('href');
    if (target === currentPage) {
        link.classList.add('active');
    }
});

document.querySelectorAll('a[href^="http"]').forEach((link) => {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
});

