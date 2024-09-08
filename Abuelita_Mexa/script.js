document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navWrapper = document.getElementById('nav-wrapper');

    hamburger.addEventListener('click', function() {
        navWrapper.classList.toggle('active');
    });
});