document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
  
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent form from reloading the page
  
      const email = loginForm.email.value.trim();
      const password = loginForm.password.value;
  
      // Example static validation (replace with real validation logic)
      if (email === '' || password === '') {
        alert('Please fill in both fields!');
        return;
      }
  
      // Simulated login check (for real apps, use backend verification)
      if (email === 'admin@example.com' && password === 'admin123') {
        alert('Login successful!');
        // Redirect to a dashboard or home page
        window.location.href = 'dashboard.html'; // replace with your page
      } else {
        alert('Invalid email or password. Please try again.');
      }
    });
  });
  