import { useOutletContext } from "react-router-dom"
import styled from "styled-components"
import EmptyCart from "../components/EmptyCart"
import Footer from "../components/Footer"
import Cart from "../components/Cart"

export default function ShoppingCart(){
	const { cartContent } = useOutletContext()
	
	return (
		<Page data-testid="shopping-cart-page">
			{
				cartContent.length === 0 ?
				
				<EmptyCart /> : 
				
				<Cart cartContent={cartContent}/>
				
			}
			
			<Footer />
		</Page>
	)
};

const Page = styled.div`
	width: 97%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	min-height: 80vh;
`