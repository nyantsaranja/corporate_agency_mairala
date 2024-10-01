// about-us.js

document.addEventListener('DOMContentLoaded', function () {
    const aboutUsSection = document.getElementById('about-us-section');

    // Fetch the about-us.html content
    fetch('html/about-us.html')
        .then(response => response.text())
        .then(data => {
            aboutUsSection.innerHTML = data;
        })
        .catch(error => console.error('Error loading About Us section:', error));
});
