import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";

export const Challenge09 = () => {
	const { counter, handleAdd,incrementer } = useCounter(1);
	const { data, isLoading, hasError } = useFetch(
		`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
	);

	return (
		<>
			<h1>MultipleCustomHooks</h1>
            <button onClick={()=>handleAdd()}>
                Change quote</button>
			<hr />
			{
                isLoading ? (
                    <div >
                        Loading...
                    </div>
                ):(
                    <blockquote>
                        <p>{data[0]?.quote}</p>
                        <footer>{data[0]?.author}</footer>
                    </blockquote>
                )
            }

		</>
	);
};
