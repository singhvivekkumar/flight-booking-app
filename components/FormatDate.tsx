import { format, parseISO } from "date-fns";

export default function FormatDate({ dateString }: any) {
	const date = parseISO(dateString);
	return (
		<>
			<time>{format(date, " p")}</time> 
			<br/>
			<time>{format(date, " PP")}</time>
		</>
	);
}
