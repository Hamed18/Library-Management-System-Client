import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";
import Login from "../UserAuthentication/Login";
import Register from "../UserAuthentication/Register";
import AddBook from "../Pages/AddBook/AddBook";
import AllBooks from "../Pages/AllBooks/AllBooks";
import UpdateBook from "../Pages/AllBooks/UpdateBook";

const routes = createBrowserRouter([
	{
	  path: "/",
	  element: <Root></Root>,
	  children: [
		{
			path: "/",
			element: <Home></Home>
		},
		{
			path: "/addBook",
			element: <AddBook></AddBook>
		},
		{
			path: "/allBook",
			element: <AllBooks></AllBooks>,
			loader: () => fetch('http://localhost:3000/allBooks')
		},
		{
			path: "/allBook/:id",
			element: <UpdateBook></UpdateBook>,
			loader: ({params}) => fetch(`http://localhost:3000/allBooks/${params.id}`)
		},
		{
			path: "/login",
			element: <Login></Login>
		},
		{
			path: "/register",
			element: <Register></Register>
		},
	  ]
	},
  ]);

export default routes;