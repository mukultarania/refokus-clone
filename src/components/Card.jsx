import React from "react";
import { FaArrowRight } from "react-icons/fa6";

function Card({ width, start, para, hover }) {
	return (
		<div className={`${width} hover:${hover} min-h-[25rem] flex flex-col justify-between p-5 bg-zinc-800 rounded-xl `}>
			<div className="w-full">
				<div className="flex items-center justify-between">
					<h3 className="font-bold">Blog</h3>
					<FaArrowRight />
				</div>
				<h1 className="text-3xl font-semibold mt-10">Who we are.</h1>
			</div>
			<div className="down w-full">
				{start && (
					<>
						<h1 className="text-6xl font-bold tracking-tight leading-none">
							Hey
						</h1>
						<button className="rounded-full mt-2 py-1 px-2 border-[1px] border-zinc-300">
							Contact Us
						</button>
					</>
				)}
				{para && (
					<p className="text-xs text-zinc-400 font-normal mt-5">
						Lorem ipsum dolor, sit amet consectetur adipisicing.
					</p>
				)}
			</div>
		</div>
	);
}

export default Card;
