import { NavLink } from "react-router-dom"
import styled from "styled-components"

export default function EmptyCart(){
	
	return (
		<Div data-testid="empty-cart-component">
			
			<ErrorMessage>Oh.. empty cart^^</ErrorMessage>
			
			<StyledButton to='/products' data-testid="products-button">
				Shop
			</StyledButton>
			
		</Div>
	)
};
const Div = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 65vh;
`

const ErrorMessage = styled.h2`
	color: white;
	font-size: 30px;
	font-weight: 500;
`

const StyledButton = styled(NavLink)`
	align-self: center;
	border-radius: 16px;
	border: 1px solid white;
	display: inline-block;
	cursor: pointer;
	background-color: transparent;
	color:#ffffff;
	font-size: 17px;
	padding: 14px 28px;
	text-decoration: none;
	margin: 20px;
`