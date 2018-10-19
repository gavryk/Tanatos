var menu = document.getElementById('clickMenu');
var nav = document.getElementById('nav');

menu.addEventListener('click', function() {
    nav.classList.toggle('navigation_active');
});