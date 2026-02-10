import type { Metadata } from "next";
import { Michroma, JetBrains_Mono, Rajdhani } from "next/font/google";
import "./globals.css";
import "./node-dots.css";

const michroma = Michroma({
  weight: "400",
  variable: "--font-michroma",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["300", "400", "500"],
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const rajdhani = Rajdhani({
  weight: ["300", "400", "500", "600"],
  variable: "--font-rajdhani",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eclipse Logic | Digital Erasure",
  description: "In a world that never forgets, we help you stay in the shadows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${michroma.variable} ${jetbrainsMono.variable} ${rajdhani.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
