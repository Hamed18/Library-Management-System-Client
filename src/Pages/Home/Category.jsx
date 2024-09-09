import h from "../../../src/assets/Images/history1.jpg";
import t from "../../../src/assets/Images/t-1.jpeg";
import c from "../../../src/assets/Images/a-1.jpeg";
import b from "../../../src/assets/Images/b-1.jpg";
import { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";
import { Link } from "react-router-dom";

const Category = () => {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleViewClick = (category) => {
    setSelectedCategory(category);
    console.log(category);
  };

  useEffect(() => {
    if (selectedCategory) {
      const url = `http://localhost:3000/allBooksData?category=${selectedCategory}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log('Success in query', data);
          setData(data);
        })
        .catch((err) => console.log('Error using query', err));
    }
  }, [selectedCategory]);

  return (
    <div className="p-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <div className="w-full p-4">
          <div className="relative bg-white rounded-lg overflow-hidden">
            <img src={h} alt="History" className="w-full h-64 object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-80 flex justify-between items-center p-4">
              <p className="text-white text-lg font-bold">History</p>
              <button
                onClick={() => handleViewClick('History')}
                className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
              >
                View
              </button>
            </div>
          </div>
        </div>

        <div className="w-full p-4">
          <div className="relative bg-white rounded-lg overflow-hidden">
            <img src={b} alt="Business" className="w-full h-64 object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-80 flex justify-between items-center p-4">
              <p className="text-white text-lg font-bold">Business</p>
              <button
                onClick={() => handleViewClick('Business')}
                className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
              >
                View
              </button>
            </div>
          </div>
        </div>

        <div className="w-full p-4">
          <div className="relative bg-white rounded-lg overflow-hidden">
            <img src={t} alt="Technology" className="w-full h-64 object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-80 flex justify-between items-center p-4">
              <p className="text-white text-lg font-bold">Technology</p>
              <button
                onClick={() => handleViewClick('Technology')}
                className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
              >
                View
              </button>
            </div>
          </div>
        </div>

        <div className="w-full p-4">
          <div className="relative bg-white rounded-lg overflow-hidden">
            <img src={c} alt="Comics" className="w-full h-64 object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-80 flex justify-between items-center p-4">
              <p className="text-white text-lg font-bold">Comics</p>
              <button
                onClick={() => handleViewClick('Comics')}
                className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
              >
                View
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Displaying loaded data */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.length > 0 ? (
		  data.map(data =>
			<CategoryCard
			  key = {data._id}
			  category = {data}>
			</CategoryCard>
		)
        ) : (
          <p className="col-span-3 text-center text-lg">No books available</p>
        )}
      </div>
    </div>
  );
};

export default Category;
