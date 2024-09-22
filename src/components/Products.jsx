import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
	const pData = [
		{
			title: "Cula",
			description:
				"We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
			live: true,
			case: false,
		},
		{
			title: "BCG Platinion",
			description:
				"We created a robust website that blends top notch design and facilitates dynamic content to the requirements of 74 locations, all powered by Webflow’s modern CMS, giving the BCG Platinion marketing team a completely new experience for content management.",
			live: true,
			case: false,
		},
		{
			title: "Arqitel",
			description:
				"We had an ambitious goal for Arqitel's new website: Reduce the complexity of their industry through stunning 3D visualisations that combine interaction and story telling. We wanted to be able to tell what they do in a single page, while positioning their brand as a leader in their sector.",
			live: true,
			case: true,
		},
		{
			title: "Sevdesk",
			description:
				"We collaborated with sevdesk, Germany and Austria's leading accounting software, to design and develop their new website in Webflow. With a strong emphasis on SEO integrity, we created a cohesive user experience across over 2,000 pages.",
			live: true,
			case: false,
		},
	];

	const [pos, setPos] = useState(0);
	const mover = (val) => {
		setPos(val * 20);
	};

	return (
		<div className="mt-24 relative">
			{pData.map((elem, i) => (
				<Product
					key={i}
					title={elem.title}
					description={elem.description}
					live={elem.live}
					case={elem.case}
					mover={mover}
					count={i}
				/>
			))}
			<div className="w-full h-full absolute top-0 pointer-events-none">
				<motion.div
					initial={{ x: "-50%", y: pos }}
					animate={{ y: pos + "rem" }}
					className="window overflow-hidden w-[25rem] h-[20rem] absolute left-[40%] -translate-x-[40%] bg-white"
				>
					<motion.div
						className="w-full h-full"
						animate={{ y: -pos + "rem" }}
						transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
					>
					</motion.div>
					<motion.div
						className="w-full h-full bg-sky-400"
						animate={{ y: -pos + "rem" }}
						transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
					></motion.div>
					<motion.div
						className="w-full h-full bg-sky-600"
						animate={{ y: -pos + "rem" }}
						transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
					></motion.div>
					<motion.div
						className="w-full h-full bg-sky-800"
						animate={{ y: -pos + "rem" }}
						transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
					></motion.div>
				</motion.div>
			</div>
		</div>
	);
}

export default Products;
