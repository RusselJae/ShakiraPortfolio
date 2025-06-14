// Initialize EmailJS
(function() {
    emailjs.init("wuuFm3q6M-F2al37w"); // Replace 'YOUR_USER_ID' with your EmailJS user ID
})();

// Form submission handler for sending emails via EmailJS
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Send the email using EmailJS
    emailjs.sendForm('service_mvf5x32', 'template_js6hrcv', this)
        .then(function(response) {
            alert("Message sent successfully!");
            document.getElementById("contact-form").reset(); // Clear the form
        }, function(error) {
            alert("There was an error sending your message. Please try again.");
            console.error("EmailJS Error:", error);
        });
});

// Toggle Menu Icon and Navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');   // Toggle the 'bx-x' class for the icon change
    navbar.classList.toggle('active');   // Toggle 'active' class for the navbar
});

// Toggle Project Image Visibility
function toggleProject(projectId) {
    var projectImage = document.getElementById(projectId);
    
    // Toggle the display property of the project image
    if (projectImage.style.display === "none" || projectImage.style.display === "") {
        projectImage.style.display = "block";  // Show the image
    } else {
        projectImage.style.display = "none";   // Hide the image
    }
}
function toggleCertificate(id) {
  const cert = document.getElementById(id);
  cert.classList.toggle('show');
}
