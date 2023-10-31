import React from "react";

import { Download, Github, Instagram, Linkedin, Twitter } from "lucide-react";

import ourStudio from "@public/works/ourStudio.png";
import bunnyversive from "@public/works/bunnyversive.png";
import hagia from "@public/works/hagia.png";
import forTurkey from "@public/works/forTurkey.png";
import glixities from "@public/works/glixities.png";
import carpetDiem from "@public/works/carpetDiem.png";
import aynestMetal from "@public/works/aynestMetal.png";
import babuccuGlobal from "@public/works/babuccuGlobal.png";
import babuccu from "@public/works/babuccu.png";
import rafflegraphy from "@public/works/rafflegraphy.png";
import mxc from "@public/works/mxc.png";
import alsenetle from "@public/works/alsenetle.png";
import jokerKart from "@public/works/jokerKart.png";
import restoranya from "@public/works/restoranya.png";

export const profile = {
	name: "Eren",
	surname: "Süleymanoğlu",
	tagline: "- aka devbhang",
	avatars: [
		{
			url: "./eren-suleymanoglu-img.jpg",
			fb: "ES",
		},
		{
			url: "./devbhang-img.jpg",
			fb: "DB",
		},
	],
	mail: "connect@eren.codes",
	headline:
		"Hi, I'm Eren. Fullstack Developer who loves to code and design experiences on the web.",
	description:
		"With a passion for coding and an eye for design, I craft seamless online journeys using CSS, JavaScript, Python, React, TypeScript and Solidity. Whether it's frontend magic, backend wizardry or web3 witchcraft, I've got the skills to turn your web dreams into reality.",
	links: [
		{
			title: "GitHub",
			url: "https://github.com/devbhang",
			icon: React.createElement(Github, { className: "mr-3 h-4 w-4" }),
		},
		{
			title: "Linkedin",
			url: "https://www.linkedin.com/in/erensuleymanoglu",
			icon: React.createElement(Linkedin, { className: "mr-3 h-4 w-4" }),
		},
		{
			title: "Twitter",
			url: "https://twitter.com/devbhang",
			icon: React.createElement(Twitter, { className: "mr-3 h-4 w-4" }),
		},
		{
			title: "Instagram",
			url: "https://www.instagram.com/erensuleymanoglu",
			icon: React.createElement(Instagram, { className: "mr-3 h-4 w-4" }),
		},
		{
			title: "Download CV",
			url: "#",
			icon: React.createElement(Download, { className: "mr-3 h-4 w-4" }),
		},
	],
	getFullName: () => profile.name + " " + profile.surname,
} as const;

export const categories = [
	{
		name: "All",
		slug: "all",
	},
	{
		name: "Frontend",
		slug: "frontend",
	},
	{
		name: "Backend",
		slug: "backend",
	},
	{
		name: "CMS",
		slug: "cms",
	},
	{
		name: "Blockchain",
		slug: "blockchain",
	},
] as const;

export type CategoryProps = (typeof categories)[number]["slug"];

export const works = [
	{
		title: "Our Studio",
		description:
			"I work as a fullstack and blockchain developer in this project. When completed, creators will be able to mint their stock photos and videos on this platform and users will be able to buy assets using their crypto wallets.",
		url: "https://ourstudio.shop/",
		image: ourStudio,
		categories: ["frontend", "backend", "blockchain"],
		tags: [
			"Tailwind",
			"NextJS",
			"React",
			"TypeScript",
			"Solidity",
			"EthersJS",
		],
	},
	{
		title: "Bunnyversive",
		description:
			"I designed and developed this website for bunnyversive studio. They are an art collective, serve as a hub where the best artists and developers come together, offering unique experiences at the forefront of technology and artistry.",
		url: "https://bunnyversive.studio/",
		image: bunnyversive,
		categories: ["frontend", "cms"],
		tags: ["CSS3", "JavaScript", "UI/UX", "WordPress", "Elementor"],
	},
	{
		title: "Hagia",
		description:
			"I designed and developed this website for Hagia. They are a creative studio that leverages the power of Web3 and AI to provide expert consultancy services to government agencies and leading companies.",
		url: "https://hagiaproject.com/",
		image: hagia,
		categories: ["frontend", "cms"],
		tags: ["CSS3", "JavaScript", "UI/UX", "WordPress", "Elementor"],
	},
	{
		title: "For Turkey",
		description:
			"I developed this project in purpose of aiding the victims of earthquake happened in Turkey. 30 artists in the NFT community donated their artworks. Raised more than 8K dollars.",
		url: "https://forturkey.art",
		image: forTurkey,
		categories: ["frontend", "blockchain"],
		tags: [
			"Tailwind",
			"NextJS",
			"React",
			"TypeScript",
			"Solidity",
			"EthersJS",
		],
	},
	{
		title: "Glixities",
		description:
			"I developed the website, mint page and smart contract for this project. Glixities is a metaverse where users can design their glitchy realm using their NFT assets.",
		url: "https://www.glixities.com/",
		image: glixities,
		categories: ["frontend", "blockchain"],
		tags: [
			"Tailwind",
			"NextJS",
			"React",
			"JavaScript",
			"Solidity",
			"EthersJS",
		],
	},
	{
		title: "CarpetDiem",
		description:
			"I worked as a frontend developer in this project. Carpetdiem is a collection of 555 generative carpet forms created by a digital code that fuses ancient patterns and contemporary algorithms.",
		url: "https://carpetdiem.art/",
		image: carpetDiem,
		categories: ["frontend"],
		tags: ["Tailwind", "NextJS", "React", "JavaScript", "API", "EthersJS"],
	},
	{
		title: "Aynest Metal",
		description:
			"I designed and developed this website for Aynest Global. They are providing comprehensive consultancy services to companies seeking to procure steel, metals, and construction materials from Turkiye.",
		url: "https://aynestmetal.com/",
		image: aynestMetal,
		categories: ["frontend", "cms"],
		tags: ["CSS3", "JavaScript", "UI/UX", "WordPress", "Elementor"],
	},
	{
		title: "Rafflegraphy",
		description:
			"I developed the mint page and smart contract for this project. Rafflegraphy is a blind mint NFT photography collection which focuses on to grow NFT community equally.",
		url: "https://etherscan.io/address/0x0ad36b9cfcd86b8500ed1309fa2c8b5d86b7524c#code",
		image: rafflegraphy,
		categories: ["blockchain"],
		tags: ["JavaScript", "Solidity", "EthersJS"],
	},
	{
		title: "MXC Genesis",
		description:
			"I developed the mint page and smart contract for this project. It's collection of 80 artworks from 80 artists with total sales of 80 ETH. Sold out in 10 hours.",
		url: "https://etherscan.io/address/0x18aefe20ff1dd8e95f723567c886319598e9c8a8#code",
		image: mxc,
		categories: ["blockchain"],
		tags: ["JavaScript", "Solidity", "EthersJS"],
	},
	{
		title: "Babuccu Global",
		description:
			"I designed and developed this website for Babuccu Aethetics. They are a plastic surgery clinic based in Istanbul. The website is used for advertising their health tourism services.",
		url: "https://babuccuglobal.com/",
		image: babuccuGlobal,
		categories: ["frontend", "cms"],
		tags: ["CSS3", "JavaScript", "UI/UX", "WordPress", "Elementor"],
	},
	{
		title: "Babuccu",
		description:
			"I designed and developed this website for Babuccu Aethetics. They are a plastic surgery clinic based in Istanbul. The website is used for advertising their plastic surgery services.",
		url: "https://babuccu.com/",
		image: babuccu,
		categories: ["frontend", "cms"],
		tags: ["CSS3", "JavaScript", "UI/UX", "WordPress", "Elementor"],
	},
	{
		title: "Alsenetle",
		description:
			"I worked as a fullstack developer in this project. Alsenetle was a 2nd hand auto ads platform. It was live between 2017 and 2019.",
		url: "https://web.archive.org/web/20180816232906/https://www.alsenetle.com/",
		image: alsenetle,
		categories: ["frontend", "backend"],
		tags: ["CSS3", "JavaScript", "Python", "Django", "MySQL"],
	},
	{
		title: "JokerKart",
		description:
			"I worked as a fullstack developer in this project. JokerKart was a customer royalty platform where companies could create and manage their own royalty services. It was live between 2014 and 2019.",
		url: "https://web.archive.org/web/20150901204730/http://jokerkart.com/",
		image: jokerKart,
		categories: ["frontend", "backend"],
		tags: ["CSS3", "JavaScript", "Python", "Django", "PostgreSQL"],
	},
	{
		title: "Restoranya",
		description:
			"I worked as a fullstack developer in this project. Restoranya was an online food ordering platform. It was live between 2009 and 2015.",
		url: "https://web.archive.org/web/20130302150626/http://restoranya.com/",
		image: restoranya,
		categories: ["frontend", "backend"],
		tags: ["CSS2", "JavaScript", "Python", "Django", "MySQL"],
	},
];

export type WorksProps = (typeof works)[number];

export const skills = [
	"CSS3",
	"Tailwind",
	"JavaScript",
	"React",
	"NextJS",
	"NodeJS",
	"TypeScript",
	"Solidity",
	"Python",
	"Django",
	"SQL",
	"NoSQL",
	"Git",
	"WordPress",
] as const;

export const experiences = [
	{
		title: "Fullstack Developer",
		company: "Freelance",
		description:
			"I'm now a fullstack developer working as a freelancer. My stack includes Solidity, CSS, React, Next.js, TypeScript, Tailwind, SQL and WordPress. I'm open to full-time remote opportunities.",
		date: "2018",
	},
	{
		title: "WordPress Developer",
		company: "VigitalArt",
		description:
			"We were building premium themes for Envato Market using CSS3, Javascript (jQuery) and Visual Composer integrated with WordPress CMS.",
		date: "2016",
	},
	{
		title: "Fullstack Developer",
		company: "BTDays Technology",
		description:
			"I helped build a customer loyalty platform which is written in Python using Django Framework called JokerKart. I worked as both backend and frontend developer. Also, my other responsibility was managing Git repos.",
		date: "2014",
	},
	{
		title: "Frontend Developer",
		company: "Novospire",
		description:
			"I worked as a frontend developer. I've built websites using CSS3 and Javascript (jQuery) integrated with WordPress CMS.",
		date: "2013",
	},
	{
		title: "Fullstack Developer",
		company: "Restoranya Inc.",
		description:
			"Restoranya was an online food delivery platform that was written in Python using Django Framework. I worked as both a backend and frontend developer. Also, my other responsibilities were managing Git repos, databases and servers.",
		date: "2009",
	},
	{
		title: "Intern",
		company: "Pastelboya Interactive",
		description:
			"I've learned how to design websites and web applications. I've built my frontend and backend skills.",
		date: "2008",
	},
] as const;

export type ExperiencesProps = (typeof experiences)[number];
