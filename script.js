const btn = document.getElementById('msgBtn');
const messageDiv = document.getElementById('message');

btn.addEventListener('click', () => {
    const msg = "Olá, seja bem-vindo!";
    
    messageDiv.textContent = msg;
  });