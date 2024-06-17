import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { AuthUser } from "@/types/auth";
import useLocalStorage from './useLocalStorage';

export const useUser = () => {
  const { user, setUser } = useContext(AuthContext);
  const { setUserData, removeUserData } = useLocalStorage();


  const addUser = (user: AuthUser) => {    
    setUser(user);
    setUserData("user", JSON.stringify(user));
  };

  const removeUser = () => {
    setUser(null);
    removeUserData("user");
  };

  return { user, addUser, removeUser };
};