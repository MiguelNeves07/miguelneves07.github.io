document.addEventListener("DOMContentLoaded", function() {
  const board = document.querySelector(".board");
  const cells = document.querySelectorAll(".cell");
  const restartBtn = document.querySelector(".restart");

  let currentPlayer = "X";
  let gameEnded = false;

  cells.forEach(cell => {
    cell.addEventListener("click", handleCellClick);
  });

  restartBtn.addEventListener("click", restartGame);

  function handleCellClick(e) {
    const cell = e.target;

    if (cell.textContent === "" && !gameEnded) {
      cell.textContent = currentPlayer;
      cell.classList.add(currentPlayer);

      if (checkWin()) {
        alert("O jogador " + currentPlayer + " venceu!");
        gameEnded = true;
      } else if (checkDraw()) {
        alert("O jogo terminou em empate!");
        gameEnded = true;
      } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    }
  }

  function checkWin() {
    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // linhas
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // colunas
      [0, 4, 8], [2, 4, 6] // diagonais
    ];

    return winningCombos.some(combo => {
      const [a, b, c] = combo;
      return cells[a].textContent !== "" &&
             cells[a].textContent === cells[b].textContent &&
             cells[a].textContent === cells[c].textContent;
    });
  }

  function checkDraw() {
    return Array.from(cells).every(cell => cell.textContent !== "");
  }

  function restartGame() {
    cells.forEach(cell => {
      cell.textContent = "";
      cell.classList.remove("X", "O");
    });

    currentPlayer = "X";
    gameEnded = false;
  }
});
