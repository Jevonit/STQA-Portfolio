function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
    
    const menuBtn = document.querySelector('.menu-btn');
    menuBtn.classList.toggle('active');
}