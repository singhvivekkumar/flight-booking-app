import "@/styles/globals.css";
import { Providers } from "../providers";

export const metadata = {
	title: "flight booking app",
	description: "Generated by airline system",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className=" w-full h-full inline-block z-0 bg-light dark:bg-dark ">
			{children}
		</main>
	);
}
