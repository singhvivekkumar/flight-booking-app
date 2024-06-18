import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { AuthUser } from "@/types/auth";
import useLocalStorage from './useLocalStorage';

export const useUser = () => {
  const { authUser, setAuthUser } = useContext(AuthContext);
  const { setUserData, removeUserData } = useLocalStorage();


  const addUser = (authUser: AuthUser) => {    
    setAuthUser(authUser);
    console.log("use user",authUser);
    setUserData("user", JSON.stringify(authUser));
  };

  const removeUser = () => {
    setAuthUser(null);
    removeUserData("user");
  };

  return { authUser, addUser, removeUser };
};