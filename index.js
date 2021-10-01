let currentPlayer = "X" // Uma string 
let nextPlayer = "O" // Outra string
 
let playerXSelections = [] // Um array de seleções
let playerOSelections = [] // Outro array de seleções
let playerSelections = [] // Todas as seleções(?)

const handleClick = function(event) {
	const cell = event.target // Mostra onde o evento está acontecendo 

	cell.innerHTML = currentPlayer // Põe na tela a string do jogador atual e começa pelo X

	if(currentPlayer === "X") { // Se for a variável da primeira linha
		playerSelections = playerXSelections // Ele põe outra array(?)
		nextPlayer = "O" // Muda de vez
	} else { // Quando o current player não é mais o "X" e sim o "O" 
		playerSelections = playerOSelections // Mudamos a array de seleções pro O
		nextPlayer = "X" // A vez volta pro "X"
	}
	playerSelections.push(Number(cell.id)) // As seleções totais pelam o número de cell ids

	currentPlayer = nextPlayer // Ele vai mudando de player

	checkWinner()
}

const cells = document.querySelectorAll("td")

for(let i = 0; i < cells.length; i++) {
	cells[i].addEventListener("click", handleClick)
} // Acrescenta às celulas a capacidade de ter desenhado o "X" ou o "O"

const winningCombinations = [
	[1, 2, 3], // horizontal
	[4, 5, 6], // horizonal
	[7, 8, 9], // horizontal
	[1, 4, 7], // vertical
	[2, 5, 8], // vertical
	[3, 6, 9], // vertical
	[1, 5, 9], // diagonal 
	[3, 5, 7] // diagonal 
]

const checkWinner = () => {
	for(let i = 0; i < winningCombinations.length; i++) { 
		let matches = 0
		for(let j = 0; j < winningCombinations[i].length; j++) {
			if(playerSelections === winningCombinations) {
				matches++
 			} else if (matches === 3) {
				 return true
			}
		}
	} return false
}
/* Pseudo-código que preciso transformar:
function checkWinner {
   // Verifica para cada combinação  se o jogador tem todos os valores
   for each winning combination
       matches = 0
       for each cell in combination
           if player has cell
               matches++
           else break // vai para a próxima combinação
           if there are 3 matches
               return true
 
   // Se nós percorremos todas as combinações sem retornar true
   // então o jogador não venceu
   return false
}
*/