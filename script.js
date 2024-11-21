// Smooth scroll to sections
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thank you for contacting us. We will get back to you shortly.');
    this.reset();
});
