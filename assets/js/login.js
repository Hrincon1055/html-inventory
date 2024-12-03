function checkTokenAndRedirect() {
  const token = JSON.parse(localStorage.getItem('token') || '{}');
  if (!token?.jwt) {
    window.location.href = 'index.html';
  }
}
checkTokenAndRedirect();
