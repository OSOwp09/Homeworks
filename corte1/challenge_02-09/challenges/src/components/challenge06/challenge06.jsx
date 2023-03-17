import { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

export const Challenge06 = () => {

	const [categories, setCategories] = useState([''])
	
	const onAddCategory = (category) => {
		setCategories((list) => [...list, category]);
	};

	return (
		<>
			<h1>GifExpert</h1>
			
			<AddCategory onAddCategory={onAddCategory} />
			{
				categories.map(
					(category, key)=>{
						return <GifGrid category={category} key={key} />
					}
				)
			}
			{/* <GifGrid/> */}
		</>
	);
}; 