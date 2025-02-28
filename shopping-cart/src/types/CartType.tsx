import ProductType from "./ProductType"

type CartType = {
	cartContent: ProductType[];
	deleteProduct?: (productId: number) => void;
}

export default CartType