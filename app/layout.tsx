import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexalaya — Where Campus Connects",
  description:
    "Nexalaya is a proxy-proof smart attendance system built for modern colleges. Powered by facial recognition. Launching soon.",
  keywords: ["attendance system", "college management", "facial recognition", "proxy proof", "campus"],
  icons: {
    icon: [],
  },
  openGraph: {
    title: "Nexalaya — Where Campus Connects",
    description: "Smart, proxy-proof attendance for modern colleges. Launching soon.",
    url: "https://nexalaya.com",
    siteName: "Nexalaya",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
