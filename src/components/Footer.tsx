import Image from "next/image";

export const Footer = () => {
    return (
        <div className="flex flex-col items-center ">
            <Image
                src={"/logo.png"}
                height={200}
                width={200}
                alt="slow consulting"
            />
            <div>
                {new Date().getFullYear()} Raffaele Ciardulli Slow Consulting
            </div>
        </div>
    );
};
