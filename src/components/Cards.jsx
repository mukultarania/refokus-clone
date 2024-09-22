import React from "react";
import Card from "./Card";

function Cards() {
	return (
		<div className="w-full text-white">
			<div className="flex gap-1 max-w-screen-lg mx-auto py-16">
				<Card
					width={"basis-2/5"}
					start={false}
					para={true}
                    // hover={"bg-zinc-700"}
				/>
				<Card
					width={"basis-3/5"}
					start={true}
					para={false}
					hover={true}
				/>
			</div>
		</div>
	);
}

export default Cards;
