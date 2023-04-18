import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../challenge13/counterSlice";

export function Counter() {
	const count = useSelector((state) => state.value);
	const dispatch = useDispatch();

	return (
		<div>
			<div className="">
				<h1>{count}</h1>
				<div>
					<button
						aria-label="Increment value"
						onClick={() => dispatch(increment())}
					>
						Increment +
					</button>

					<button
						aria-label="Decrement value"
						onClick={() => dispatch(decrement())}
						className="mx-3"
					>
						Decrement -
					</button>
				</div>
			</div>
		</div>
	);
}
