export type Booking = {
	token: string;
	name: string;
};

export type FlightsList = {
	data: Array<Flight>;
}

export type Flight = {
	flightNumber: string;
	airplaneId: number;
	departureAirportId: number; 
	arrivalAirportId: number;
	arrivalTime: Date;
	departureTime: Date;
	price: number;
	boardingGate: number | null;
	totalSeats: number;
	updatedAt: Date;
}

export type Search = {
	token: string;
};