import React from "react";
import { useReducer } from "react";
import TodoReducer from "./TodoReducer";
import useTodo from "./useTodo";

export const TodoApp = () => {
	const {
		todos,
		addTodo,
		deleteTodo,
		toggleTodo,
		countTodos,
		countPendingTodos,
	} = useTodo();

	const handleSubmit = (event) => {
		event.preventDefault();
		const description = event.target.elements.description.value;
		addTodo({
			id: new Date().getTime(),
			description: description,
			done: false,
		});
		event.target.reset();
	};

	return (
		<>
			<h1>
				TodoApp: {countTodos}, <small> Pendientes: {countPendingTodos} </small>{" "}
			</h1>
			<hr />

			<div className="row">
				<div className="col-7">
					<ul className="list-group">
						{todos.map((todo) => (
							<li
								className={`list-group-item d-flex justify-content-between ${
									todo.done ? "text-decoration-line-through" : ""
								}`}
								key={todo.id}
							>

								<span
									onClick={() => toggleTodo(todo.id)}
									className={`${todo.done? 'text-decoration-line-through':""}`}
								>
									{todo.description}
								</span>
								
								<button
									className="btn btn-danger"
									onClick={() => deleteTodo(todo.id)}
								>
									Borrar
								</button>
							</li>
						))}
					</ul>
				</div>
				<div className="col-5">
					<h4> Agregar TODO </h4>
					<hr />
					<form onSubmit={handleSubmit}>
						<input type="text" className="form-control" name="description" />
						<button className="btn btn-outline-primary mt-1">Agregar</button>
					</form>
				</div>
			</div>
		</>
	);
};