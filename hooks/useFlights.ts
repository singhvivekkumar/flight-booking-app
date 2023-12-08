import { useUser } from "./useUser";
import { SEARCH_URL } from "@/utils/config";
import axios from "axios";
import useCookie from "./useCookie";
import { SearchResponse, SearchDetails } from "@/types/flight";

export const useFlights = () => {
  const { user, addUser } = useUser();

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

  const searchFlight = async (creds: SearchDetails) => {
    return await axios
      .get(`${SEARCH_URL}/flights`, { params: creds})
      .then((res) => {
        if (res.data?.data && res.data.data?.token) {
          addUser(res.data.data);
        };
        return res.data as SearchResponse;
      })
      .catch((err) => {
        if (err && err?.response && err.response?.data)
          return { ...err.response.data, success: false } as SearchResponse;
        else return err as SearchResponse;
      });
  };

  return { searchFlight, refresh };
};