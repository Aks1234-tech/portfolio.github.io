// Example JavaScript for menu toggle on mobile (optional)
// You can enhance this later

const menuIcon = document.getElementById('menu-icon-js');
const navbar = document.querySelector('.navbar');

if(menuIcon){
    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
}
