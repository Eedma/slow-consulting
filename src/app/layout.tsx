import type {Metadata} from "next";
import "./globals.css";
import {Footer} from "../components/Footer";
import Navbar from "@/components/Navbar";
import {Analytics} from "@vercel/analytics/react";
import {
    IubendaProvider,
    IubendaCookieSolutionBannerConfigInterface,
} from "@mep-agency/next-iubenda";

export const metadata: Metadata = {
    title: "Raffaele Ciardulli",
    description: "Slow Consulting Coach",
};

const iubendaBannerConfig: IubendaCookieSolutionBannerConfigInterface = {
    siteId: 3687205,
    cookiePolicyId: 20687957,
    lang: "it",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <IubendaProvider bannerConfig={iubendaBannerConfig}>
                    <div className="flex flex-col justify-between min-h-screen">
                        <Navbar />
                        <div className="flex-1 md:max-w-[960px] md:mx-auto content-center px-4 md:mt-[2rem]">
                            {children}
                        </div>
                        <Footer />
                        <Analytics />
                    </div>
                </IubendaProvider>
            </body>
        </html>
    );
}
