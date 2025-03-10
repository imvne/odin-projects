import styled from "styled-components"

export default function AddSubButtons({ theme, productData, changeAmount, listName, addAmount, subAmount }){
	
	return (
		<>
			<QuantityButtons className={theme}> 
				
				<QuantityButton 
					onClick={() => subAmount(productData.id, listName)} 
					className={theme}
					data-testid="amount-button">
						-
				</QuantityButton>
				
				<Amount 
					onChange={(event) => changeAmount(productData.id, event, listName)} 
					value={productData.amount} 
					className={theme}
					data-testid="amount"/>
					
				<QuantityButton 
					onClick={() => addAmount(productData.id, listName)} 
					className={theme}
					data-testid="amount-button">
						+
				</QuantityButton>
				
			</QuantityButtons>
		</>
	)
};


const QuantityButtons = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	
	grid-column: 3;
	grid-row: 3;
	justify-self: flex-start;
	align-self: center;
	
	&.boldStyle {
		border: 2px solid #680024;
		border-radius: 20px;
		width: 84px;
		height: 28px;
		margin: 0px 10px;
	}
	
	&.lightStyle{
		border: 0px;
		width: 99px;
		height: 30px;
	}
`

const QuantityButton = styled.button`
	width: 20px;
	height: 20px;
	cursor: pointer;
	
	&.boldStyle {
		border: 0px;
		background-color: transparent;
		margin: 0px 4px;
	}
	
	&.lightStyle {
		border: 1px solid white;
		background-color: transparent;
		border-radius: 4px;
		color: white;
	}
`

const Amount = styled.input`
	background-color: transparent;
	border: 0px;
	width: 18px;
	text-align: center;
	
	&.boldStyle{
		color: black;
		font-weight: 600;
		font-size: 12px;
		margin: 0px 2px;
	}
	
	&.lightStyle{
		color: white;
		font-weight: 300;
		font-size: 20px;
		margin: 0px 10px;
	}
`