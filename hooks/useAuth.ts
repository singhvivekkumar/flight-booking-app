import { useUser } from "./useUser";
import { AUTH_URL } from "@/utils/config";
import axios from "axios";
import { AuthResponse, Login, Register } from "@/types/auth";
import { redirect, useRouter } from "next/navigation";
import useLocalStorage from "./useLocalStorage";

export const useAuth = () => {
	const { authUser, addUser, removeUser } = useUser();
	const router = useRouter();
	const { getUserData } = useLocalStorage();

	const refresh = () => {
		let existingUser = null;
		const getFromLocalStorage = () => {
			existingUser = getUserData("user");
		};

		getFromLocalStorage();
		console.log("refresh : ", existingUser);

		if (existingUser) {
			try {
				addUser(JSON.parse(existingUser));
				console.log("auth set : ", authUser);
				router.push("/dashboard");
			} catch (e) {
				console.log(e);
			}
		} else {
      router.replace("/sign-in");
    }
	};

	const register = async (creds: Register) => {
		return await axios
			.post(`${AUTH_URL}/signup`, creds)
			.then((res) => {
				if (res.data?.data && res.data.data?.token) {
					addUser(res.data.data);
				}
				return res.data as AuthResponse;
			})
			.catch((err) => {
				if (err && err?.response && err.response?.data)
					return {
						...err.response.data,
						success: false,
					} as AuthResponse;
				else return err as AuthResponse;
			});
	};

	const login = async (creds: Login) => {
		return await axios
			.post(`${AUTH_URL}/signin`, creds)
			.then((res) => {
				if (res.data?.data && res.data.data?.token) {
					addUser(res.data.data);
				}
				return res.data as AuthResponse;
			})
			.catch((err) => {
				if (err && err?.response && err.response?.data)
					return {
						...err.response.data,
						success: false,
					} as AuthResponse;
				else return err as AuthResponse;
			});
	};

	const logout = () => {
		removeUser();
		refresh();
	};

	return { authUser, login, register, logout, refresh };
};
