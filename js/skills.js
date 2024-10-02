// Store the main content element in a constant
const mainContent = document.getElementById('skills-section');

// Function to load the skills section into the main HTML file
function loadSkillsSection() {
    fetch('html/skills.html')
        .then(response => response.text())
        .then(data => {
            mainContent.innerHTML += data;

            // Call the function to animate the inner circles after content is loaded
            animateInnerCircles();
        })
        .catch(error => console.error('Error loading the skills section:', error));
}

// Function to animate the white inner circles using ProgressBar.js (limited to 3/4 completion)
function animateInnerCircles() {
    const options = {
        strokeWidth: 6,
        color: '#fff', // White progress bar inside
        trailColor: 'transparent', // No trail for the inner circle
        easing: 'easeInOut',
        duration: 1400,
        svgStyle: null,
        text: {
            autoStyleContainer: false
        },
        from: { color: '#fff', width: 6 },
        to: { color: '#fff', width: 6 },
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            // Set the maximum value to 75 for 3/4 completion
            const value = Math.round(circle.value() * 75); // Change this to limit percentage to 75%
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value + '%');
            }

            circle.text.style.color = '#fff'; // White text for percentage
            circle.text.style.position = 'absolute';
            circle.text.style.top = '50%';
            circle.text.style.left = '50%';
            circle.text.style.transform = 'translate(-50%, -50%)';
        }
    };

    // Initialize each inner circle progress bar (set to animate to 75%)
    const marketing = new ProgressBar.Circle('#circle-marketing', options);
    const research = new ProgressBar.Circle('#circle-research', options);
    const management = new ProgressBar.Circle('#circle-management', options);
    const consultancy = new ProgressBar.Circle('#circle-consultancy', options);
    const promotion = new ProgressBar.Circle('#circle-promotion', options);

    // Animate the progress bars to their respective percentages (0.75 represents 75% or 3/4 completion)
    marketing.animate(0.75);  // 75% for Marketing
    research.animate(0.75);   // 75% for Research
    management.animate(0.75); // 75% for Management
    consultancy.animate(0.75);// 75% for Consultancy
    promotion.animate(0.75);  // 75% for Promotion
}

// Ensure the DOM is fully loaded before injecting the content and starting the animation
document.addEventListener('DOMContentLoaded', loadSkillsSection);
