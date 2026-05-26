import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexalaya — Attendance in 10 Seconds. Zero Proxies. Full Control.",
  description:
    "nexalaya is an IoT-powered, proxy-proof attendance system built for Indian colleges. Facial recognition. NAAC Criteria 2, 5, 6, 7 ready. Launching soon.",
  keywords: [
    "automated attendance system",
    "NAAC compliance",
    "college attendance app",
    "IoT attendance",
    "facial recognition attendance",
    "proxy proof attendance India",
    "campus management system",
  ],
  icons: {
    icon: [],
  },
  openGraph: {
    title: "Nexalaya — Attendance in 10 Seconds. Zero Proxies. Full Control.",
    description:
      "IoT-powered, proxy-proof attendance built for Indian colleges. NAAC Criteria 2, 5, 6, 7 ready.",
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
