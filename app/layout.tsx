import type { Metadata } from "next";
import { Titan_One, Martian_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const titanOne = Titan_One({
  variable: "--font-titan-one",
  subsets: ["latin"],
  weight: "400",
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PlayForge",
  description: "Dev Event Meet You Mustn't Miss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${titanOne.variable} ${martianMono.variable} min-h-screen antialiased bg-background`}
      >
        <Navbar />
        <div className="fixed top-0 left-0 w-full h-full min-h-screen bg-background z-[-1]">
          <div
            className="absolute h-full w-full z-0 min-h-screen"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99, 102, 241, 0.25), transparent 70%)",
            }}
          />
        </div>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
