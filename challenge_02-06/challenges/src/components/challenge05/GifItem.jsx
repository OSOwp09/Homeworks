export const GifItem = ({ gif }) => {
	console.log(gif);
	return (
		<div className="gif-item">
			<h4>{gif.title}</h4>
		</div>
	);
};
