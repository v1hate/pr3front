// /frontend/js/login.js
document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('https://pr3back.onrender.com/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (response.ok) {
        alert('Inicio de sesión exitoso');
        // Redirigir a chat.html o almacenar token
    } else {
        alert(data.message || 'Error en el inicio de sesión');
    }
});
