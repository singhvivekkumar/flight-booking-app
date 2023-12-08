'use client'

import React, { useState } from 'react'

interface Props {

}

const HamburgerMenu = ( ) => {

	const [ isOpen,setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	}
	
  	return (
		<>
			{/* Hamburger menu */}
			<button className="  flex-col justify-center items-center hidden lg:flex " onClick={handleClick}>
				<span className={`bg-dark dark:bg-light transition-all duration-300 ease-out h-0.5 block w-6 rounded-sm -translate-y-0.5 ${isOpen ? " rotate-45 translate-y-1": " -translate-y-0.5"}`}></span>
				<span className={` bg-dark dark:bg-light transition-all duration-300 ease-out h-0.5 block w-6 rounded-sm my-0.5 ${ isOpen ? "opacity-0": "opacity-100"}`}></span>
				<span className={`bg-dark dark:bg-light transition-all duration-300 ease-out h-0.5 block w-6 rounded-sm -translate-y-0.5 ${isOpen ? " -rotate-45 -translate-y-1": " translate-y-0.5"}`}></span>
			</button>
		</>
  )
}

export default HamburgerMenu