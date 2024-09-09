import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";
import Login from "../UserAuthentication/Login";
import Register from "../UserAuthentication/Register";
import AddBook from "../Pages/AddBook/AddBook";
import AllBooks from "../Pages/AllBooks/AllBooks";
import UpdateBook from "../Pages/AllBooks/UpdateBook";
import ErrorPage from "./ErrorPage";
import PrivateRoute from "./PrivateRoute";
import BorrowedBooks from "../Pages/BorrowedBooks/BorrowedBooks";
import CategoryCard from "../Pages/Home/CategoryCard";

const routes = createBrowserRouter([
	{
	  path: "/",
	  element: <Root></Root>,
	  errorElement: <ErrorPage></ErrorPage>,
	  children: [
		{
			path: "/",
			element: <Home></Home>
		},
		{
			path: "/addBook",
			element: <PrivateRoute><AddBook></AddBook></PrivateRoute>
		},
		{
			path: "/allBook",
			element: <AllBooks></AllBooks>,
			loader: () => fetch('http://localhost:3000/allBooks')
		},
		{
			path: "/allBook/:id",
			element: <PrivateRoute><UpdateBook></UpdateBook></PrivateRoute>,
			loader: ({params}) => fetch(`http://localhost:3000/allBooks/${params.id}`)
		},
		{
			path: "/borrowedBooks",
			element: <PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>
		},
		{
			path: "/login",
			element: <Login></Login>
		},
		{
			path: "/register",
			element: <Register></Register>
		},
		// {
		// 	path: "/categoryPage",
		// 	element: <CategoryCard></CategoryCard>
		// },
	  ]
	},
  ]);

export default routes;