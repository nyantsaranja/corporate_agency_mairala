// header.js
document.addEventListener('DOMContentLoaded', function () {
    const headerContainer = document.getElementById('header-section');

    // Load header HTML dynamically
    fetch('html/header.html')
        .then(response => response.text())
        .then(data => {
            headerContainer.innerHTML = data;
            setupBurgerMenu();
        });

    // Function to handle the burger menu
    function setupBurgerMenu() {
        const burger = document.getElementById('burger');
        const menu = document.getElementById('menu');

        burger.addEventListener('click', () => {
            menu.classList.toggle('active');
            burger.classList.toggle('toggle');
        });
    }
});
