
function scrollValue() {
    var navbar = document.getElementById('navbar');
    var scroll = window.scrollY;
    if (scroll < 200) {
        navbar.classList.remove('newColor');
    } else {
        navbar.classList.add('newColor');
    }
}

window.addEventListener('scroll', scrollValue);