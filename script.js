const menu = document.getElementById('sidebar')
const flame = document.getElementById('flame')
const logo = document.getElementById('logo')


logo.addEventListener('click', function() {
    menu.classList.toggle('is-active');
});

flame.addEventListener('click', function() {
    menu.classList.toggle('is-active');
});
