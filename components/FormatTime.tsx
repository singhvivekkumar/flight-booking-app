import { format, parseISO } from "date-fns";

export default function FormatTime({dateString}: any) {
	const date = parseISO(dateString);
	return <time>{format(date, " H m ")}</time>;
}
