import type {Metadata} from "next";
import "./globals.css";
import {Footer} from "../components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: "Raffaele Ciardulli",
    description: "In base a cosa sceglieresti un coach ICf con credenziali PCC o un formatore ? Forse in base alla sua maniera di approcciare la vita & il lavoro ? Forse in base esperienze che ha fatto ? Nel sito Slow Consulting troverai tutte le informazioni che ti servono su Raffaele Ciardulli. Se poi nella tua scelta centra anche la chimica puoi sempre incontrarlo o chiamarlo al telefono "
    /* description: "Slow Consulting Coach", */
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                {/* <IubendaProvider bannerConfig={iubendaBannerConfig}> */}
                <div className="flex flex-col justify-between min-h-screen">
                    <Navbar />
                    <div className="flex-1 md:max-w-[960px] md:mx-auto content-center px-4 md:mt-[2rem]">
                        {children}
                    </div>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
