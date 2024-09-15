import React from "react";
import { IoIosReturnRight } from "react-icons/io";

function Button({title = "Get Started"}) {
	return (
		<div className="flex items-center justify-between w-fit text-black bg-zinc-200 px-4 py-1 rounded-full">
			<span className="text-xs font-medium text-center ">
				{title}
			</span>
			<IoIosReturnRight />
		</div>
	);
}

export default Button;
