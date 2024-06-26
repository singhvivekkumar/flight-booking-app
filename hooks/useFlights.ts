import { SEARCH_URL } from "@/utils/config";
import axios from "axios";
import { SearchResponse, SearchDetails } from "@/types/flight";
import { FlightContext } from "@/contexts/FlightContext";
import { useContext } from "react";
import { useAuth } from "./useAuth";

export const useFlights = () => {

  const { setFlights } = useContext(FlightContext);
  // const { getUserData } = useLocalStorage();

  // const userToken = JSON.parse(`${getCookie("token")}`);
  // const userToken = getUserData("user");
  const {authUser} = useAuth();
  const token = authUser?.token;
  // This is because these headers are typically managed by the browser itself or the server.
  // const contentLength = Buffer.byteLength(JSON.stringify(userToken));

  const searchFlights = async (creds: SearchDetails) => {
    return await axios
      .get(`${SEARCH_URL}/flights`,  {  
        params: creds,
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': token
        },
      })
      .then((res) => {
        console.log("res useFlight : ",res)
        if (res?.data?.data) {
          setFlights(res?.data?.data);
        };
        return res.data as SearchResponse;
      })
      .catch((err) => {
        if (err && err?.response && err.response?.data)
          return { ...err.response.data, success: false } as SearchResponse;
        else return err as SearchResponse;
      });
  };

   const getFlightById = async (flightId: number) => {
    return await axios
      .get(`${SEARCH_URL}/flights/${flightId}`,  {
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': token
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

 const getAirportById = async (creds: SearchDetails) => {
    return await axios
      .get(`${SEARCH_URL}/flights`,  {  
        params: creds,
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': token
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

   const getAirplaneById = async (creds: SearchDetails) => {
    return await axios
      .get(`${SEARCH_URL}/flights`,  {  
        params: creds,
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': token
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

  return { searchFlights, getAirplaneById, getAirportById, getFlightById};
};