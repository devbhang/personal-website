"use client";

import { useMemo, useState } from "react";
import {
	categories,
	works,
	type CategoryProps,
	type WorksProps,
} from "@lib/data";
import { Alert, AlertDescription, AlertTitle } from "@components/ui/alert";
import { AlertCircle, Check, ChevronsUpDown } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
} from "@components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@components/ui/popover";

import WorkItem from "./work-item";
import { cn } from "@lib/utils";

function Works() {
	const [filter, setFilter] = useState<CategoryProps>("all");
	const [open, setOpen] = useState<boolean>(false);

	const filtered = useMemo((): WorksProps[] => {
		if (filter === "all") return works;

		return works.filter((work) => work.categories.includes(filter));
	}, [filter]);

	return (
		<section className="py-10 md:py-20">
			<motion.div
				initial={{ opacity: 0, y: 100 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{
					ease: "easeIn",
					delay: 0.1,
				}}
				className="flex gap-10 items-end md:items-center justify-between mb-10"
			>
				<h2 className="text-2xl">Selected Works</h2>

				<div className="hidden lg:flex border rounded-md p-1 gap-1">
					{categories?.map((cat, index) => (
						<Button
							key={index}
							variant={"ghost"}
							className={`${
								filter === cat.slug
									? "bg-secondary text-foreground"
									: ""
							} text-xs`}
							onClick={() => setFilter(cat.slug)}
						>
							{cat.name}
						</Button>
					))}
				</div>

				<div className="lg:hidden">
					<Popover open={open} onOpenChange={setOpen}>
						<PopoverTrigger asChild>
							<Button
								variant="outline"
								role="combobox"
								aria-expanded={open}
								className="w-[120px] justify-between"
							>
								{filter
									? categories.find(
											(cat) => cat.slug === filter
									  )?.name
									: "Select category..."}
								<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
							</Button>
						</PopoverTrigger>
						<PopoverContent className="w-[120px] p-0">
							<Command>
								<CommandInput placeholder="Search..." />
								<CommandEmpty>No category found.</CommandEmpty>
								<CommandGroup>
									{categories?.map((cat, index) => (
										<CommandItem
											key={index}
											value={cat.slug}
											onSelect={() => {
												setFilter(cat.slug);
												setOpen(false);
											}}
										>
											<Check
												className={cn(
													"mr-2 h-4 w-4",
													filter === cat.slug
														? "opacity-100"
														: "opacity-0"
												)}
											/>
											{cat.name}
										</CommandItem>
									))}
								</CommandGroup>
							</Command>
						</PopoverContent>
					</Popover>
				</div>
			</motion.div>

			{filtered?.length > 0 ? (
				<div className="grid md:grid-cols-2 gap-10">
					{filtered?.map((work, index) => (
						<motion.div
							initial={{ opacity: 0, y: 100 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{
								ease: "easeIn",
								delay: 0.1 + (index % 2) / 10,
							}}
							key={index}
						>
							<WorkItem {...work} />
						</motion.div>
					))}
				</div>
			) : (
				<Alert variant="destructive">
					<AlertCircle className="h-4 w-4" />
					<AlertTitle>{`No data :(`}</AlertTitle>
					<AlertDescription>
						Unfortunately I have no projects available to show.
					</AlertDescription>
				</Alert>
			)}
		</section>
	);
}

export default Works;
