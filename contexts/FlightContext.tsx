"use client";

import { ReactNode, createContext, useState } from "react";
import { Flight } from "@/types/flight";

interface FSearchContext {
  flights: Array<Flight> | null;
  setFlights: (flight: Array<Flight> | null) => void;
}

export const FlightContext = createContext<FSearchContext>({
  flights: null,
  setFlights: () => {},
});

interface Props {
  children: ReactNode;
}

export const FlightProvider = ({ children }: Props) => {
  const [flights, setFlights] = useState<Array<Flight> | null>(null);

  return (
    <FlightContext.Provider value={{ flights, setFlights }}>
      {children}
    </FlightContext.Provider>
  );
};