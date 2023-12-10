import { SEARCH_URL } from "@/utils/config";
import axios from "axios";
import { SearchResponse, SearchDetails } from "@/types/flight";
import { FlightContext } from "@/contexts/FlightContext";
import { useContext } from "react";
import useCookie from "./useCookie";

export const useFlights = () => {

  const { setFlights } = useContext(FlightContext);
  const { getCookie } = useCookie();

  const userToken = JSON.parse(`${getCookie("token")}`);
  // This is because these headers are typically managed by the browser itself or the server.
  // const contentLength = Buffer.byteLength(JSON.stringify(userToken));

  const searchFlight = async (creds: SearchDetails) => {
    return await axios
      .get(`${SEARCH_URL}/flights`,  {  
        params: creds,
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': userToken
        },
      })
      .then((res) => {
        if (res.data?.data) {
          setFlights(res.data.data);
        };
        return res.data as SearchResponse;
      })
      .catch((err) => {
        if (err && err?.response && err.response?.data)
          return { ...err.response.data, success: false } as SearchResponse;
        else return err as SearchResponse;
      });
  };

  const parseDate = (date: Date) => {
		return (date).toLocaleTimeString();
	}

  return { searchFlight, parseDate };
};