document.addEventListener('DOMContentLoaded', function () {
  var loginForm = document.getElementById('loginForm');
  var loginButton = document.getElementById('loginButton');
  loginButton.addEventListener('click', function () {
      
      var username = loginForm.querySelector('input[type="text"]').value;
      var password = loginForm.querySelector('input[type="password"]').value;

      if (username === 'sven' && password === '12345') {
          window.location.href = 'login.html';
      } else {
          alert('Invalid username or password. Please try again.');
      }
  });
});
