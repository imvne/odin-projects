import { useOutletContext } from "react-router-dom"
import styled from "styled-components"
import { Trash } from "lucide-react"
import AddSubButtons from "./AddSubButtons"
import { motion } from 'framer-motion'

export default function CartItem({ product }){
	
	const {
		addAmount,
		subAmount,
		changeAmount,
		deleteProductFromCart, 
	} = useOutletContext()
	
	return (
		<Product data-testid={`${product.id}`} >
			{console.log(product.id)}
			<ProductInfos>
				
				<StyledImg src={product.img} />
				
				<NameInfo>
					<Name>{product.name}</Name>
					<ShortInfo>{product.description.split(',')[0].trim()}</ShortInfo>
				</NameInfo>
				
				<Price>{`${product.money} ${product.price}`}</Price>
				
			</ProductInfos>
			
			<ProductInfos>
				
				<AddSubButtons 
					theme={"boldStyle"}
					productData={product}
					listName={"cartContent"}
					addAmount={addAmount}
					subAmount={subAmount}
					changeAmount={changeAmount}/>
				
				<TotalPrice>{`$ ${product.price * product.amount}`}</TotalPrice>
				
				<StyledButton data-testid='delete-button' onClick={() => deleteProductFromCart(product.id)}>
					<Trash />
				</StyledButton>
				
			</ProductInfos>
			
		</Product>
	)
};

const Product = styled(motion.div)`
	display: flex;
	flex-direction: row;
	/* border-bottom: 2px solid  #6800242b; */
	width: 100%;
	justify-content: space-between;
	align-items: center;
	margin: 25px 0px;
	padding-bottom: 25px;
`

	const ProductInfos = styled.div`
		display: flex;
		flex-direction: row;
		align-items: center;
	`
	
		const StyledImg = styled.img`
			width: 40px;
			height: 40px;
			grid-column: 2;
			grid-row: 2;
			filter: drop-shadow( -6.5px 1.4px 2px #00000041);
			align-self: center;
			justify-self: center;
			margin-right: 10px;
		`
		
		const NameInfo = styled.div`
			display: flex;
			flex-direction: column;
			margin: 0px 10px;
			align-items: flex-start;
			width: 240px;
		`
			
			const Name = styled.p`
				font-weight: 700;
				font-size: 20px;
				width: 70px;
				color: #832f4e;
			`
			
			const ShortInfo = styled.p`
				font-size: 14px;
				font-weight: 600;
				color: #832f4ea3;
			`
	
	const Price = styled.p`
		font-weight: 400;
		width: 70px;
		color: #333;
	`
	
	const TotalPrice = styled.p`
		font-weight: 600;
		width: 50px;
		color: #333;
		margin: 0px 40px;
	`

	const StyledButton = styled.button`
		width: 18px;
		height: 18px;
		background-color: transparent;
		color: #680024;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 0px;
		cursor: pointer;
	`
