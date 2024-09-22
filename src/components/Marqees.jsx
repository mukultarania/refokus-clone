import React from "react";
import Marqe from "./Marqe";
import { images } from "../resources/marqueeImg";

function Marqees() {
	const imgdata = [images, images];
	return (
		<div className="py-20 mt-32 w-full relative overflow-hidden">
			{imgdata.map((item, ind) => (
				<Marqe key={ind} images={images} direction={ind == 0 ? "left" : "right"} />
			))}
		</div>
	);
}

export default Marqees;
