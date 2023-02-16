import { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

export const Challenge06 = () => {
	
	const onAddCategory = (category) => {
		setCategories((list) => [...list, category]);
	};

	return (
		<>
			<h1>GifExpert</h1>

			<AddCategory onAddCategory={onAddCategory} />
			<GifGrid/>
		</>
	);
}; 