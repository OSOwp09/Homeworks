import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";

export const Challenge09 = () => {
	const { counter, incrementer } = useCounter(1);
	const { data, isLoading, hasError } = useFetch(
		`https://api.breakingbadquotes.xyz/v1/quotes/2${counter}`
	);

	return (
		<>
			<h1>MultipleCustomHooks</h1>
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
