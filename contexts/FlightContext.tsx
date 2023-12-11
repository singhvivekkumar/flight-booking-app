"use client";

import { ReactNode, createContext, useState } from "react";
import { Airplane, Airport, Flight } from "@/types/flight";

interface FSearchContext {
	flights: Array<Flight> | null;
	setFlights: (flight: Array<Flight> | null) => void;
	airplane: Airplane | null;
	setAirplane: (airplane: Airplane) => void;
	airport: Airport | null;
	setAirport: (airport: Airport) => void;
}

export const FlightContext = createContext<FSearchContext>({
	flights: null,
	setFlights: () => {},
	airplane: null,
	setAirplane: () => {},
	airport: null,
	setAirport: () => {},
});

interface Props {
	children: ReactNode;
}

export const FlightProvider = ({ children }: Props) => {
	const [flights, setFlights] = useState<Array<Flight> | null>(null);
	const [airplane, setAirplane] = useState<Airplane | null>(null);
	const [airport, setAirport] = useState<Airport | null>(null);

	return (
		<FlightContext.Provider value={{ flights, setFlights, airplane, setAirplane, airport, setAirport }}>
			{children}
		</FlightContext.Provider>
	);
};
