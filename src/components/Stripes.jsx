import React from "react";
import Stripe from "./Stripe";

function Stripes() {
	const data = [
		{
			name: "CSSDA",
			url: "https://www.bookmarks.design/media/image/cssdesignawards.jpg",
			number: 42,
		},
		{
			name: "No-Code Conf 2021",
			url: "https://images.squarespace-cdn.com/content/v1/60ce5e3eaf4a9a05e1185d3d/6b2d2fcf-38cf-40e3-82c4-b55a7101da77/PearWeerawongWebsiteProjectsImage_NCC-01.jpg?format=1500w",
			number: 48,
		},
		{
			name: "awwwards.",
			url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Awwards-logotype-2018.svg/768px-Awwards-logotype-2018.svg.png?20180924071618",
			number: 11,
		},
		{
			name: "CSSDA",
			url: "https://www.bookmarks.design/media/image/cssdesignawards.jpg",
			number: 48,
		},
		{
			name: "No-Code Conf 2021",
			url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Awwards-logotype-2018.svg/768px-Awwards-logotype-2018.svg.png?20180924071618",
			number: 48,
		},
		{
			name: "awwwards.",
			url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Awwards-logotype-2018.svg/768px-Awwards-logotype-2018.svg.png?20180924071618",
			number: 11,
		},
	];
	return (
		<div className="flex items-center w-full mt-5">
            {data.map((elem, i) => {
                return <Stripe key={i} elem={elem}  />;
            })}
		</div>
	);
}

export default Stripes;
