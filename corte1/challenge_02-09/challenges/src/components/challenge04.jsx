import React, { useState } from "react";

function challenge04() {
	const [category, setCategory] = useState("");
	const [categories, setCategories] = useState([]);

	const handleChange = (event) => {
		console.log(event.target.value);
		setCategory(event.target.value);
	};

	const addCategories = (event) => {
		event.preventDefault();
		setCategories([...categories, category]);
		setCategory("");
	};

	return (
		<>
			<h1>Lista de Inputs</h1>
			<form>
				<input type="text" value={category} onChange={(event) => handleChange(event)}/>
				<button className="boton" onClick={addCategories}>
					Add Category
				</button>
			</form>
			{categories.map((category, key) => (
				<li key={key}>{category}</li>
			))}
		</>
	);
}

export default challenge04;