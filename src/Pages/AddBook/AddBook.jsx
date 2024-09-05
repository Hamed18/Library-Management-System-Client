import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from 'sweetalert2';

const AddBook = () => {
  const { user } = useContext(AuthContext);

  const handleAddBook = (event) => {
    event.preventDefault();

    const form = event.target;
    const BookName = form.BookName.value.trim().toLowerCase(); // Easy for search
    const BookImage = form.BookImage.value;
    const BookQuantity = form.BookQuantity.value;
    const category = form.category.value;  
    const rating = form.rating.value;
    const description = form.description.value; 
    const authorImage = user.photoURL;
    const authorName = user.displayName;
    const authorEmail = user.email;

    const newBook = {
      BookName,
      BookImage,
      BookQuantity: parseInt(BookQuantity, 10),
      category,
      rating: parseInt(BookQuantity, 10),
      description,
      authorImage,
      authorName,
      authorEmail,
    };
    console.log("New Book Data:", newBook);

	// create 
	fetch('http://localhost:3000/addBooks',{
		method: 'POST',
		headers: {
			'content-type' : 'application/json'
		},
		body: JSON.stringify(newBook)
	})
	.then(res => res.json())
	.then(data => {
		console.log(data);
		// sweet alert
		if (data.insertedId){
			Swal.fire({
				title: "Gratitude!",
				text: "Book Items Added Successfully",
				icon: "success",
				confirmButtonText: 'OK'
			});
		}

	})

  };

  return (
    <div className="">
      <section className="p-6 bg-gray-100 dark:bg-gray-900">
        <form
          onSubmit={handleAddBook}
          className="container flex flex-col mx-auto space-y-12"
        >
          {/* author Information */}
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-white dark:bg-gray-800">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium text-gray-900 dark:text-gray-100">
                author Information
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Details about the author.
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label
                  htmlFor="authorImage"
                  className="text-sm text-gray-900 dark:text-gray-100"
                >
                  author Image
                </label>
                <img
                //   src={user?.photoURL? user.photoURL : null}
                  alt="author"
                  className="rounded-full h-20 w-20"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label
                  htmlFor="authorName"
                  className="text-sm text-gray-900 dark:text-gray-100"
                >
                  author Name
                </label>
                <input
                  id="authorName"
                  type="text"
				//   {
				// 	user.displayName? defaultValue={user.displayName}: null
				//   }
				//   defaultValue={user.displayName}
                //  readOnly
                  className="w-full rounded-md border border-gray-300 dark:border-gray-700 focus:ring focus:ring-opacity-75 focus:ring-violet-600 dark:text-gray-50 dark:focus:ring-violet-600"
                />
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="authorEmail"
                  className="text-sm text-gray-900 dark:text-gray-100"
                >
                  author Email
                </label>
                <input
                  id="authorEmail"
                  type="email"
                //   defaultValue={user.email}
                  readOnly
                  className="w-full rounded-md border border-gray-300 dark:border-gray-700 focus:ring focus:ring-opacity-75 focus:ring-violet-600 dark:text-gray-50 dark:focus:ring-violet-600"
                />
              </div>
            </div>
          </fieldset>

          {/* Book Information */}
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-white dark:bg-gray-800">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium text-gray-900 dark:text-gray-100">
                Book Information
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Provide details about the Book you want to donate.
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label
                  htmlFor="BookName"
                  className="text-sm text-gray-900 dark:text-gray-100"
                >
                  Book Name
                </label>
                <input
                  id="BookName"
                  type="text"
                  placeholder="Book Name"
                  className="w-full rounded-md border border-gray-300 dark:border-gray-700 focus:ring focus:ring-opacity-75 focus:ring-violet-600 dark:text-gray-50 dark:focus:ring-violet-600"
                  required
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label
                  htmlFor="BookImage"
                  className="text-sm text-gray-900 dark:text-gray-100"
                >
                  Book Image URL
                </label>
                <input
                  id="BookImage"
                  type="text"
                  placeholder="Book Image URL"
                  className="w-full rounded-md border border-gray-300 dark:border-gray-700 focus:ring focus:ring-opacity-75 focus:ring-violet-600 dark:text-gray-50 dark:focus:ring-violet-600"
                  required
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label
                  htmlFor="BookQuantity"
                  className="text-sm text-gray-900 dark:text-gray-100"
                >
                  Book Quantity
                </label>
                <input
                  id="BookQuantity"
                  type="number"
                  placeholder="Book Quantity"
                  className="w-full rounded-md border border-gray-300 dark:border-gray-700 focus:ring focus:ring-opacity-75 focus:ring-violet-600 dark:text-gray-50 dark:focus:ring-violet-600"
                  required
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label
                  htmlFor="category"
                  className="text-sm text-gray-900 dark:text-gray-100"
                >
                  Category
                </label>
                <input
                  id="category"
                  type="text"
                  placeholder="category"
                  className="w-full rounded-md border border-gray-300 dark:border-gray-700 focus:ring focus:ring-opacity-75 focus:ring-violet-600 dark:text-gray-50 dark:focus:ring-violet-600"
                  required
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label
                  htmlFor="rating"
                  className="text-sm text-gray-900 dark:text-gray-100"
                >
                  Rating
                </label>
                <input
                  id="rating"
				  type="number"
				  min="1"
				  max="5"
				  placeholder="i.g. 1,2,..5"
                  className="w-full rounded-md border border-gray-300 dark:border-gray-700 focus:ring focus:ring-opacity-75 focus:ring-violet-600 dark:text-gray-50 dark:focus:ring-violet-600"
                  required
                />
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="description"
                  className="text-sm text-gray-900 dark:text-gray-100"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  placeholder="Any information"
                  className="w-full rounded-md border border-gray-300 dark:border-gray-700 focus:ring focus:ring-opacity-75 focus:ring-violet-600 dark:text-gray-50 dark:focus:ring-violet-600"
                ></textarea>
              </div>
              <div className="col-span-full">
                <button
                  type="submit"
                  className="px-4 py-2 font-medium text-white bg-blue-500 rounded-md"
                >
                  Add Book
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default AddBook;