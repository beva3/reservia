document.addEventListener('DOMContentLoaded', function() {
    // Get modal elements
    const modal = document.getElementById('inscriptionModal');
    const btn = document.getElementById('inscriptionBtn');
    const closeBtn = document.querySelector('.close');
    const loginLink = document.getElementById('loginLink');
    
    // Open modal when inscription button is clicked
    btn.addEventListener('click', function() {
        modal.style.display = 'block';
    });
    
    // Close modal when X is clicked
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Handle form submission
    document.getElementById('inscriptionForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        // Simple validation
        if (password !== confirmPassword) {
            alert('Les mots de passe ne correspondent pas!');
            return;
        }
        
        // Here you would typically send data to server
        console.log('Inscription submitted:', { name, phone, email, password });
        alert('Inscription réussie!');
        modal.style.display = 'none';
    });
    
    // Social login buttons
    document.querySelector('.google-btn').addEventListener('click', function() {
        alert('Connexion avec Google');
        // Implement Google login functionality
    });
    
    document.querySelector('.facebook-btn').addEventListener('click', function() {
        alert('Connexion avec Facebook');
        // Implement Facebook login functionality
    });
    
    // Already have account link
    loginLink.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Redirection vers la page de connexion');
        // Here you would typically redirect to login page or open login modal
        modal.style.display = 'none';
    });
    
    // Close modal with ESC key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
});