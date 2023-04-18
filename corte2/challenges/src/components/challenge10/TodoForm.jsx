const TodoForm = ({ addTodo }) => {

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
		<div className="col-5">
			<h4> Agregar TODO </h4>
			<hr />
			<form onSubmit={handleSubmit}>
				<input type="text" className="form-control" name="description" />
				<button className="btn btn-outline-primary mt-1">Agregar</button>
			</form>
		</div>
	);
};

export default TodoForm;
