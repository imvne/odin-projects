import { createContext, useState } from "react";
import ProductType from "../types/ProductType";
import CartType from "../types/CartType";

const CartContext = createContext<CartType | null>(null);
export default CartContext

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [ cartContent, setCartContent ] = useState<ProductType[]>([
		{
			id: 1,
			name: "Produit",
			price: 45,
			money: "$",
			quantity: 1
		}
	])
	
	const deleteProduct = (productId: number): void => {
		setCartContent((previousCart => {
			return previousCart.filter((product) => product.id !== productId)
		}))
	}
	
	return (
		<CartContext.Provider value={{
			cartContent,
			deleteProduct,
		}}>
			{ children }
		</CartContext.Provider>
	)
	
}

export { CartContextProvider };