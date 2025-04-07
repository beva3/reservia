// Modal elements
const signupModal = document.getElementById('signupModal');
const loginModal = document.getElementById('loginModal');
const openSignupBtn = document.getElementById('openSignupBtn');
const openLoginBtn = document.getElementById('openLoginBtn');
const closeSignupBtn = document.getElementById('closeSignupBtn');
const closeLoginBtn = document.getElementById('closeLoginBtn');
const closeSignupX = signupModal.querySelector('.close');
const closeLoginX = loginModal.querySelector('.close');

// Open modals
openSignupBtn.addEventListener('click', () => {
    signupModal.style.display = 'block';
});

openLoginBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

// Close modals
function closeSignupModal() {
    signupModal.style.display = 'none';
}

function closeLoginModal() {
    loginModal.style.display = 'none';
}

closeSignupBtn.addEventListener('click', closeSignupModal);
closeLoginBtn.addEventListener('click', closeLoginModal);
closeSignupX.addEventListener('click', closeSignupModal);
closeLoginX.addEventListener('click', closeLoginModal);

// Close when clicking outside modal
window.addEventListener('click', (event) => {
    if (event.target === signupModal) {
        closeSignupModal();
    }
    if (event.target === loginModal) {
        closeLoginModal();
    }
});

// Form validation for signup
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Check if passwords match
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword) {
        alert('Les mots de passe ne correspondent pas!');
        return;
    }
    
    // Check if terms are accepted
    if (!document.getElementById('conditions').checked) {
        alert('Veuillez accepter les conditions d\'utilisation');
        return;
    }
    
    // If everything is OK
    alert('Inscription réussie!');
    this.reset();
    closeSignupModal();
});

// Form validation for login
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Basic validation - in a real app you would check against a database
    if (!email || !password) {
        alert('Veuillez remplir tous les champs');
        return;
    }
    
    // If everything is OK
    alert('Connexion réussie! Bienvenue!');
    this.reset();
    closeLoginModal();
});