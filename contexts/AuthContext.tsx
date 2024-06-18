"use client";

import { ReactNode, createContext, useEffect, useState } from "react";
import { AuthUser } from "@/types/auth";
import { useAuth } from "@/hooks/useAuth";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useRouter } from "next/navigation";

interface TAuthContext {
	authUser: AuthUser | null;
	setAuthUser: (user: AuthUser | null) => void;
}

export const AuthContext = createContext<TAuthContext>({
	authUser: null,
	setAuthUser: () => {},
});

interface Props {
	children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
	const [authUser, setAuthUser] = useState<AuthUser | null>(null);
	const { getUserData } = useLocalStorage();
	const router = useRouter();

	useEffect(() => {
		if (!authUser) {
			let existingUser = null;
			const getFromLocalStorage = () => {
				existingUser = getUserData("user");
			};

			getFromLocalStorage();
			console.log("refresh : ", existingUser);

			if (existingUser) {
				try {
					setAuthUser(JSON.parse(existingUser));
					console.log("auth set : ", authUser);
					router.push("/dashboard");
				} catch (e) {
					console.log(e);
				}
			} else {
				router.replace("/sign-in");
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<AuthContext.Provider value={{ authUser, setAuthUser }}>
			{children}
		</AuthContext.Provider>
	);
};
