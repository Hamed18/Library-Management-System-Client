
const CategoryCard = ({category}) => {
	const {
		_id
	} = category
	return (
		<div>
			<h1>{_id}</h1>
		</div>
	);
};

export default CategoryCard;