import { Mail } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { profile } from "@lib/data";

function Header() {
	return (
		<header className="min-h-[15vh] container flex items-center justify-between gap-10">
			<div className="flex items-center space-x-4">
				<div className="flex">
					{profile.avatars?.map((avatar, index) => (
						<Avatar
							key={index}
							className={`${
								index > 0 ? "-ml-2 z-0" : "z-10"
							} border border-white`}
						>
							<AvatarImage src={avatar.url} />
							<AvatarFallback className="border border-white">
								{avatar.fb}
							</AvatarFallback>
						</Avatar>
					))}
				</div>
				<div className="flex flex-col gap-1">
					<p className="text-foreground font-medium leading-none">
						{profile.getFullName()}
					</p>
					<p className="text-muted-foreground">{profile.tagline}</p>
				</div>
			</div>

			<Button variant="outline" asChild>
				<a
					href={`mailto:${profile.mail}`}
					title={`Send mail to: ${profile.mail}`}
				>
					<Mail className="md:mr-3 h-4 w-4" />{" "}
					<span className="hidden md:inline">{profile.mail}</span>
				</a>
			</Button>
		</header>
	);
}

export default Header;
