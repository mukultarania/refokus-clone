import React from "react";
import Button from "./Button";

const Navbar = () => {
	return (
		<div className="max-w-screen-lg mx-auto py-5 px-4 flex items-center justify-between text-white border-b-[1px] border-zinc-500">
			<div className="n-left flex items-center">
				<img
					className="max-w-4"
					src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/6669a1a4bcfb20e56e7cdd97_refokus_keyvisual_purple_animation_alpha_2800x1680_00.webp"
					alt=""
				/>
				<h1 className="ml-2 text-sm">Refokus</h1>
				<div className="link flex justify-center items-center gap-16 ml-10">
					{["Home", "Work", "Culture", "", "News"].map((elem) =>
						elem !== "" ? (
							<a className="text-sm font-regular" href="">
								{elem === "Work" && (
									<span className="inline-block w-2 h-2 bg-green-600 rounded-full mr-1" />
								)}
								{elem}
							</a>
						) : (
							<span className="w-[2px] h-7 bg-zinc-600" />
						)
					)}
				</div>
			</div>
			<Button/>
		</div>
	);
};

export default Navbar;
