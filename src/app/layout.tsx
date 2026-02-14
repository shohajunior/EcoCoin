import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google"; // Import modern fonts
import "./globals.css";

// Body font - Clean & Readable
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Heading font - Tech & Modern
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EcoCoin | Turn Eco Actions into Real Rewards",
  description: "The official digital platform for the EcoCoin. Earn rewards for sustainable actions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="antialiased min-h-screen flex flex-col bg-slate-50">
        {children}
      </body>
    </html>
  );
}
