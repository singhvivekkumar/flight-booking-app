"use client";

import React, { ReactNode, useContext, useState } from "react";
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
import { format, parseISO } from "date-fns";
import FormatDate from "@/components/FormatDate";

const FlightTable = () => {
	const { flights } = useContext(FlightContext);

	// Request a weekday along with a long date
	const options = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	};

	return (
		<Table className=" w-3/5">
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
						<TableRow key={flight.flightNumber}>
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
