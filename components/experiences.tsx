"use client";

import { experiences } from "@lib/data";
import { motion } from "framer-motion";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { AlertCircle } from "lucide-react";
import ExperienceItem from "./experience-item";

function Experiences() {
	return (
		<section className="py-10 md:py-20">
			<motion.h2
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className="text-2xl mb-10"
			>
				Experiences
			</motion.h2>

			{experiences?.length > 0 ? (
				<div className="relative flex flex-col gap-5">
					{experiences?.map((exp, index) => (
						<motion.div
							initial={{ opacity: 0, y: 100 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{
								ease: "easeIn",
								delay: 0.1 + (index % 2) / 10,
							}}
							key={index}
							className="z-10"
						>
							<ExperienceItem {...exp} />
						</motion.div>
					))}

					<div className="absolute h-full w-[1px] bg-foreground -top-6 left-4 z-0"></div>
				</div>
			) : (
				<Alert variant="destructive">
					<AlertCircle className="h-4 w-4" />
					<AlertTitle>{`No data :(`}</AlertTitle>
					<AlertDescription>
						Unfortunately I have no experience yet.
					</AlertDescription>
				</Alert>
			)}
		</section>
	);
}

export default Experiences;
