const TodoList = ({ todos, handleDelete }) => {
	return (
		<div className="col-7">
			<ul className="list-group">
				{todos.map((todo) => (
					<li
						className="list-group-item d-flex justify-content-between"
						key={todo.id}
					>
						<span className="align-self-center">{todo.description}</span>
						<button
							className="btn btn-danger"
							onClick={() => handleDelete(todo.id)}
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
