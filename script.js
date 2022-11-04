const menu = document.getElementById('sidebar')
const logo = document.getElementById('logo')
const skull = document.getElementById('skull')


logo.addEventListener('click', function() {
    menu.classList.toggle('is-active');
});

skull.addEventListener('click', function() {
    menu.classList.toggle('is-active');
});

