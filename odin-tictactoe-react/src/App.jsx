import { useState , useEffect} from 'react'
import './App.css'

export default function App(){
	const [isCrossPlayerTurn, setIsCrossPlayerTurn] = useState(true)
	const coin = isCrossPlayerTurn ? "x" : "o"
	
	const [boardArray, setBoardArray] = useState([
					[" ", " ", " "],
					[" ", " ", " "],
					[" ", " ", " "]
				])
				
	const [isButtonDisabled, setIsButtonDisabled] = useState(false)
				
	const [gamePlayState, setGamePlayState] = useState("");
	
	
	useEffect(() => {
		if (isGameWon()) {
		    setIsButtonDisabled(true);
		    setGamePlayState(`${coin} a gagné !`)
		} else if (isGameFinished()) {
		    setIsButtonDisabled(true)
		    setGamePlayState("match nul !")
		}
	  }, [boardArray])
				
	const isGameWon = () => {
		
		for (let row of boardArray) {
			if (row.join('') === "xxx" || row.join('') === "ooo") {
			    console.log(`${row.join('')} a gagné !`);
			    return true
			}
		}
	
		for (let col = 0; col < 3; col++) {
			if (boardArray[0][col] === "x" && boardArray[1][col] === "x" && boardArray[2][col] === "x") {
			    console.log("x a gagné !")
			    return true
			} else if (boardArray[0][col] === "o" && boardArray[1][col] === "o" && boardArray[2][col] === "o") {
			    console.log("o a gagné !")
			    return true
			}
		}
	
		if ((boardArray[0][0] === "x" && boardArray[1][1] === "x" && boardArray[2][2] === "x") ||
			(boardArray[0][2] === "x" && boardArray[1][1] === "x" && boardArray[2][0] === "x")) {
			console.log("x a gagné !");
			return true
			
		} else if ((boardArray[0][0] === "o" && boardArray[1][1] === "o" && boardArray[2][2] === "o") ||
				 (boardArray[0][2] === "o" && boardArray[1][1] === "o" && boardArray[2][0] === "o")) {
			console.log("o a gagné !");
			return true
		}
		  
		return false
		
	}
	
	const isGameFinished = () => {
		for (let row of boardArray){
			if (row.includes(" ")){
				return false
			}
		}
		console.log('match nul')
		return true
		
	}
	
	
	const displayCells = (array) => {
		let boardString = "";
		
		for (let row of array){
			boardString += row.join(' ')
			boardString += '\n'
		}
		
		console.log(boardString)
	}
	
	const isCellAvailable = (rowIndex, colIndex) => {
		return boardArray[rowIndex][colIndex] === " "
	}
	
	const play = (rowIndex, colIndex, coin) => {
		const newBoard = boardArray.map( (row, index) => {
			if (index === rowIndex){
				const newRow = [...row]
				newRow[colIndex] = coin
				return newRow
			} else {
				return row
			}
		})
		
		setGamePlayState("")
		setBoardArray(newBoard)
		setIsCrossPlayerTurn(!isCrossPlayerTurn)
		
		
	}
	
	const handleCellClick = (rowIndex, colIndex, coin) => {
		
		if (isCellAvailable(rowIndex, colIndex)){
			play(rowIndex, colIndex, coin)
		} else {
			setGamePlayState("cette cellule est déjà prise")
		}
		
	}
	
	const playAgain = () => {
		setBoardArray([
			[" ", " ", " "],
			[" ", " ", " "],
			[" ", " ", " "]
		])
		setIsButtonDisabled(false)
		setGamePlayState("")
	}
	
	return (
	<>
		<div className="which-players-turn">
			<p className="x-player player his-turn">x</p>
			<p className="o-player player not-his-turn">o</p>
		</div>
		
		<div id="game-board">
			<div className="board-row">
				<button className="board-cell" id="00" disabled={isButtonDisabled} onClick={() => handleCellClick(0,0, coin)}>{boardArray[0][0]}</button>
				<button className="board-cell" id="01" disabled={isButtonDisabled} onClick={() => handleCellClick(0,1, coin)}>{boardArray[0][1]}</button>
				<button className="board-cell" id="02" disabled={isButtonDisabled} onClick={() => handleCellClick(0,2, coin)}>{boardArray[0][2]}</button>
			</div>
			<div className="board-row">
				<button className="board-cell" id="10" disabled={isButtonDisabled} onClick={() => handleCellClick(1,0, coin)}>{boardArray[1][0]}</button>
				<button className="board-cell" id="11" disabled={isButtonDisabled} onClick={() => handleCellClick(1,1, coin)}>{boardArray[1][1]}</button>
				<button className="board-cell" id="12" disabled={isButtonDisabled} onClick={() => handleCellClick(1,2, coin)}>{boardArray[1][2]}</button>
			</div>
			<div className="board-row">
				<button className="board-cell" id="20" disabled={isButtonDisabled} onClick={() => handleCellClick(2,0, coin)}>{boardArray[2][0]}</button>
				<button className="board-cell" id="21" disabled={isButtonDisabled} onClick={() => handleCellClick(2,1, coin)}>{boardArray[2][1]}</button>
				<button className="board-cell" id="22" disabled={isButtonDisabled} onClick={() => handleCellClick(2,2, coin)}>{boardArray[2][2]}</button>
			</div>
		</div>
	
		<p className="gameplay-state">{gamePlayState}</p>
	
		<button className="play-again" onClick={playAgain}>play again</button>
	</>
	)
	
	
}