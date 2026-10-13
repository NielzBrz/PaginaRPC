const btn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');
const icon = btn.querySelector('i');

// Alternar visibilidad del menú al hacer clic en el botón
btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    // Cambiar ícono de barras a 'X' y viceversa
    if (menu.classList.contains('hidden')) {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    } else {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    }
});

// Cerrar el menú automáticamente al hacer clic en cualquier opción
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add('hidden');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    });
});