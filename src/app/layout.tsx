import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/component/layout/header/header";
import { Footer } from "@/component/layout/footer/footer";
import { Main } from "@/component/layout/main/main";
import { ToastContainer } from "react-toastify";
import { SpeedInsights } from "@vercel/speed-insights/next";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap", // Recommended for performance
});

const montserrat = Montserrat({
  subsets: ["latin"], // Specify the character subsets you need
  variable: "--font-montserrat", // Optional: Define a CSS variable for Tailwind CSS or custom CSS
  display: "swap", // Recommended for better performance
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Dan-Tech Investments Limited ",
    template: "%s | Dan-Tech Investments Limited",
  },
  description:
    "Discover great opportunities to grow your income and expand your investment portfolio with Dan-Tech Investments Limited.",
  icons: {
    icon: "/favicon.ico",
    apple: "/di-fav-icon.png",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" id="app-body">
      <body
        style={{ minWidth: "320px" }}
        className={` ${geistMono.variable} ${geistSans.variable} ${montserrat.variable} ${roboto.variable}`}
      >
        <SpeedInsights />
        <Header />
        <Main>{children}</Main>
        <ToastContainer position="top-right" autoClose={3000} />
        <Footer />
      </body>
    </html>
  );
}
