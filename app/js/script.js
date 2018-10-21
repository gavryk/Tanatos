var menu = document.getElementById('clickMenu');
var nav = document.getElementById('nav');
var scroll = document.getElementById('down');
scrolled = window.pageXOffset;

menu.addEventListener('click', function() {
    nav.classList.toggle('navigation_active');
});

scroll.addEventListener('click', function () {
    window.scrollTo(0, 700);
    console.log(scrolled);
});