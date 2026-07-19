import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const display = localFont({
	src: "../../node_modules/@fontsource-variable/newsreader/files/newsreader-latin-opsz-normal.woff2",
	variable: "--font-display",
	weight: "200 800",
	display: "swap",
});

const body = localFont({
	src: "../../node_modules/@fontsource-variable/ibm-plex-sans/files/ibm-plex-sans-latin-wght-normal.woff2",
	variable: "--font-body",
	weight: "100 700",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Manga Panel Gallery",
	description: "A quiet exhibition surface for a personal collection of manga panels.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${display.variable} ${body.variable}`}>
			<body>{children}</body>
		</html>
	);
}
