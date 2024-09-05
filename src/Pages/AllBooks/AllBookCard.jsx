import { FaTag, FaUser, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

// npm install react-rating

const AllBookCard = ({allBook}) => {
	const {
		BookName,
		BookImage,
		BookQuantity,
		category,
		rating,
		description,
		authorImage,
		authorName,
		authorEmail
	} = allBook;

	return (
		<div className="rounded-lg shadow-lg sm:w-96 dark:bg-gray-800 dark:text-gray-200 p-4 m-4 transform hover:scale-105 transition-transform duration-200 ease-in-out">
      {/* Book image */}
      <img
        src={BookImage}
        alt={BookName}
        className="object-cover object-center w-full h-64 rounded-lg shadow-md dark:bg-gray-500"
      />

      <div className="p-4 bg-gray-100 dark:bg-gray-900 rounded-b-lg mt-4">
        {/* Book details */}
        <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-100">
          {BookName}
        </h3>
        <div className="space-y-3 mb-4">
          <div className="flex items-center text-gray-700 dark:text-gray-300">
            <FaTag className="mr-2 text-xl text-indigo-500" />
            <span className="font-medium">Category: {category}</span>
          </div>
          <div className="flex items-center text-gray-700 dark:text-gray-300">
            {/* React Rating component */}
            <Rating
              initialRating={rating}
              emptySymbol={<FaStar className="text-gray-400 text-xl" />}
              fullSymbol={<FaStar className="text-yellow-500 text-xl" />}
              readonly
            />
            <span className="ml-2">{rating}/5</span>
          </div>
          <div className="flex items-center text-gray-700 dark:text-gray-300">
            <FaUser className="mr-2 text-xl text-green-500" />
            <span className="font-medium">Author: {authorName}</span>
          </div>
        </div>

        {/* Update button */}
        <div className="flex justify-center">
          {/* <Link to={`/updateBook/${book._id}`}> */}
            <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-pink-600 hover:to-purple-500 text-white font-bold py-2 px-6 rounded-full shadow-lg transition duration-200 ease-in-out">
              Update
            </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
	);
};

export default AllBookCard;