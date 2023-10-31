import Hero from "@components/hero";
import Works from "@components/works";
import Skills from "@components/skills";
import Experiences from "@components/experiences";

export default function Home() {
	return (
		<main className="container">
			<Hero />
			<Works />
			<Skills />
			<Experiences />
		</main>
	);
}
