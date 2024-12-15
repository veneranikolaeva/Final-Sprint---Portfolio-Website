document.addEventListener("DOMContentLoaded", function() {

   // Color Picker Functionality
   document.getElementById('colorInput').addEventListener('input', function() {
    document.body.style.backgroundColor = this.value; // Change background color of the body
});
});

    document.getElementById('reveal-skills').addEventListener('click', function() {
        const skillsList = document.getElementById('skills-list');
        const newSkills = ['React', 'Node.js', 'Git'];

        newSkills.forEach(skill => {
            const li = document.createElement('li');
            li.textContent = skill;
            skillsList.appendChild(li);
        });

        this.style.display = 'none'; // Hide button after revealing skills
    });

    // Modal Functionality
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const closeBtn = document.getElementById('close');

    document.querySelectorAll('.view-more').forEach(button => {
        button.addEventListener('click', function() {
            const projectTitle = this.parentElement.querySelector('h3').textContent;
            const projectDescription = this.parentElement.getAttribute('data-description');

            modalTitle.textContent = projectTitle;
            modalDescription.textContent = projectDescription;
            modal.style.display = 'block'; // Show the modal
        });
    });

    // Close the modal
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
