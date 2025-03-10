import styled from "styled-components"
import Product from "../components/Product"
import { useOutletContext } from "react-router-dom"
import Footer from "../components/Footer"

export default function Products(){
	const { products } = useOutletContext()
	
	return (
		<ProductsPage>
			
			{
				products.map((product, index) => (
					
					<Product 
						index={index} 
						product={product} />
				))
			}
			
			<Footer />
			
		</ProductsPage>
	)
};

const ProductsPage = styled.div`
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	width: 94%;
	padding: 20px;
`