import { ReactNode } from "react";

type ProductType = {
	id: number;
	name: string;
	price: number;
	weight: number;
	weightUnity: string;
	money: string;
	img: string;
	description: string | ReactNode;
	amount: number,
}

export default ProductType