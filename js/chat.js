// /frontend/js/chat.js
document.getElementById('messageForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const message = document.getElementById('message').value;

    const response = await fetch('http://localhost:5000/send-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
    });

    const data = await response.json();
    if (response.ok) {
        alert('Mensaje enviado');
        // Actualizar la interfaz del chat
    } else {
        alert(data.message || 'Error al enviar el mensaje');
    }
});
