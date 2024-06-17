import { FaDiscord, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const MediaIcon = () => {
	return (
		<div className=" flex flex-row lg:hidden py-10 space-x-5 float-right items-center justify-center text-4xl ">
			<FaGithub />
			<FaTwitter />
			<FaLinkedin />
			<FaDiscord />
		</div>
	);
};

export default MediaIcon;
