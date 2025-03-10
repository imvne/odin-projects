import { createContext, useState } from "react";
import CartType from "../types/CartType";
import CartProductType from "../types/CartProductType";

const CartContext = createContext<CartType>({
	cartContent: [],
	deleteProduct: () => {},
});

export default CartContext

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [ cartContent, setCartContent ] = useState<CartProductType[]>([
		{
			id: 1,
			quantity: 1
		}
	])
	
	const deleteProduct = (productId: number) => {
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