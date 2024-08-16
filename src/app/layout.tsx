import { ToastContainer } from "react-toastify";
import "./globals.css";
import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
	metadataBase: new URL("https://ttezo.in/"),
	title: "Portfolio - Tejodeep Mitra Roy",
	description: "A Official Portfolio Website of Tejodeep Mitra Roy",
	alternates: {
		canonical: "https://ttezo.in/",
		languages: {
			"en-US": "https://ttezo.in/en-US",
			"de-DE": "https://ttezo.in/de-DE",
		},
		// types: {
		//   "application/rss+xml": "https://nextjs.org/rss",
		// },
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<GoogleTagManager gtmId={process.env.GOOGLE_TAG_MANAGER!} />
			<body>
				<ToastContainer
					position="top-center"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="light"
					/>
					{children}
			</body>
		</html>
	);
}
