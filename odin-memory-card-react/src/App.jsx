import { useEffect, useState } from 'react'
import './App.css'
import charactersImages from "./assets/charactersImages.js"

export default function App() {
	
	const [cardsDeck, setCardsDeck] = useState([
		{ key: "1033", name: "onigiri", clicked: false, },
		{ key: "4291", name: "skull", clicked: false, },
		{ key: "3531", name: "flower", clicked: false, },
		{ key: "1536", name: "frog", clicked: false, },
		{ key: "2531", name: "notes", clicked: false, },
		{ key: "8547", name: "kitten", clicked: false, },
		{ key: "4315", name: "russiandoll", clicked: false, },
		{ key: "0842", name: "champi", clicked: false, },
		{ key: "5649", name: "ghost", clicked: false, },
		{ key: "1514", name: "tangerine", clicked: false, },
		{ key: "8589", name: "spider", clicked: false, },
		{ key: "1837", name: "star", clicked: false, },
	])
	
	const [score, setScore] = useState(0)
	const [disabledButtons, setDisabledButtons] = useState(false)
	const [gamePlayState, setGamePlayState] = useState("")
	
	//
	
	const displayCards = () => {
		
		let cardsString = ""
		
		for (let index = 0; index < cardsDeck.length; index++) {
			cardsString += `card ${index} : ${Object.values(cardsDeck[index]).join(', ')}\n`
		}
		
		console.log(cardsString)
	}
	
	const shuffleCards = (array) => {
		
		const shuffledIndexes = []
		
		while (shuffledIndexes.length < array.length) {
			const randomIndex = Math.floor(Math.random() * array.length)
			
			if (!shuffledIndexes.includes(randomIndex)){
				shuffledIndexes.push(randomIndex)
			}
		}
		
		const shuffledCards = new Array(array.length)
		
		for (let i = 0; i < array.length; i++) {
			shuffledCards[i] = array[shuffledIndexes[i]]
		}
		
		return shuffledCards
		
	}
	
	const resetGame = () => {
		setDisabledButtons(false)
		setGamePlayState("")
		const resetedCardsDeck = cardsDeck.map((card) => (
			{...card, clicked: false}
		))
		setCardsDeck(shuffleCards(resetedCardsDeck))
		setScore(0)
	}
	
	const handleCardClick = (key, clicked) => {
		
		setGamePlayState("")
		if (clicked){
			setGamePlayState("tu l'avais déjà trouvé celle là, c'est perdu")
			setDisabledButtons(true)
		} else if (!clicked){
			const newCardsDeck = cardsDeck.map((card) => ( card.key === key ? {...card, clicked: !card.clicked} : card ))
			setCardsDeck(shuffleCards(newCardsDeck))
			setScore(score + 1)
		}
	}
	
	useEffect(() => {
		if (score === cardsDeck.length) {
		    setGamePlayState("c'est gagné")
		    setDisabledButtons(true)
		}
	}, [score, cardsDeck.length])
	
	
	return (
	<>
		<p className="score">{`score : ${score}`}</p>
		
		<div className="cards-container">
			{
				cardsDeck.map( (card) => 
					<button key={card.key} className="card" onClick={() => handleCardClick(card.key, card.clicked)} disabled={disabledButtons}>
						<img src={charactersImages[card.name]} alt="" />
						<p className="name">{card.name}</p>
					</button>
				
				)
			}
		</div>
		
		<p className="gameplay-state">{gamePlayState}</p>
		
		<button className="play-again" onClick={resetGame}>play again</button>
		
	</>
	)
}