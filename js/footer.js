// about-us.js

document.addEventListener('DOMContentLoaded', function () {
    const aboutUsSection = document.getElementById('footer-section');

    // Fetch the about-us.html content
    fetch('html/footer.html')
        .then(response => response.text())
        .then(data => {
            aboutUsSection.innerHTML = data;
            // Automatically updates the copyright year
            document.getElementById("current-year").textContent = new Date().getFullYear();
        })
        .catch(error => console.error('Error loading About Us section:', error));
});

