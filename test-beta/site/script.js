// Substitua 'SUA_CHAVE_DE_API' pela sua chave de API real
const apiKey = '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';
const apiUrl = 'https://api.openai.com/v1/engines/davinci/completions';

const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', sendMessage);

function sendMessage() {
    const userMessage = userInput.value;
    if (!userMessage) return;

    addToChatLog('Você:', userMessage);
    userInput.value = '';

    // Enviar a mensagem do usuário para o servidor PHP
    fetch('api.php', {
        method: 'POST',
        body: JSON.stringify({ message: userMessage }),
    })
    .then(response => response.json())
    .then(data => {
        const chatResponse = data.response;
        addToChatLog('ChatGPT:', chatResponse);
    })
    .catch(error => console.error('Erro ao enviar mensagem:', error));
}

function addToChatLog(sender, message) {
    chatLog.innerHTML += `<p><strong>${sender}</strong>: ${message}</p>`;
    chatLog.scrollTop = chatLog.scrollHeight;
}
