import Image from "next/image";
import Link from "next/link";

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
                    &copy; {new Date().getFullYear()} Raffaele Ciardulli Slow
                    Consulting
                </h6>
                <Link href="./privacy-policy" className="underline">
                    <h6>privacy policy</h6>
                </Link>
            </div>
        </div>
    );
};
