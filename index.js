let currentPlayer = "X" 
let nextPlayer = "O" 
 
let playerXSelections = []
let playerOSelections = []
let playerSelections = [] 

const handleClick = function(event) {
	const cell = event.target 

	cell.innerHTML = currentPlayer

	if(currentPlayer === "X") { 
		playerSelections = playerXSelections 
		nextPlayer = "O" 
	} else { 
		playerSelections = playerOSelections 
		nextPlayer = "X" 
	}
	playerSelections.push(Number(cell.id))

	if (checkWinner(playerSelections)) {
		alert("Player " + currentPlayer + " wins!")
		resetGame()
	}

	if (checkDraw()) {
		alert("Draw!")
		resetGame()
	}

	currentPlayer = nextPlayer 

}

const cells = document.querySelectorAll("td")

for(let i = 0; i < cells.length; i++) {
	cells[i].addEventListener("click", handleClick)
} 

const winningCombinations = [
	[1, 2, 3], 
	[4, 5, 6], 
	[7, 8, 9], 
	[1, 4, 7], 
	[2, 5, 8], 
	[3, 6, 9], 
	[1, 5, 9], 
	[3, 5, 7] 
]

const checkWinner = () => {
	for(let i = 0; i < winningCombinations.length; i++) { 
		let matches = 0
		for(let j = 0; j < winningCombinations[i].length; j++) {
			console.log(playerSelections)
			if(playerSelections.includes(winningCombinations[i][j])) {
				matches++
 			} if (matches === 3) {
				 return true
			}
		}
	} return false
}

const checkDraw = () => {
	return (playerOSelections.length + playerXSelections.length >= cells.length)
}

const resetGame = () => {
	playerXSelections = new Array()
	playerOSelections = new Array()
	for(let i = 0; i < cells.length; i++) {
		cells[i].innerHTML
	}
}