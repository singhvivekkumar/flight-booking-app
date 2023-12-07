import { AuthProvider } from "@/contexts/AuthContext";
import { CookiesProvider } from "next-client-cookies/server";

export function Providers({ children }: React.PropsWithChildren) {
	return (
		<CookiesProvider>
			<AuthProvider>{children}</AuthProvider>
		</CookiesProvider>
	);
}
