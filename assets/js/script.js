// Función para obtener la jugada de la computadora
function getComputerChoice() {
    const choices = ["piedra", "papel", "tijera"];
    return choices[Math.floor(Math.random() * 3)];
  }
  
  // Función para determinar el ganador
  function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return "Empate";
    } else if (
      (playerChoice === "piedra" && computerChoice === "tijera") ||
      (playerChoice === "papel" && computerChoice === "piedra") ||
      (playerChoice === "tijera" && computerChoice === "papel")
    ) {
      return "¡Ganaste!";
    } else {
      return "Perdiste";
    }
  }
  
  // Función para jugar el juego
  function playGame() {
    const gameCountInput = document.getElementById("gameCount");
    const gameCount = parseInt(gameCountInput.value);
  
    let totalWins = 0;
    let totalLosses = 0;
    let totalTies = 0;
  
    for (let i = 0; i < gameCount; i++) {
      const playerChoice = ["piedra", "papel", "tijera"][Math.floor(Math.random() * 3)];
      const computerChoice = getComputerChoice();
      const result = determineWinner(playerChoice, computerChoice);
  
      if (result === "¡Ganaste!") {
        totalWins++;
      } else if (result === "Perdiste") {
        totalLosses++;
      } else {
        totalTies++;
      }
  
      console.log(`Juego ${i + 1}: Tú elegiste ${playerChoice}, la computadora eligió ${computerChoice}. ${result}`);
    }
  
    const resultElement = document.getElementById("result");
    resultElement.textContent = `Resultados finales: ${totalWins} victorias, ${totalLosses} derrotas, ${totalTies} empates.`;
  }