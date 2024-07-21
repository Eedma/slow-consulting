import Image from "next/image";

export const Footer = () => {
    return (
        <div className="flex flex-col items-center ">
            <Image
                src={"/logo.png"}
                height={200}
                width={130}
                alt="slow consulting"
            />
            <div className="flex-1 md:max-w-[960px] md:mx-auto content-center px-4 md:mb-[2rem] text-center">
                <h6>
                    Questo sito rispetta la tua privacy e non utilizza cookie
                    per il tracciamento o la memorizzazione delle tue
                    informazioni personali. Naviga con tranquillità, sapendo che
                    i tuoi dati sono al sicuro.
                </h6>
                <h6>
                    &copy; {new Date().getFullYear()} Raffaele Ciardulli Slow
                    Consulting
                </h6>
            </div>
        </div>
    );
};
