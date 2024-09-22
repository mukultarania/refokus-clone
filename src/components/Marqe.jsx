import { motion } from "framer-motion";
import React from "react";

function Marqe({ images, direction }) {
	return (
		// <div className="w-full">
		// 	<div className="flex items-center gap-20 mx-4 py-8 whitespace-nowrap overflow-hidden">
		// 		{imgdata.map((item, ind) => (
		// 			<div key={ind}>{item}</div>
		// 		))}
		// 	</div>
		// 	<div className="flex items-center gap-20 mx-4 py-8 whitespace-nowrap overflow-hidden">
		// 		{imgdata.map((item, ind) => (
		// 			<div key={ind}>{item}</div>
		// 		))}
		// 	</div>
		// </div>

		<div className="flex w-full overflow-hidden">
			<motion.div
				className="flex flex-shrink-0 gap-40 py-10 pr-40"
				initial={{ x: direction == "left" ? "0" : "-100%" }}
				animate={{ x: direction == "left" ? "-100%" : "0" }}
				transition={{ ease: "linear", duration: 15, repeat: Infinity }}
			>
				{images.map((item, ind) => (
					<div key={ind}>{item}</div>
				))}
			</motion.div>
			<motion.div
				className="flex flex-shrink-0 gap-40 py-10 pr-40"
				initial={{ x: direction == "left" ? "0" : "-100%" }}
				animate={{ x: direction == "left" ? "-100%" : "0" }}
				transition={{ ease: "linear", duration: 15, repeat: Infinity }}
			>
				{images.map((item, ind) => (
					<div key={ind}>{item}</div>
				))}
			</motion.div>
		</div>
	);
}

export default Marqe;
