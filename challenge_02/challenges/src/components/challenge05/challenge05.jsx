import { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

export const Challenge05 = () => {
	const [categories, setCategories] = useState(["zodiac"]);

	const onAddCategory = (category) => {
		setCategories((list) => [...list, category]);
	};

	return (
		<>
			<h1>GifExpert</h1>

			<AddCategory onAddCategory={onAddCategory} />
			{categories.map((category, key) => {
				return <GifGrid category={category} key={key} />;
			})}
		</>
	);
}; 