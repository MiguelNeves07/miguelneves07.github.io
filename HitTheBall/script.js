const scoreElement = document.getElementById('score');
const errorElement = document.getElementById('errors');
const hitSound = document.getElementById('hit-sound');
let score = 0;
let errors = 0;
const maxErrors = 3;
const noteCreationInterval = 250;

function createNote() {
    const note = document.createElement('div');
    note.classList.add('note');
    const screenWidth = window.innerWidth;
    const noteSize = screenWidth * 0.05;
    const randomX = Math.random() * (screenWidth - noteSize);
    note.style.left = randomX + 'px';
    document.querySelector('.game-container').appendChild(note);

    note.addEventListener('animationiteration', () => {
        if (!note.classList.contains('removed')) {
            errors++;
            errorElement.textContent = errors;
        }
        note.remove();
    });
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp' || event.key === ' ') {
        const note = document.querySelector('.note');
        if (note) {
            note.remove();
            score++;
            scoreElement.textContent = score;
            hitSound.currentTime = 0;
            hitSound.play();
        } else {
            errors++;
            errorElement.textContent = errors;
        }
    }
});

setInterval(createNote, noteCreationInterval);
