import React, { useState } from "react";

const TodoForm = ({ handleNewTodo }) => {
	const [inputValue, setInputValue] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		handleNewTodo({
			id: new Date().getTime(),
			description: inputValue,
			done: false,
		});
		setInputValue("");
	};

	return (
		<div className="col-5">
			<h4>Agregar TODO</h4>
			<hr />
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					className="form-control"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
				/>
				<button className="btn btn-outline-primary mt-1">Agregar</button>
			</form>
		</div>
	);
};

export default TodoForm;
