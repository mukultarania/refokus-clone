import React from "react";
import { images } from "../resources/marqueeImg";

function Marqe() {
	const imgdata = images;
	return (
		<div className="w-full">
			<div className="flex items-center gap-20 mx-4 py-8 whitespace-nowrap overflow-hidden">
				{imgdata.map((item) => (
					<div>{item}</div>
				))}
			</div>
			<div className="flex items-center gap-20 mx-4 py-8 whitespace-nowrap overflow-hidden">
				{imgdata.map((item) => (
					<div>{item}</div>
				))}
			</div>
		</div>
	);
}

export default Marqe;
