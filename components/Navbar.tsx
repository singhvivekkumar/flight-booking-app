'use client'

import React, { useState } from 'react'
import Link from 'next/link';
import useThemeSwitcher from '../hooks/useThemeSwitcher';
import { usePathname } from 'next/navigation';

interface Props {
	href: string;
	title: string;
	className: string;
}

const CustomeLink = ({href, title, className="" } : Props) => {

	const router: string = usePathname();
	
	return (
		<Link href={href} className={`${className} relative group `}>
			{title}
			<span className={`absolute left-0 -bottom-0.5 h-[2px] inline-block bg-black group-hover:w-full 
			transition-[width] ease-linear duration-300 ${router === href? "w-full" : "w-0"} dark:bg-light`}>&nbsp;</span>
		</Link>
	);
};

const Navbar = () => {

	const [mode, setMode] = useThemeSwitcher();
	const [ isOpen,setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	}

  	return (
	<header className="w-full lg:px-32 md:px-12 sm:px-8 py-10 font-medium flex items-center justify-between dark:text-light relative ">

		{/* Hamburger menu */}
		<button className="  flex-col justify-center items-center hidden lg:flex " onClick={handleClick}>
			<span className={`bg-dark dark:bg-light transition-all duration-300 ease-out h-0.5 block w-6 rounded-sm -translate-y-0.5 ${isOpen ? " rotate-45 translate-y-1": " -translate-y-0.5"}`}></span>
			<span className={` bg-dark dark:bg-light transition-all duration-300 ease-out h-0.5 block w-6 rounded-sm my-0.5 ${ isOpen ? "opacity-0": "opacity-100"}`}></span>
			<span className={`bg-dark dark:bg-light transition-all duration-300 ease-out h-0.5 block w-6 rounded-sm -translate-y-0.5 ${isOpen ? " -rotate-45 -translate-y-1": " translate-y-0.5"}`}></span>
		</button>

		{/* nav bar for destop */}
		<div className=" w-full flex justify-between items-center ">
			<nav>
				<CustomeLink href="/" title="Home" className=" mr-4 "/>
				<CustomeLink href="/about" title="About" className=" mx-4 "/>
				<CustomeLink href="/projects" title="Projects" className=" mx-4 "/>
				<CustomeLink href="/articles" title="Articles" className=" ml-4 "/>
			</nav>
		</div>
		
	</header>
  )
}

export default Navbar