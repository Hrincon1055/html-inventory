document.addEventListener('DOMContentLoaded', function () {
  const signOutLink = document.getElementById('signOutLink');
  signOutLink.addEventListener('click', function (event) {
    event.preventDefault();
    localStorage.removeItem('token');
    window.location.href = 'index.html';
  });
});
