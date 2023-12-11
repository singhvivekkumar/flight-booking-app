"use client";

import React, { SyntheticEvent, useContext } from "react";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { FlightContext } from "@/contexts/FlightContext";
import FormatDate from "@/components/FormatDate";
import { useRouter } from "next/navigation";
import { Flight } from "@/types/flight";

const FlightTable = () => {

	const router = useRouter();
	const { flights } = useContext(FlightContext);

	const handleDetailFlight = (flight: Flight) => {
		try {


			router.push(`${flight.id}`)
		} catch (error) {
			
		}
	}

	return (
		<Table className="">
			<TableCaption>A list of your recent invoices.</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead className="w-[100px]">Flight Number</TableHead>
					<TableHead>Departure Time</TableHead>
					<TableHead>Arrival Time</TableHead>
					<TableHead className="text-right">Amount</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{flights?.map((flight) => {
					const departureTime = flight.departureTime?.toLocaleString();
					const arrivalTime = flight.arrivalTime?.toLocaleString();
					return (
						<TableRow key={flight.flightNumber} onClick={()=>handleDetailFlight(flight)}>
							<TableCell className="font-medium">
								{flight.flightNumber}
							</TableCell>
							<TableCell>
								<FormatDate dateString={departureTime}/>
							</TableCell>
							<TableCell>
								<FormatDate dateString={arrivalTime}/>
							</TableCell>
							<TableCell className="text-right">
								{flight.price}.00
							</TableCell>
						</TableRow>
					);
				})}
			</TableBody>
		</Table>
	);
};

export default FlightTable;
