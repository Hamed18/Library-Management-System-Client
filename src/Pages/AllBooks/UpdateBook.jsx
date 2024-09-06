import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';
import { useState } from "react";
import Select from 'react-select'; // For dropdown

const UpdateBook = () => {
	const book = useLoaderData();
	const {
		_id,
		BookName,
		BookImage,
		category,
		rating,
		authorName
	} = book;

	// Set up options for the rating dropdown
	const ratingOptions = [
		{ value: '1', label: '1 - Poor' },
		{ value: '2', label: '2 - Fair' },
		{ value: '3', label: '3 - Good' },
		{ value: '4', label: '4 - Very Good' },
		{ value: '5', label: '5 - Excellent' }
	];

	// State for rating
	const [selectedRating, setSelectedRating] = useState(ratingOptions.find(option => option.value === rating));

	const HandleForm = event => {
		event.preventDefault();
		const form = event.target;
		const BookName = form.BookName.value;
		const BookImage = form.BookImage.value;
		const authorName = form.authorName.value;
		const category = form.category.value;
		const rating = selectedRating.value;   //

		// Create an object from user input data
		const UpdatedBook = { BookName, BookImage, authorName, rating, category };
		console.log(UpdatedBook);

		// Send data to the server (PATCH request)
		fetch(`http://localhost:3000/allBooks/${_id}`, {
			method: 'PATCH',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(UpdatedBook)
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				if (data.modifiedCount > 0) {
					Swal.fire({
						title: "Gratitude!",
						text: "Book Updated Successfully",
						icon: "success",
						confirmButtonText: 'OK'
					});
				}
			})
			.catch(err => {
				console.log(err);
				Swal.fire({
					title: "Oops!",
					text: {err},
					icon: "err",
					confirmButtonText: 'OK'
				});
			});
	};

	return (
		<div className="max-w-full md:max-w-4xl lg:max-w-3xl mx-auto p-4">
			<form onSubmit={HandleForm} className="space-y-6">
				<div className="flex flex-col md:flex-row md:space-x-6">
					<div className="flex-1">
						<label className="block text-sm font-medium mb-2">Book Name</label>
						<input
							type="text"
							name="BookName"
							defaultValue={BookName}
							className="w-full border rounded-lg p-2"
							placeholder="Enter Book Name"
						/>
					</div>
					<div className="flex-1">
						<label className="block text-sm font-medium mb-2">Book Image URL</label>
						<input
							type="text"
							name="BookImage"
							defaultValue={BookImage}
							className="w-full border rounded-lg p-2"
							placeholder="Enter Book Image URL"
						/>
					</div>
				</div>

				<div className="flex flex-col md:flex-row md:space-x-6">
					<div className="flex-1">
						<label className="block text-sm font-medium mb-2">Author Name</label>
						<input
							type="text"
							name="authorName"
							defaultValue={authorName}
							className="w-full border rounded-lg p-2"
							placeholder="Enter Author Name"
						/>
					</div>
					<div className="flex-1">
						<label className="block text-sm font-medium mb-2">Category</label>
						<input
							type="text"
							name="category"
							defaultValue={category}
							className="w-full border rounded-lg p-2"
							placeholder="Enter Category"
						/>
					</div>
				</div>

				<div className="flex flex-col md:flex-row md:space-x-6">
					<div className="flex-1">
						<label className="block text-sm font-medium mb-2">Rating</label>
						<Select
							name="rating"
							value={selectedRating}
							onChange={setSelectedRating}
							options={ratingOptions}
							className="w-full"
						/>
					</div>
				</div>

				<div className="flex justify-center mt-6">
					<button
						type="submit"
						className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 text-white font-bold py-2 px-6 rounded-full shadow-lg transition duration-200 ease-in-out"
					>
						Update Book
					</button>
				</div>
			</form>
		</div>
	);
};

export default UpdateBook;
