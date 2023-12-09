"use client";

import { ReactNode, createContext, useState } from "react";
import { SearchResponse } from "@/types/flight";

interface FSearchContext {
  flights: SearchResponse | null;
  setFlights: (flight: SearchResponse | null) => void;
}

export const FlightContext = createContext<FSearchContext>({
  flights: null,
  setFlights: () => {},
});

interface Props {
  children: ReactNode;
}

export const FlightProvider = ({ children }: Props) => {
  const [flights, setFlights] = useState<SearchResponse | null>(null);

  return (
    <FlightContext.Provider value={{ flights, setFlights }}>
      {children}
    </FlightContext.Provider>
  );
};