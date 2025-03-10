import styled from "styled-components"
import AddSubButtons from "./AddSubButtons"
import { useOutletContext } from "react-router-dom"

export default function Product({ index, product }){

	const { 
		addAmount, 
		subAmount, 
		changeAmount,
		addProductToCart
	} = useOutletContext()
	
	return (
		<ProductCard key={index} data-testid="product-card">
			<Text>
				<Name>{product.name}</Name>
				<Description>{product.description}</Description>
			</Text>
			
			<Weight>{`${product.weight} ${product.weightUnity}`}</Weight>
			
			<StyledImg src={product.img} />
			
			<Price>{`${product.money}${product.price}`}</Price>
			
			<ToAddToCart>
				
				<AddSubButtons 
					theme={"lightStyle"}
					productData={product} 
					listName={"products"}
					addAmount={addAmount}
					subAmount={subAmount}
					changeAmount={changeAmount}/>
				
				<AddToCartButton onClick={() => addProductToCart(product.id)}>Add to cart</AddToCartButton>
				
			</ToAddToCart>
			
			
		</ProductCard>
	)
};


const ProductCard = styled.div`
	border-radius: 10px;
	width: 100%;
	height: 80vh;
	margin-bottom: 40px;
	display: grid;
	grid-template-columns: 33% 33% 33%;
	grid-template-rows: 33% 33% 33%;
	padding: 10px;
	
	/* gap: 1px;
	background-image: 
		linear-gradient(rgba(0, 0, 255, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 255, 0.5) 1px, transparent 1px);
	background-size: calc(100% / 3) calc(100% / 3); */
`

	const Text = styled.div`
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		width: 200px;
		height: 200px;
		grid-column: 1;
		grid-row: 1;
	`

		const Name = styled.h2`
			color: white;
			font-weight: 800;
			font-size: 50px;
			margin: 0;
		`

		const Description = styled.p`
			color: white;
			font-weight: 100;
		`

	const Weight = styled.div`
		grid-column: 1;
		grid-row: 2;
		align-self: flex-start;
		justify-self: flex-start;
		color: white;
		font-weight: 100;
		font-size: 20px;
	`

	const StyledImg = styled.img`
		width: 200px;
		height: 200px;
		grid-column: 2;
		grid-row: 2;
		filter: drop-shadow( -6.5px 10.4px 8px #00000053);
		align-self: center;
		justify-self: center;
	`

	const Price = styled.div`
		grid-column: 2;
		grid-row: 3;
		align-self: flex-end;
		justify-self: center;
		color: white;
		font-weight: 3s00;
		font-size: 40px;
	`
	
	const ToAddToCart = styled.div`
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		grid-column: 3;
		grid-row: 3;
		justify-self: center;
		align-self: flex-end;
	`
	
		const AddToCartButton = styled.button`
			grid-column: 3;
			grid-row: 3;
			width: 90px;
			height: 35px;
			padding: 10px;
			border-radius: 15px;
			background-color: white;
			font-weight: 400;
			font-size: 12px;
			margin-left: 30px;
			cursor: pointer;
			border: 0px;
			
			&:hover,
			&:active,
			&.active {
				background-color: #822433;
				color: white;
			}
		`