import styled from "styled-components"
import { NavLink } from "react-router-dom"
import { Pill, ShoppingBasket, UserRound } from "lucide-react"

export default function NavigationBar({ cartTotalAmount }){
	
	return (
		<>
		<StyledDiv>	
			
			<Logo to="/" data-testid="logo-button">
			
				<LogoImg />
				<LogoName>candybay</LogoName>
				
			</Logo>
			
			<Buttons>
				
				<StyledButton to="products" data-testid="products-button">
					Products
				</StyledButton>
				
				<StyledButton to="contact" data-testid="contact-button">
					Contact
				</StyledButton>
				
			</Buttons>
			
			<Buttons>
				
				<RoundButton to="/" data-testid='user-button'> <UserRound/> </RoundButton>
				
				<CartButton>
					
					<RoundButton to="shopping-cart" data-testid='shopping-cart-button'> <ShoppingBasket /> </RoundButton>
					<CounterBadge>{cartTotalAmount}</CounterBadge>
					
				</CartButton>
				
			</Buttons>
			
		</StyledDiv>
		</>
	)
};

const StyledDiv = styled.div`
	display: flex;
	flex-direction: row;
	width: 92%;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 50px;
`

const Logo = styled(NavLink)`
	display: flex;
	flex-direction: row;
	align-items: center;
	text-decoration: none;
`

const LogoName = styled.h1`
	font-family: "Pacifico", serif;
	font-weight: 100;
	font-size: 27px;
	color: white;
	margin: 0;
	margin-left: 13px;
`

const LogoImg = styled(Pill)`
	color: white;
	width: 30px;
	height: 30px;
	padding-top: 5px;
`

const Buttons = styled.div`
	display: flex;
	flex-direction: row;
`

const StyledButton = styled(NavLink)`
	height: 29px;
	display: flex;
	justify-content: center;
	align-items: center;
	
	text-decoration: none;
	font-family: "Roboto Flex", serif;
	font-size: 14px;
	font-weight: 200;
	
	background-color: #700013;
	color: white;
	border: 2px solid #700013;
	border-radius: 27px;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	margin: 0px 10px;
	padding: 0px 15px;
	
	&:hover,
	&:active,
	&.active {
		background-color: white;
		color: #5c000f;
		border: 2px solid white;
  	}
`

const CartButton = styled.div`
	position: relative;
`

const CounterBadge = styled.div`
	position: absolute;
	top: -5px;
	right: -5px;
	background-color: #1b1b1b;
	color: white;
	font-size: 12px;
	font-weight: bold;
	border-radius: 50%;
	width: 20px;
	height: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: "Roboto Flex", serif;
`

const RoundButton = styled(NavLink)`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 30px;
	height: 30px;
	border: 2px solid #700013;
	border-radius: 100px;
	background-color: #700013;
	color: white;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	margin: 0px 5px;
	
	&:hover,
	&:active,
	&.active {
		background-color: white;
		color: #5c000f;
		border: 2px solid white;
	}

	svg {
		width: 20px;
		height: 15px;
	
		&:hover,
		&:active,
		&.active {
				color: black;
		}
	}
`;
