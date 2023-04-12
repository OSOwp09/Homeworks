const TodoList = ({ todos, deleteTodo,toggleTodo }) => {
	return (
		<div className="col-7">
			<ul className="list-group">
				{todos.map((todo) => (
					<li
						className={`list-group-item d-flex justify-content-between`}
						key={todo.id}
					>
						<span
							onClick={() => toggleTodo(todo.id)}
							className={`${todo.done ? "text-decoration-line-through" : ""}`}
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
	);
};

export default TodoList;
