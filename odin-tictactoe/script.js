const Gameboard = (function(){
	const gameBoardDiv = document.querySelector('#game-board')
	
	const blankBoardArray = [
					[".", ".", "."],
					[".", ".", "."],
					[".", ".", "."],
				]
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
				const cellButton = document.createElement('button')
					cellButton.classList.add('board-cell')
					cellButton.id = `${i}${j}`
					cellButton.textContent = boardArray[i][j]
					
				
				cellButton.addEventListener('click', () => PlayGame.play(i, j))
				
				rowDiv.append(cellButton)
				
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
	
	return { buildCells , displayCells, gameBoardDiv , boardArray , blankBoardArray }
	
})();

const Player = (function(){
	
	
	const crossPlayerP = document.createElement('p')
	const circlePlayerP = document.createElement('p')
	
	let isCrossPlayerTurn = true
	
	const getCoin = () => (isCrossPlayerTurn ? "x" : "o")
	
	const changePlayer = () => {
		isCrossPlayerTurn = !isCrossPlayerTurn
	}
	
	const buildPlayersTurnDiv = () => {
		
		const playersDiv = document.querySelector('.which-players-turn')

		crossPlayerP.innerText = "x"
		crossPlayerP.classList.add("x-player-div", "player-div")

		circlePlayerP.innerText = "o"
		circlePlayerP.classList.add("o-player-div", "player-div")

		playersDiv.append(crossPlayerP, circlePlayerP)
		
		updatePlayersStyle(crossPlayerP, circlePlayerP)
		
	}
	
	const updatePlayersStyle = (player1, player2) => {
		
		const activeStyle = { fontSize: "26px", fontWeight: "600" };
		const inactiveStyle = { fontSize: "20px", fontWeight: "400" };

		const [activePlayerP, inactivePlayerP] = Player.getCoin() === "x" 
		? [player1, player2] 
		: [player2, player1];

		Object.assign(activePlayerP.style, activeStyle);
		Object.assign(inactivePlayerP.style, inactiveStyle);
	}
		
	
	return { crossPlayerP , circlePlayerP , getCoin , changePlayer , buildPlayersTurnDiv , updatePlayersStyle }
		
})();

const PlayGame = (function(){
	
	const updateDOM = () => {
		const buttons = document.querySelectorAll('.board-cell');
		for (let i = 0; i < Gameboard.boardArray.length; i++) {
			for (let j = 0; j < Gameboard.boardArray[i].length; j++) {
				buttons[i * Gameboard.boardArray[i].length + j].textContent = Gameboard.boardArray[i][j];
			}
		}
	}
	
	const play = (rowIndex, colIndex) => {
		
		if (Gameboard.boardArray[rowIndex][colIndex] === ".") {
			document.querySelector('.gameplay-state').textContent = ""
			Gameboard.boardArray[rowIndex][colIndex] = Player.getCoin();
			
			updateDOM()
			Player.changePlayer();
			Player.updatePlayersStyle(Player.crossPlayerP, Player.circlePlayerP)
		} else {
			document.querySelector('.gameplay-state').textContent = "case déjà occupée, choisis une autre case."
		}
		
		if (isGameWon()) {
			Player.changePlayer();
			Player.updatePlayersStyle(Player.crossPlayerP, Player.circlePlayerP)
			document.querySelector('.gameplay-state').textContent = `${Player.getCoin()} a gagné`
			disableButtons()
		} else if (isGameFinished()) {
			document.querySelector('.gameplay-state').textContent = `match nul`
			disableButtons()
		}
		
	}
	
	const isGameWon = () => {
		for (let row of Gameboard.boardArray) {
		    if (row.join('') === "xxx" || row.join('') === "ooo") {
			  console.log(`${row.join('')} a gagné !`);
			  return true;
		    }
		}
    
		for (let col = 0; col < 3; col++) {
		    if (Gameboard.boardArray[0][col] === "x" && Gameboard.boardArray[1][col] === "x" && Gameboard.boardArray[2][col] === "x") {
			  console.log("x a gagné !");
			  return true;
		    } else if (Gameboard.boardArray[0][col] === "o" && Gameboard.boardArray[1][col] === "o" && Gameboard.boardArray[2][col] === "o") {
			  console.log("o a gagné !");
			  return true;
		    }
		}
    
		if ((Gameboard.boardArray[0][0] === "x" && Gameboard.boardArray[1][1] === "x" && Gameboard.boardArray[2][2] === "x") ||
		    (Gameboard.boardArray[0][2] === "x" && Gameboard.boardArray[1][1] === "x" && Gameboard.boardArray[2][0] === "x")) {
		    console.log("x a gagné !");
		    return true;
		} else if ((Gameboard.boardArray[0][0] === "o" && Gameboard.boardArray[1][1] === "o" && Gameboard.boardArray[2][2] === "o") ||
			     (Gameboard.boardArray[0][2] === "o" && Gameboard.boardArray[1][1] === "o" && Gameboard.boardArray[2][0] === "o")) {
		    console.log("o a gagné !");
		    return true;
		}
		
		return false;
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
	
	const disableButtons = () => {
		const buttons = document.querySelectorAll('.board-cell');
		buttons.forEach(button => button.disabled = true);
	}
	
	const playAgainButton = document.querySelector('.play-again')
	playAgainButton.addEventListener('click', () => playAgain())
	
	const playAgain = () => {
		
		Gameboard.boardArray = Gameboard.blankBoardArray.map(row => [...row])
   		updateDOM()
		
		const buttons = document.querySelectorAll('.board-cell');
		buttons.forEach(button => button.disabled = false);
		
		document.querySelector('.gameplay-state').textContent = ""
		
	}
	
	
	return { play , isGameWon , isGameFinished }
	
})();

Gameboard.buildCells()
Player.buildPlayersTurnDiv()