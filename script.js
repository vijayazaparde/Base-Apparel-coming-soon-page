const form = document.getElementById('emailForm');
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailValue = emailInput.value;

  if (!emailValue) {
    errorMessage.textContent = 'Email field cannot be empty';
    errorMessage.style.visibility = 'visible';
  } else if (!validateEmail(emailValue)) {
    errorMessage.textContent = 'Please provide a valid email';
    errorMessage.style.visibility = 'visible';
  } else {
    errorMessage.style.visibility = 'hidden';
    alert('Thank you! You will be notified.');
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
