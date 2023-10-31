import type { ExperiencesProps } from "@lib/data";

function ExperienceItem({
	title,
	company,
	description,
	date,
}: ExperiencesProps) {
	return (
		<div className="flex gap-10 md:gap-20 items-start">
			<div className="bg-background py-5">{date}</div>
			<div className="py-5">
				<h3 className="mb-3">{`${title} @ ${company}`}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default ExperienceItem;
