import { AuthProvider } from "@/contexts/AuthContext";
import { CookiesProvider } from "next-client-cookies/server";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

function ThemeProvider({ children, ...props }: ThemeProviderProps) {
	return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export function Providers({ children }: React.PropsWithChildren) {
	return (
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
			<CookiesProvider>
				<AuthProvider>{children}</AuthProvider>
			</CookiesProvider>
		</ThemeProvider>
	);
}
