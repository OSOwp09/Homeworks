import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
	const [gifs, setGifs] = useState([]);

	const getGifs = async (category) => {
		const url = `https://api.giphy.com/v1/gifs/search?api_key=oV6qYwly7GsDRCpwCYwEn61XkO9LZPfb&q=${category}&limit=25&offset=0&rating=g&lang=en`;
		const resp = await fetch(url);
		const { data } = await resp.json();
		const gifs = data.map((img) => {
			return {
				id: img.id,
				title: img.title,
				url: img.images.downsized_medium.url,
			};
		});
		return gifs;
	};

	const getGifsList = async () => {
		const gifsList = await getGifs(category);
		setGifs(gifsList);
		console.log(gifsList);
	};

	useEffect(() => {
		getGifsList();
	}, [category]);

	return (
		<div className="gif-grid">
			<h3>{category}</h3>
			{gifs.map((gif) => (
				<GifItem key={gif.id} gif={gif}/>
			))}
		</div>
	);
};
