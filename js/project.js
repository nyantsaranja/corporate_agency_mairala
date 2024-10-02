// about-us.js

document.addEventListener('DOMContentLoaded', function () {
    const aboutUsSection = document.getElementById('project-section');

    // Fetch the about-us.html content
    fetch('html/project.html')
        .then(response => response.text())
        .then(data => {
            aboutUsSection.innerHTML = data;
        })
        .catch(error => console.error('Error loading About Us section:', error));
});
