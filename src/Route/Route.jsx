import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";
import Login from "../UserAuthentication/Login";
import Register from "../UserAuthentication/Register";
import AddBook from "../Pages/AddBook/AddBook";

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