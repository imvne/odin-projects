const Gameboard = (function(){
	const gameBoardDiv = document.querySelector('#game-board')
	
	const blankBoardArray = [
					[" ", " ", " "],
					[" ", " ", " "],
					[" ", " ", " "],
				]
	const boardArray = [
					[" ", " ", " "],
					[" ", " ", " "],
					[" ", " ", " "],
				]
	
	const displayCells = () => {
		let boardString = "";
		
		for (let row of boardArray){
			boardString += row.join(' ')
			boardString += '\n'
		}
		
		console.log(boardString)
	}
	
	return { displayCells, gameBoardDiv , boardArray , blankBoardArray }
	
})();

const Player = (function(){
	
	
	const crossPlayerP = document.querySelector('.x-player')
	const circlePlayerP = document.querySelector('.o-player')
	
	let isCrossPlayerTurn = true
	
	const getCoin = () => (isCrossPlayerTurn ? "x" : "o")
	
	const changePlayer = () => {
		isCrossPlayerTurn = !isCrossPlayerTurn
	}
	
	const updatePlayersStyle = () => {
		
		const activeStyle = { fontSize: "26px", fontWeight: "600" };
		const inactiveStyle = { fontSize: "20px", fontWeight: "400" };

		const [activePlayerP, inactivePlayerP] = Player.getCoin() === "x" 
		? [crossPlayerP, circlePlayerP] 
		: [circlePlayerP, crossPlayerP];

		Object.assign(activePlayerP.style, activeStyle);
		Object.assign(inactivePlayerP.style, inactiveStyle);
	}
		
	
	return { getCoin , changePlayer , updatePlayersStyle }
		
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
		
		if (Gameboard.boardArray[rowIndex][colIndex] === " ") {
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
			Player.updatePlayersStyle()
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
			if (row.includes(" ")){
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