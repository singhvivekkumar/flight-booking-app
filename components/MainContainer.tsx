"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as z from "zod";
import { useSearchParams } from "next/navigation";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { useAuth } from "@/hooks/useAuth";
import { SearchDetails } from "@/types/flight";
import { useFlights } from "@/hooks/useFlights";

const MainContainer: React.FC = () => {
	const { searchFlight } = useFlights();
	const searchParams = useSearchParams();

	const initialValues: SearchDetails = {
		departureAirport: "Jayprakash",
    arrivalAirport: "Indira",
    // departureTime: new Date(),
	};

	const validationSchema = z.object({
		departureAirport: z.string(),
		arrivalAirport: z.string(),
    // departureTime: z.string().datetime(),
	});

	const handleSubmit = async (values: SearchDetails) => {
		try {
			const response = await searchFlight(values);
			console.log("api data ", values, response.data);
			if (response.success) {
				searchParams.getAll("search");
			}
		} catch (error) {
			console.log("problem in api", error);
		}
	};

	return (
		<section className=" flex flex-col h-full w-full">
			{/* form */}
			<Formik
				initialValues={initialValues}
				validationSchema={toFormikValidationSchema(validationSchema)}
				onSubmit={handleSubmit}>
				{(props) => {
					// console.log("sign up page",props);
					return (
						<Form
							className=" flex bg-white rounded-2xl p-5 px-7 w-full "
							onSubmit={props.handleSubmit}>
							<div className=" flex flex-col justify-start items-baseline space-x-1 mb-5 ">
								<label htmlFor="departureAirport" className=" text-lg my-2">From</label>
								<Field
									name="departureAirport"
									placeholder="From where"
									className=" bg-slate-200/70 hover:bg-slate-300/60 w-full rounded-md  focus:outline-none p-2 md:px-2 "
								/>
								<ErrorMessage
									name="departureAirport"
									component="p"
									className=" text-sm italic text-red-600  "
								/>
							</div>

							<div className=" flex flex-col justify-start items-baseline space-x-1 mb-5 ">
								<label htmlFor="arrivalAirport" className=" text-lg my-2">To</label>
								<Field
									name="arrivalAirport"
									placeholder="Where to"
									className=" bg-slate-200/70 hover:bg-slate-300/60 w-full rounded-md  focus:outline-none p-2 md:px-2 "
								/>
								<ErrorMessage
									name="arrivalAirport"
									component="p"
									className=" text-sm italic text-red-600  "
								/>
							</div>

							<div className=" flex flex-col justify-start items-baseline space-x-1 mb-5">
								<label htmlFor="departureTime" className=" text-lg my-2">Departure</label>
								<Field
									name="departureTime"
                  type="date"
									placeholder="Departure Date"
									className="bg-slate-200/70 hover:bg-slate-300/60 w-full rounded-md  focus:outline-none p-2 md:px-2 "
								/>
								<ErrorMessage
									name="departureTime"
									component="p"
									className=" text-sm italic text-red-600  "
								/>
							</div>

              <div className=" flex flex-col justify-start items-baseline space-x-1 mb-5">
								<label htmlFor="traveller" className=" text-lg my-2">Traveller</label>
								<Field
									name="traveller"
                  type="optoin"
									placeholder="Traveller "
									className="bg-slate-200/70 hover:bg-slate-300/60 w-full rounded-md  focus:outline-none p-2 md:px-2 "
								/>
								<ErrorMessage
									name="traveller"
									component="p"
									className=" text-sm italic text-red-600  "
								/>
							</div>

							<button
								type="submit"
								className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline">
								Search
							</button>
						</Form>
					);
				}}
			</Formik>
		</section>
	);
};

export default MainContainer;
