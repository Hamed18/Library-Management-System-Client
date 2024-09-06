import { useLoaderData } from "react-router-dom";
import AllBookCard from "./AllBookCard";

const AllBooks = () => {
	const allBooks = useLoaderData();
	return (
		<div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
		{
		 allBooks.map(Book => 
			<AllBookCard
			key = {Book._id}
			Book = {Book}>
			</AllBookCard>
		 )
		}
	  </div>
	);
};

export default AllBooks;