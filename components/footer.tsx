import { Button } from "./ui/button";
import { Github } from "lucide-react";

function Footer() {
	return (
		<footer className="container mt-10">
			<div className="flex flex-col-reverse md:flex-row items-center justify-between gap-5 md:gap-10 border-t py-10">
				<p>{new Date().getFullYear()} - No rights reserved!</p>

				<Button variant="link" className="p-0" asChild>
					<a
						href="https://github.com/bhangdev/personal-website/fork"
						target="_blank"
						rel="nofollow noreferrer"
						title="Fork on GitHub"
					>
						<Github className="mr-3 h-4 w-4" />
						Fork on GitHub
					</a>
				</Button>
			</div>
		</footer>
	);
}

export default Footer;
