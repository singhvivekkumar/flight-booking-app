import { SEARCH_URL } from "@/utils/config";
import axios from "axios";
import { SearchResponse, SearchDetails } from "@/types/flight";
import { FlightContext } from "@/contexts/FlightContext";
import { useContext } from "react";

export const useFlights = () => {

  const { setFlights } = useContext(FlightContext);

  const searchFlight = async (creds: SearchDetails) => {
    return await axios
      .get(`${SEARCH_URL}/flights`, { params: creds})
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

  return { searchFlight };
};