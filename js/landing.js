// landing.js

document.addEventListener('DOMContentLoaded', function () {
    const landingSection = document.getElementById('landing-section');

    // Fetch the landing.html content
    fetch('html/landing.html')
        .then(response => response.text())
        .then(data => {
            // Insert the fetched content into the landing-section div
            landingSection.innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading landing section:', error);
        });
});
