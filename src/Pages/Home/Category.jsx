import h from "../../../src/assets/Images/history1.jpg";
import t from "../../../src/assets/Images/t-1.jpeg";
import c from "../../../src/assets/Images/a-1.jpeg";
import b from "../../../src/assets/Images/b-1.jpg";

import { Link } from "react-router-dom";
const Category = () => {
  return (
	<div className="p-2">
	<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
	  <div className="w-full p-4">
		<div className="relative bg-white rounded-lg overflow-hidden">
		  <img
			src={h}
			alt='History'
			className="w-full h-64 object-cover"
		  />
		  <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-80 flex justify-between items-center p-4">
			<p className="text-white text-lg font-bold">History</p>
			<Link
			  to='/allBook'
			  className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
			>
			  View
			</Link>
		  </div>
		</div>
	  </div>
  
	  <div className="w-full p-4">
		<div className="relative bg-white rounded-lg overflow-hidden">
		  <img
			src={b}
			alt='Business'
			className="w-full h-64 object-cover"
		  />
		  <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-80 flex justify-between items-center p-4">
			<p className="text-white text-lg font-bold">Business</p>
			<Link
			  to='/allBook'
			  className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
			>
			  View
			</Link>
		  </div>
		</div>
	  </div>
  
	  <div className="w-full p-4">
		<div className="relative bg-white rounded-lg overflow-hidden">
		  <img
			src={t}
			alt='Technology'
			className="w-full h-64 object-cover"
		  />
		  <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-80 flex justify-between items-center p-4">
			<p className="text-white text-lg font-bold">Technology</p>
			<Link
			  to='/allBook'
			  className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
			>
			  View
			</Link>
		  </div>
		</div>
	  </div>
  
	  <div className="w-full p-4">
		<div className="relative bg-white rounded-lg overflow-hidden">
		  <img
			src={c}
			alt='Comics'
			className="w-full h-64 object-cover"
		  />
		  <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-80 flex justify-between items-center p-4">
			<p className="text-white text-lg font-bold">Comics</p>
			<Link
			  to='/allBook'
			  className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
			>
			  View
			</Link>
		  </div>
		</div>
	  </div>
	</div>
  </div>
  
  
  );
};

export default Category;
