import { useEffect, useState } from "react";

const useThemeSwitcher = () => {

	// The prefers-color-scheme CSS media feature is used to detect if a user has requested light or dark color themes. A user indicates their preference through an operating system setting (e.g. light or dark mode) or a user agent setting.
	const preferDarkQuery = "(prefers-color-scheme: dark)";
	const [mode, setMode] = useState("");

	useEffect(() => {
		// The Window interface's matchMedia() method returns a new MediaQueryList object that can then be used to determine if the document matches the media query string, as well as to monitor the document to detect when it matches (or stops matching) that media query.
		const mediaQuery = window.matchMedia(preferDarkQuery);
		// console.log("prefers color media", mediaQuery);

		// get the data from local storage by getItem()
		const userPrefer = window.localStorage.getItem("theme");
		// console.log("this start user theme",userPrefer);

		const handleChange = () => {
			// logic for checking any user preference(configuration and setting)
			if (userPrefer) {
				// console.log("user prefer",userPrefer);
				let check = userPrefer === "dark" ? "dark" : "light";
				setMode(check);
				if (check === "dark") {
					document.documentElement.classList.add("dark");
				} else {
					document.documentElement.classList.remove("dark");
				}
			}
			// logic for checking else any OS preference(configuration and setting) or not 
			else {
				let check = mediaQuery.matches ? "dark" : "light";
				console.log("match at os", check);
				setMode(check);
				if (check === "dark") {
					document.documentElement.classList.add("dark");
				} else {
					document.documentElement.classList.remove("dark");
				}
			}
		}; 

		//on first load check all condition
		handleChange();

		//add event listener
		mediaQuery.addEventListener("change", handleChange);

		//remove eventlistener or during unmount phase react component
		return () => mediaQuery.removeEventListener("change", handleChange);
	}, []);

	// update the of value of local stroage 
	useEffect( ()=> {
		// early termination
		if ( mode === "") {
			return;
		}
		// console.log(" inter in mode changer : ", mode);
		if (mode === "dark" ) {
			window.localStorage.setItem("theme", "dark");
			document.documentElement.classList.add("dark");
		} else {
			window.localStorage.setItem("theme", "light");
			document.documentElement.classList.remove("dark");
		}
	}, [mode]);

	return [mode, setMode];
};

export default useThemeSwitcher;
