import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "../components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: "Raffaele Ciardulli",
    description: "Slow Consulting Coach",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <div className="flex flex-col justify-between min-h-screen">
                    <Navbar />
                    <div className="flex-1 lg:max-w-[980px] lg:mx-auto my-10 content-center px-4">
                        {children}
                    </div>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
