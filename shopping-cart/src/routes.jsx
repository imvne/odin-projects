import App from "./App"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Products from "./pages/Products"
import ShoppingCart from "./pages/ShoppingCart"

const routes = [
	{
		path: '/',
		element: <App />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: 'products',
				element: <Products />,
			},
			{
				path: 'contact',
				element: <Contact />,
			},
			{
				path: 'shopping-cart',
				element: <ShoppingCart />,
			},
		]
	},
	
	
]

export default routes