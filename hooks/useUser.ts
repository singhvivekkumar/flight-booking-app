import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { AuthUser } from "@/types/auth";
import useCookie from "./useCookie";

export const useUser = () => {
  const { user, setUser } = useContext(AuthContext);
  const { setCookie, removeCookie } = useCookie();

  const addUser = (user: AuthUser) => {    
    setUser(user);
    setCookie("token", JSON.stringify(user.token));
  };

  const removeUser = () => {
    setUser(null);
    removeCookie("user");
  };

  return { user, addUser, removeUser };
};