import { useEffect, useState } from "react";
import "./App.css"
import NavigationBar from "./components/NavigationBar";
import { Outlet } from "react-router-dom";
import ProductsData from "./assets/productsData";

export default function App(){
	const [ products, setProducts ] = useState([])
	const [ cartContent, setCartContent ] = useState([])
	const [ cartTotalAmount, setCartTotalAmount ] = useState(0)
	
	useEffect(() => {
		setProducts(ProductsData)
	}, [])
	
	useEffect(() => {
		setCartTotalAmount(cartContent.length)
		
	}, [cartContent]);
	
	const addAmount = (productId, listName) => {
		const setter = listName === "products" ? setProducts : setCartContent
		
		setter(previousState => previousState.map((product) => (
			product.id === productId ? { ...product, amount: product.amount + 1 } : product
		))) 
	}
	
	const subAmount = (productId, listName) => {
		const setter = listName === "products" ? setProducts : setCartContent
		
		setter(previousState => previousState.map((product) => (
			product.id === productId ? { ...product, amount: product.amount === 1 ? 1 : product.amount - 1 } : product
		)))
		
	}
	
	const changeAmount = (productId, event, stateToChange) => {
		const number = Number(event.target.value)
		
		const setter = stateToChange === "products" ? setProducts : setCartContent
		
		if (!isNaN(number) && Number.isInteger(number) && number >= 1){
			setter(previousProducts => previousProducts.map(product =>
				product.id === productId ? { ...product, amount: number } : product
	 		))
		}
	}
	
	const addProductToCart = (productId) => {
		setProducts(prevProducts => prevProducts.map(product =>
			    product.id === productId ? { ...product, amount: 1 } : product
		))
		  
		const productToAdd = products.find(product => product.id === productId)
		
		if (!productToAdd || productToAdd.amount === 0) return
		
		const isProductInCart = cartContent.find(product => product.id === productId)
		
		if (isProductInCart) {
			const cartContentUpdated = cartContent.map((product) => (
				product.id === productId ? 
				{ ...product, amount: product.amount + productToAdd.amount } 
				: product
			))
			
			setCartContent(cartContentUpdated)
		} else {
			setCartContent(previousCart =>  [...previousCart, productToAdd] )
		}
	}
	
	const deleteProductFromCart = (productId) => {
		
		setTimeout(() => {
			setCartContent((previousCart => {
				return previousCart.filter((product) => product.id !== productId)
			}))
		}, 100);
	}
	
	return (
		<>
			<NavigationBar cartTotalAmount={cartTotalAmount}/>
			<Outlet context={{ 
				products,
				cartContent, 
				addAmount, 
				subAmount, 
				changeAmount,
				addProductToCart,
				deleteProductFromCart, 
			}} />
		</>
	)
};