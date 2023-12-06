import React from "react";
import { FaDiscord, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import SignUpForm from "./SignUpFrom";

const SignUpPage = () => {
	return (
		<div className=" flex flex-col lg:flex-row lg:items-center overflow-hidden h-screen bg-slate-100/90 ">
			<div className=" flex justify-between items-center p-4 py-6 h-10 lg:hidden bg-gradient-to-b from-[#4285F4] to-[#286DE0] border-b shadow-md ">
				<h3 className=" text-xl text-white font-semibold ">LOGO</h3>
				<h3 className=" text-2xl text-white font-bold ">Board.</h3>
			</div>
			<div className="hidden lg:flex flex-col bg-gradient-to-b from-[#4285F4] to-[#286DE0] origin-top-left -skew-x-[9deg] w-1/2 h-full p-16 justify-between  text-white font-sans  ">
				<div>
					<h2 className=" uppercase text-3xl font-bold skew-x-[9deg]">logo</h2>
				</div>
				<div>
					<h1 className=" text-center text-7xl font-bold skew-x-[9deg] ">Flight Booking</h1>
				</div>
				<div className=" flex flex-row justify-center items-center space-x-10 ml-10 text-4xl skew-x-[9deg] ">
					<FaGithub />
					<FaTwitter />
					<FaLinkedin />
					<FaDiscord />
				</div>
			</div>
			<div className=" flex justify-center items-center w-full lg:w-1/2 h-full ">
				<div className=" w-4/5 md:w-3/5 lg:w-3/5 ">
					<SignUpForm />
				</div>
			</div>
			<div className=" flex flex-row lg:hidden py-10 space-x-5 float-right items-center justify-center text-4xl ">
					<FaGithub />
					<FaTwitter />
					<FaLinkedin />
					<FaDiscord />
				</div>
		</div>
	);
};

export default SignUpPage;