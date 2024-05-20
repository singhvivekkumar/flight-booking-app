"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import UserIcon from "./client/UserIcon";
import { BsAirplane } from "react-icons/bs";
import HamburgerMenu from "./client/HamburgerMenu";
// import { useTheme } from "next-themes";
// import { Theme } from "./client/Theme";

interface Props {
	href: string;
	title: string;
	className: string;
}

const CustomeLink = ({ href, title, className = "" }: Props) => {
	const route: string = usePathname();

	return (
		<Link href={href} className={`${className} relative group `}>
			{title}
			<span className={`absolute left-0 -bottom-0.5 h-[2px] inline-block bg-black group-hover:w-full transition-[width] ease-linear duration-300 ${route === href ? "w-full" : "w-0"} dark:bg-light`}>&nbsp;</span>
		</Link>
	);
};

const Navbar = () => {

	// const { setTheme } = useTheme();

	return (
		<header className="w-full py-10 font-medium flex items-center justify-between dark:text-light relative ">
			{/* logo */}
			<div className=" text-5xl mr-4 rotate-90 scale-y-100 ">
				<BsAirplane />
			</div>

			{/* Hamburger menu */}
			<HamburgerMenu/>

			{/* nav bar for destop */}
			<div className=" w-1/2 flex justify-between items-center ">
				<nav>
					<CustomeLink href="/" title="Flights" className=" mr-4 " />
					<CustomeLink href="/trains" title="Trains" className=" mx-4 " />
					<CustomeLink href="/bus" title="Bus" className=" ml-4 " />
				</nav>
			</div>

			{/* theme */}
			{/* <Theme/> */}

			{/* user */}
			<UserIcon />

		</header>
	);
};

export default Navbar;
