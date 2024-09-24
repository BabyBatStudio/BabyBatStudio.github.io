  document.addEventListener('DOMContentLoaded', function() {
    // Get all buttons with data-target attributes
    document.querySelectorAll('.nav-link').forEach(button => {
      button.addEventListener('click', function() {
        // Get the target section's id from the data-target attribute
        const targetId = this.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);
  
        // Scroll to the section smoothly if the target exists
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  });