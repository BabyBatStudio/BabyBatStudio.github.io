// Get all nav buttons
const navButtons = document.querySelectorAll('.nav-link');

// Loop through the buttons and add click event listeners
navButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Get the target section ID from the data-target attribute
    const targetSectionId = this.getAttribute('data-target');
    // Find the target section element
    const targetSection = document.getElementById(targetSectionId);
    
    // Check if the target section exists
    if (targetSection) {
      // Scroll into view with smooth behavior
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
