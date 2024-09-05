import { useLoaderData } from "react-router-dom";
import AllBookCard from "./AllBookCard";

const AllBooks = () => {
	const AllBooks = useLoaderData();
	return (
		<div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
		{
		 AllBooks.map(allBook => 
			<AllBookCard
			key = {allBook._id}
			allBook = {allBook}>
				
			</AllBookCard>
		 )
		}
	  </div>
	);
};

export default AllBooks;