const loginForm = document.getElementById('login');
const registerForm = document.getElementById('register');
const loginButton = document.getElementById('login-btn');
const registerButton = document.getElementById('register-btn');

loginButton.addEventListener('click', () => {
  loginForm.classList.add('active');
  registerForm.classList.remove('active');
});

registerButton.addEventListener('click', () => {
  loginForm.classList.remove('active');
  registerForm.classList.add('active');
});

loginForm.addEventListener('submit'), (event) => {
  event.preventDefault();
  const username = event.target.username.value
}