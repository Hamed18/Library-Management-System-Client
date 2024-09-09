import { useContext, useEffect, useState } from "react";
import { CategoryContext } from "./Category";

const CategoryBook = ({book}) => {
    const {
		_id
	}  = book;
	
	return (
		<div>
		   {_id}
		</div>
	);
};

export default CategoryBook;