import Image from "next/image";
import Link from "next/link";
import { PagesLinks } from "./PagesLinks";

export const Header = () => {

    return (
        <div className="flex justify-between mx-10">
            <div>
                <Link href={"/"}>
                    <Image
                        src={"/logo.png"}
                        height={200}
                        width={200}
                        alt="slow consulting"
                    />
                </Link>
            </div>
            <PagesLinks />
        </div>
    );
};
