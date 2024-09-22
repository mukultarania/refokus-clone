import React from "react";
import Button from "./Button";

const Product = (props) => {
	return (
		<div className="w-full h-[20rem] py-16 hover:bg-slate-600 text-white">
			<div onMouseEnter={() => {props.mover(props.count)}} className="w-[80%] mx-auto flex items-center justify-between">
				<h1 className="text-2xl font-medium">{props.title}</h1>
				<div className="dets w-1/3">
					<p className="mb-5">{props.description}</p> 
					<div className="flex items-center gap-5">
						{props.live && <Button />}
						{props.case && <Button title="Case Study" />}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
