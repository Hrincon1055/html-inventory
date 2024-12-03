document.addEventListener('DOMContentLoaded', function () {
  const storedUser = JSON.parse(localStorage.getItem('token') || '{}');
  if (storedUser?.user) {
    const { username } = storedUser?.user;
    const userFullNameElement = document.getElementById('userFullName');
    userFullNameElement.textContent = username.toUpperCase();
  }
});
