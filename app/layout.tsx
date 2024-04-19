import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {Footer} from "@/app/component/Footer";
import {Header} from "@/app/component/Header";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <Header/>
    {children}
    <Footer/>
    </body>
    </html>
  );
}
