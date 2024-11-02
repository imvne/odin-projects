import { useEffect, useState } from 'react'
import './App.css'

export default function App() {
	
	const [cardsDeck, setCardsDeck] = useState([
		{
			key: "alieugv",
			name: "kitty",
			clicked: false,
		},
		{
			key: "amiu",
			name: "spider",
			clicked: false,
		},
		{
			key: "zelfihva",
			name: "rondoudou",
			clicked: false,
		},
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
		}
	}, [score, cardsDeck.length])
	
	
	return (
	<>
		<p className="score">{`score : ${score}`}</p>
		
		<div className="cards-container">
			{}
			{
				cardsDeck.map( (card) => 
					<button key={card.key} className="card" onClick={() => handleCardClick(card.key, card.clicked)} disabled={disabledButtons}>
						<p className="key">{`key : ${card.key}`}</p>
						<p className="name">{`name : ${card.name}`}</p>
						<p className="clicked">{`clicked : ${card.clicked}`}</p>
					</button>
				
				)
			}
		</div>
		
		<p className="gameplay-state">{gamePlayState}</p>
		
		<button className="play-again" onClick={resetGame}>play again</button>
		
	</>
	)
}