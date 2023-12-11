import { useUser } from "./useUser";
import { BOOKING_URL } from "@/utils/config";
import axios from "axios";
import { AuthResponse, Login, Register } from "@/types/auth";
import useCookie from "./useCookie";
import { Flight } from "@/types/flight";

export const useAuth = () => {
  const { user, addUser } = useUser();


  const booking = async () => {
    return await axios
      .post(`${BOOKING_URL}/signup`, )
      .then((res) => {
        if (res.data?.data && res.data.data?.token) {
          addUser(res.data.data);
        };
        return res.data as AuthResponse;
      })
      .catch((err) => {
        if (err && err?.response && err.response?.data)
          return { ...err.response.data, success: false } as AuthResponse;
        else return err as AuthResponse;
      });
  };

  return { booking };
};