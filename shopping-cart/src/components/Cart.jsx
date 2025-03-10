import styled from "styled-components"
import CartItem from "./CartItem"

export default function Cart({ cartContent }){
	
	return (
		<CartContainer data-testid="cart-component">
			
			<Title>Shopping Cart</Title>
			<Products data-testid="products-container">
			{
				cartContent.map((product, index) => {
					
					return (
					
						<CartItem index={index} product={product}/>
						
					)
				})
			}
			</Products>
			
			{ cartContent.length > 0 && 
				<Totaux>
					<Text>Total price</Text> 
					<Text>{` $ ${cartContent.reduce((total, product) => total + product.amount * product.price, 0)}`}</Text>
				</Totaux>
				
			}
		
		</CartContainer>
	)
};

const CartContainer = styled.div`
	background-color: white;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	width: 94%;
	padding: 50px;
	margin-top: 40px;
`

const Products = styled.div`
	border-bottom: 2px solid #420a1637;
`

const Title = styled.h2`
	font-weight: 300px;
	color: #2a2a2a;
	font-size: 23px;
	margin-bottom: 20px;
`

const Totaux = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 100%;
	justify-content: space-between;
	margin-top: 20px;
`
	
const Text = styled.p`
	font-weight: 600;
	font-size: 20px;
`