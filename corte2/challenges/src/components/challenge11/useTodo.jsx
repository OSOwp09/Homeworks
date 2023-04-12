import { useReducer, useMemo } from "react";
import TodoReducer from "./TodoReducer";

const useTodo = () => {
	const initialTodos = [
		{
			id: new Date().getTime(),
			description: "Hacer los challenges",
			done: false,
		},
	];

	const [todos, dispatchTodo] = useReducer(TodoReducer, initialTodos);

	const countTodos = useMemo(() => todos.length, [todos]);

	const countPendingTodos = useMemo(
		() => todos.filter((todo) => !todo.done).length,
		[todos]
	);

	const addTodo = (newTodo) => {
		dispatchTodo({ type: "add", payload: newTodo });
	};

	const deleteTodo = (id) => { 
		dispatchTodo({ type: "delete", payload: id });
	};

	const toggleTodo = (id) => {
		dispatchTodo({ type: "toggle", payload: id });
	};

	return {
		todos,
		addTodo,
		deleteTodo,
		toggleTodo,
		countTodos,
		countPendingTodos,
	};
};

export default useTodo;
