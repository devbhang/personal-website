import Marquee from "react-fast-marquee";
import { skills } from "@lib/data";

function Skills() {
	return (
		<section className="flex flex-wrap lg:flex-nowrap gap-5 py-10 items-center justify-center lg:justify-start">
			<h2 className="text-2xl">Skills</h2>

			<Marquee autoFill={true} className="marquee-list">
				{skills?.map((skill, index) => (
					<span key={index} className="text-lg mx-5">
						{skill}
					</span>
				))}
			</Marquee>
		</section>
	);
}

export default Skills;
