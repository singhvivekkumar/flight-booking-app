import { Flight } from "@/types/flight";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import React from "react";
import * as z from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";

const FlightData = () => {

	const router = useRouter();


	const initialValues: Flight = {
		flightNumber: "",
		airplaneId: 0,
		departureAirportId: 1,
		arrivalAirportId: 2,
		arrivalTime: new Date(),
		departureTime: new Date(),
		price: 2500,
		boardingGate: 1,
		totalSeats: 0,
	};

	const validationSchema = z.object({
		id: z.number(),
		flightNumber: z.string(),
		password: z
			.string()
			.min(8, "Password is too short - should be 8 chars minimum.")
			.regex(/[a-zA-Z]/, "Password can only contain Latin letters."),
	});

	const handleSubmit = async (values ) => {
		try {
			const response = await (values);
			console.log("api data ", values, response.data);
			if (response.success) {
				router.push("/admin");
			}
		} catch (error) {
			console.log("problem in api", error);
		}
	};
	return (
		<div>
			<Formik
				initialValues={initialValues}
				validationSchema={toFormikValidationSchema(validationSchema)}
				onSubmit={handleSubmit}>
				{(props) => {
					// console.log("sign up page",props);
					return (
						<Form
							className=" bg-white rounded-2xl p-5 px-7 w-full "
							onSubmit={props.handleSubmit}>
							<div className=" flex flex-col justify-start items-baseline space-x-1 mb-5 ">
								<label
									htmlFor="email"
									className=" text-lg my-2">
									Enter Email
								</label>
								<Field
									name="email"
									type="email"
									placeholder="Email"
									className=" bg-slate-200/70 hover:bg-slate-300/60 w-full rounded-md  focus:outline-none p-2 md:px-2 "
								/>
								<ErrorMessage
									name="email"
									component="p"
									className=" text-sm italic text-red-600  "
								/>
							</div>

							<div className=" flex flex-col justify-start items-baseline space-x-1 mb-5 ">
								<label htmlFor="name" className=" text-lg my-2">
									Enter Name
								</label>
								<Field
									name="name"
									type="name"
									placeholder="Name"
									className=" bg-slate-200/70 hover:bg-slate-300/60 w-full rounded-md  focus:outline-none p-2 md:px-2 "
								/>
								<ErrorMessage
									name="name"
									component="p"
									className=" text-sm italic text-red-600  "
								/>
							</div>

							<div className=" flex flex-col justify-start items-baseline space-x-1 mb-5">
								<label
									htmlFor="password"
									className=" text-lg my-2">
									Password
								</label>
								<Field
									name="password"
									type="password"
									placeholder="Enter password "
									className="bg-slate-200/70 hover:bg-slate-300/60 w-full rounded-md  focus:outline-none p-2 md:px-2 "
								/>
								<ErrorMessage
									name="password"
									component="p"
									className=" text-sm italic text-red-600  "
								/>
							</div>

							<button
								type="submit"
								className="border w-full border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline">
								Sign In
							</button>
						</Form>
					);
				}}
			</Formik>
		</div>
	);
};

export default FlightData;
