document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('projectModal');
    const closeBtn = document.getElementsByClassName('close')[0];
    const projectCards = document.querySelectorAll('.project-card');

    // For debugging
    console.log('Found project cards:', projectCards.length);

    projectCards.forEach(card => {
        card.addEventListener('click', function(e) {
            console.log('Card clicked!'); // Debug log
            const data = this.dataset;
            console.log('Card data:', data); // Debug log
            
            // Update modal content
            document.getElementById('modalTitle').textContent = data.title;
            document.getElementById('modalImage').src = data.image;
            document.getElementById('modalDescription').textContent = data.description;
            
            // Update technologies
            const techStack = document.getElementById('modalTechnologies');
            techStack.innerHTML = '';
            data.technologies.split(',').forEach(tech => {
                const techTag = document.createElement('span');
                techTag.className = 'tech-tag';
                techTag.textContent = tech.trim();
                techStack.appendChild(techTag);
            });

            // Update features
            const featuresList = document.getElementById('modalFeatures');
            featuresList.innerHTML = '';
            data.features.split(',').forEach(feature => {
                const li = document.createElement('li');
                li.textContent = feature.trim();
                featuresList.appendChild(li);
            });

            // Update links
            const demoLink = document.getElementById('modalDemo');
            const githubLink = document.getElementById('modalGithub');
            demoLink.href = data.demo;
            githubLink.href = data.github;

            // Show modal
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    });

    // Close modal when clicking the X
    closeBtn.addEventListener('click', function() {
        closeModal();
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            closeModal();
        }
    });

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
});