// Selecione o botão "Iniciar Jogo" e a bola
const startButton = document.getElementById('start-button');
const target = document.querySelector('.target');
const timerElement = document.getElementById('timer');
const scoreElement = document.getElementById('score');

let score = 0;
let timer = 0;
let gameInterval;

// Função para atualizar o temporizador
function updateTimer() {
    timer += 1;
    timerElement.textContent = timer + 's';
}

// Função para mover a bola para uma posição aleatória
function moveTarget() {
    const maxWidth = window.innerWidth - target.clientWidth;
    const maxHeight = window.innerHeight - target.clientHeight;
    const newX = Math.floor(Math.random() * maxWidth);
    const newY = Math.floor(Math.random() * maxHeight);
    target.style.left = newX + 'px';
    target.style.top = newY + 'px';
}

// Função para lidar com o clique na bola
function handleTargetClick() {
    score += 1;
    scoreElement.textContent = score;
    moveTarget();
}

// Adicione um ouvinte de clique ao botão "Iniciar Jogo"
startButton.addEventListener('click', () => {
    // Torna a bola visível ao definir o estilo "display" como "block"
    target.style.display = 'block';

    // Inicializa o temporizador
    timer = 0;
    timerElement.textContent = '0s';

    // Inicializa a pontuação
    score = 0;
    scoreElement.textContent = '0';

    // Move a bola para uma posição aleatória
    moveTarget();

    // Configura um intervalo para atualizar o temporizador a cada segundo
    gameInterval = setInterval(updateTimer, 1000);

    // Adiciona um ouvinte de clique à bola
    target.addEventListener('click', handleTargetClick);
});

// Seu código JavaScript existente...
