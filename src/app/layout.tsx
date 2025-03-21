import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Narrador from "./Narrador";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export const metadata: Metadata = {
  title: "Click Inclusivo:",
  description: "Click Inclusivo: Tu Guía de Accesibilidad Digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body>
        <header className="bg-[#4B91BF] py-12 mb-4 lg:mb-12 text-white">
          <Link href="/">
          <h1
            className={`select-none text-xl lg:text-4xl font-semibold uppercase text-center ${poppins.className}`}
          >
            Click Inclusivo: <br /> Tu Guía de Accesibilidad Digital
          </h1>
          </Link>
        </header>
        {children}
        <Narrador />
      </body>
    </html>
  );
}
