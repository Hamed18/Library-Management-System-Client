import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";

const routes = createBrowserRouter([
	{
	  path: "/",
	  element: <Home></Home>,
	  children: [
		{
			path: "/",
			element: <Root></Root>
		}
	  ]
	},
  ]);

export default routes;