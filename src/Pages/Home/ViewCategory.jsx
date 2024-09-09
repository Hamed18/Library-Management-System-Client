import { useLoaderData } from "react-router-dom";
import CategoryBook from "./CategoryBook";
import { useContext, useEffect, useState } from "react";
import { CategoryContext } from "./Category";

const ViewCategory = () => {
  const books = useLoaderData();
  console.log(books);
  const { category } = useContext(CategoryContext); // context api
  console.log(category);

  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
	if (books && category) {
	  const remaining = books.filter(book => book.category === category);
	  setFilteredBooks(remaining);
	}
  }, [books, category]);
  
  return (
    <div>
      {filteredBooks.length > 0 ? (
        filteredBooks.map(book => (
          <CategoryBook key={book._id} book={book} />
        ))
      ) : (
        <p>No books found for this category.</p>
      )}
    </div>
  );
};

export default ViewCategory;
