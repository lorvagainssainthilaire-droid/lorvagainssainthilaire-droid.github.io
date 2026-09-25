// Menu mobile
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const headerMenu = document.querySelector('.header-menu');

    // Créer le bouton burger
    const burger = document.createElement('div');
    burger.className = 'menu-toggle';
    burger.innerHTML = '<span class="material-symbols-outlined">menu</span>';
    document.querySelector('header .flex').appendChild(burger);

    // Toggle menu
    burger.addEventListener('click', function () {
        headerMenu.classList.toggle('active');
        const icon = burger.querySelector('.material-symbols-outlined');
        icon.textContent = headerMenu.classList.contains('active') ? 'close' : 'menu';
    });

    // Fermer au clic sur un lien
    document.querySelectorAll('.header-menu a').forEach(link => {
        link.addEventListener('click', () => {
            headerMenu.classList.remove('active');
            burger.querySelector('.material-symbols-outlined').textContent = 'menu';
        });
    });
});
