import Image from "next/image";
import type { WorksProps } from "@lib/data";
import { Badge } from "@components/ui/badge";
import { Button } from "@components/ui/button";
import { ArrowRight } from "lucide-react";

function WorkItem({ title, description, url, image, tags }: WorksProps) {
	return (
		<div className="group grid overflow-hidden h-full border border-border bg-secondary rounded-md p-5">
			<div className="flex items-center justify-between">
				<h3 className="text-xl">{title}</h3>

				<Button variant="outline" className="w-8 h-8 p-2" asChild>
					<a
						href={url}
						target="_blank"
						rel="nofollow noreferrer"
						title={title}
					>
						<ArrowRight className="h-4 w-4 group-hover:-rotate-45 transition duration-300" />
					</a>
				</Button>
			</div>
			<p className="mt-5 mb-10">{description}</p>

			<div className="flex gap-2 items-center place-self-end">
				<div className="flex flex-wrap gap-2">
					{tags?.map((tag, index) => (
						<Badge key={index}>{tag}</Badge>
					))}
				</div>

				<Image
					src={image}
					alt={title}
					width={250}
					height={250}
					quality={90}
					className="translate-x-10 group-hover:translate-x-5 transition duration-300"
				/>
			</div>
		</div>
	);
}

export default WorkItem;
