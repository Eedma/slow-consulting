import Image from "next/image";
import Link from "next/link";

export const Header = () => {
    const items = [
        {
            title: "cosa posso fare per te",
            link: "services",
        },
        {
            title: "per chi l'ho già fatto",
            link: "clients",
        },
        {
            title: "chi sono",
            link: "about",
        },
        {
            title: "contatti",
            link: "contacts",
        },
    ];

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
            <div className="flex gap-4 items-center">
                {items.map((el, indx) => (
                    <Link href={`/${el.link}`} key={indx}>
                        <div className="uppercase text-red-800">{el.title}</div>
                    </Link>
                ))}
            </div>
        </div>
    );
};
