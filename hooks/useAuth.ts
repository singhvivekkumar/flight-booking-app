import { useUser } from "./useUser";
import { AUTH_URL } from "@/utils/config";
import axios from "axios";
import { AuthResponse, TLogin, TRegister } from "@/types/auth";
import useCookie from "./useCookie";

export const useAuth = () => {
  const { user, addUser, removeUser } = useUser();

  const { getCookie } = useCookie();

  const refresh = () => {
    let existingUser = null;
    const getFromCookie = async () => (existingUser = getCookie("user"));
    getFromCookie();

    if (existingUser) {
      try {
        addUser(JSON.parse(existingUser));
      } catch (e) {
        console.log(e);
      }
    }
  };

  const register = async (creds: TRegister) => {
    return await axios
      .post(`${AUTH_URL}/signup`, creds)
      .then((res) => {
        if (res.data?.data && res.data.data?.token) addUser(res.data.data);
        return res.data as AuthResponse;
      })
      .catch((err) => {
        if (err && err?.response && err.response?.data)
          return { ...err.response.data, success: false } as AuthResponse;
        else return err as AuthResponse;
      });
  };

  const login = async (creds: TLogin) => {
    return await axios
      .post(`${AUTH_URL}/signin`, creds)
      .then((res) => {
        if (res.data?.data && res.data.data?.token) addUser(res.data.data);
        return res.data as AuthResponse;
      })
      .catch((err) => {
        if (err && err?.response && err.response?.data)
          return { ...err.response.data, success: false } as AuthResponse;
        else return err as AuthResponse;
      });
  };

  const logout = () => {
    removeUser();
  };

  return { user, login, register, logout, refresh };
};