import React from "react";

function Stripe({ elem }) {
	return (
		<div className="flex justify-between items-center text-white w-[16.66%] px-4 py-3 border-t-[1.2px] border-b-[1.2px] border-r-[1px] border-zinc-600">
			<span className="text-sm font-semibold uppercase">{elem.name}</span>
			<span className="font-semibold">{elem.number}</span>
		</div>
	);
}

export default Stripe;
