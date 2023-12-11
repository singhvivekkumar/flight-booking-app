export type Booking = {
	id: number;
	flightId?: number;
	userId?: number;
	status?: "InProcess" | "Booked" | "Cancelled";
	numberOfSeats?: number;
	totalCost?: number;
};

export type Flight = {
	id?: number;
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

export type Airplane = {
	id: number;
	modelNumner?: string;
	totalSeats?: number;
};

export type Airport = {
	id: number;
	name?: string;
	addres?: string;
	cityId?: number;
};

export type City = {
	id: number;
	name?: string;
	state?: string;
	country?: string;
}
