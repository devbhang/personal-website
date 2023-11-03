"use client";

import { profile } from "@lib/data";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

function Hero() {
	return (
		<section className="min-h-[85vh] md:min-h-min flex flex-col justify-end max-w-screen-md mr-auto py-14 md:py-20">
			<motion.h1
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className="text-3xl md:text-5xl text-transparent bg-gradient-to-br bg-clip-text from-white via-white to-[#454545] to-90%"
			>
				{profile.headline}
			</motion.h1>

			<motion.p
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.1 }}
				className="mt-10 mb-16"
			>
				{profile.description}
			</motion.p>

			<div className="flex flex-wrap justify-between gap-5">
				{profile.links.map((link, index) => (
					<Button
						key={index}
						variant="outline"
						className="profile-links"
						asChild
					>
						<motion.a
							href={link.url}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.2 + index / 10 }}
							target="_blank"
							rel="nofollow noreferrer"
							title={link.title}
						>
							{link.icon}{" "}
							<span className="hidden md:inline">
								{link.title}
							</span>
						</motion.a>
					</Button>
				))}
			</div>
		</section>
	);
}

export default Hero;
