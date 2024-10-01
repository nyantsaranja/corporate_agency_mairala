// Function to load the services section into the main HTML file
function loadServicesSection() {
    const ourService = document.getElementById('our-service-section');
    fetch('/html/our-service.html')
        .then(response => response.text())
        .then(data => {
            ourService.innerHTML += data;
        })
        .catch(error => console.error('Error loading the services section:', error));
}

// Ensure the DOM is fully loaded before injecting content
document.addEventListener('DOMContentLoaded', loadServicesSection);
