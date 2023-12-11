import { BOOKING_URL } from "@/utils/config";
import axios from "axios";
import { AuthResponse } from "@/types/auth";
import { Booking } from "@/types/flight";
import { useContext } from "react";
import { FlightContext } from "@/contexts/FlightContext";

export const useBooking = () => {
	const { setBooking } = useContext(FlightContext);

	const bookingTicket = async (data: Booking) => {
		return await axios
			.post(`${BOOKING_URL}/bookings`, data)
			.then((res) => {
				if (res.data?.data) {
					setBooking(res.data.data);
				}
				return res.data as AuthResponse;
			})
			.catch((err) => {
				if (err && err?.response && err.response?.data)
					return {
						...err.response.data,
						success: false,
					} as AuthResponse;
				else return err as AuthResponse;
			});
	};

	const getBookedTicket = async (data: Booking) => {
		return await axios
			.get(`${BOOKING_URL}/bookings`, { data })
			.then((res) => {
				if (res.data?.data) {
					setBooking(res.data.data);
				}
				return res.data as AuthResponse;
			})
			.catch((err) => {
				if (err && err?.response && err.response?.data)
					return {
						...err.response.data,
						success: false,
					} as AuthResponse;
				else return err as AuthResponse;
			});
	};

	return { bookingTicket, getBookedTicket };
};
