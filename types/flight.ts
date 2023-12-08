export type Booking = {
	token: string;
	name: string;
};

export type Flight = {
	flightNumber: string;
	airplaneId?: number;
	departureAirportId?: number; 
	arrivalAirportId?: number;
	arrivalTime?: Date;
	departureTime?: Date;
	price?: number;
	boardingGate?: number | null;
	totalSeats?: number;
	updatedAt?: Date;
}

export type SearchResponse = {
	data: Array<Flight>;
	message?: string;
	success?: boolean;
}

export type SearchDetails = {
	departureAirport: string;
	arrivalAirport: string;
	departureTime?: Date;
	minPrice?: number;
	maxPrice?: number;
};
