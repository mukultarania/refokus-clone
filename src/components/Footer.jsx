import React from "react";

const Footer = () => {
	return (
		<div className="w-full text-white">
			<div className="max-w-screen-lg mx-auto py-12 flex gap-32">
				<div className="basis-1/2">
					<h1 className="text-[9rem] leading-none tracking-tight">
						refokus.
					</h1>
				</div>
				<div className="basis-1/2 flex gap-2">
					<div className="basis-1/3">
						<h4 className="mb-10">Socials</h4>
						{["instagram", "twitter", "linkedin"].map(
							(item, ind) => (
								<a className="block mt-2 text-zinc-700 capitalize">
									{item}
								</a>
							)
						)}
					</div>
					<div className="basis-1/3">
						<h4 className="mb-10">Sitemap</h4>
						{["Home", "Work", "Careers", "Contact"].map(
							(item, ind) => (
								<a className="block mt-2 capitalize">{item}</a>
							)
						)}
					</div>
					<div className="basis-1/2 flex flex-col items-end">
						<p>
							Refokus is a pioneering digital agency by design and
							empowered by technology.
						</p>
                        <img
                            className="mt-12"
							src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
