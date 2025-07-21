window.addEventListener('DOMContentLoaded', () => {
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');
    if(savedEmail) {
        document.getElementById('email').value = savedEmail;
    }
    if(savedPassword) {
        document.getElementById('password').value = savedPassword;
    }
})
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault(); // ページリロードを防ぐ

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // localStorage に保存
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
  });