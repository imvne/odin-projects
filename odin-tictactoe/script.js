const Gameboard = (function(){
	const gameBoardDiv = document.querySelector('#game-board')
	
	const boardArray = [
					[".", ".", "."],
					[".", ".", "."],
					[".", ".", "."],
				]
	
	const buildCells = () => {
		
		for (let i = 0; i < boardArray.length; i++){
			const rowDiv = document.createElement('div')
			rowDiv.classList.add('board-row')
			for (let j = 0; j < boardArray[i].length; j++){
				const cellDiv = document.createElement('div')
				cellDiv.classList.add('board-cell')
				
				
				rowDiv.append(cellDiv)
				
			}
			gameBoardDiv.append(rowDiv)
		}
		
	}
	
	const displayCells = () => {
		let boardString = "";
		
		for (let row of boardArray){
			boardString += row.join(' ')
			boardString += '\n'
		}
		
		console.log(boardString)
	}
	
	return { buildCells , displayCells, gameBoardDiv , boardArray}
	
})();

const Player = (function(){
	
	let isCrossPlayerTurn = true
	
	const getCoin = () => (isCrossPlayerTurn ? "x" : "o")
	
	const changePlayer = () => {
		isCrossPlayerTurn = !isCrossPlayerTurn
	}
		
	
	return { getCoin , changePlayer}
		
})();

const PlayGame = (function(){
	
	const play = () => {
		
		const indexMap = {"A": 0, "B": 1, "C": 2}
		
		while (true) {
			cellLocation = prompt(`dans quelle case veux tu jouer ${Player.getCoin()} ?`)
	
			if (cellLocation && cellLocation.length === 2 && indexMap[cellLocation[0]] !== undefined && indexMap[cellLocation[1]] !== undefined) {
			    const rowIndex = indexMap[cellLocation[0]];
			    const colIndex = indexMap[cellLocation[1]];
			    
			    if (Gameboard.boardArray[rowIndex][colIndex] === ".") {
				  Gameboard.boardArray[rowIndex][colIndex] = Player.getCoin();
				  Player.changePlayer();
				  break
			    } else {
				  console.log("case déjà occupée, choisis une autre case.");
			    }
			} else {
			    console.log("entrée invalide, utilise le format A1, B2, etc.");
			}
		}
		
		Gameboard.displayCells()
				
		if(isGameWon() === false && isGameFinished() === false) {
			play()
		}
		
		
	}
	
	const isGameWon = () => {
		for (let row of Gameboard.boardArray){
			if (row.join('') === "xxx"){
				console.log("x won !")
				return true
			}
			if (row.join('') === "ooo"){
				console.log("o won !")
				return true
			}
		}
		
		if (Gameboard.boardArray[0][0] === "x" && Gameboard.boardArray[1][1] === "x" && Gameboard.boardArray[2][2] === "x"){
			console.log("x won !")
			return true
		} else if (Gameboard.boardArray[0][2] === "x" && Gameboard.boardArray[1][1] === "x" && Gameboard.boardArray[2][0] === "x"){
			console.log("x won !")
			return true
		} else if (Gameboard.boardArray[0][0] === "o" && Gameboard.boardArray[1][1] === "o" && Gameboard.boardArray[2][2] === "o"){
			console.log("o won !")
			return true
		} else if (Gameboard.boardArray[0][2] === "o" && Gameboard.boardArray[1][1] === "o" && Gameboard.boardArray[2][0] === "o"){
			console.log("o won !")
			return true
		}
		
		return false
		
	}
	
	const isGameFinished = () => {
		
		for (let row of Gameboard.boardArray){
			if (row.includes(".")){
				return false
			}
		}
		console.log('match nul')
		return true
	}
	
	
	return { play , isGameWon , isGameFinished}
	
})();

PlayGame.play()