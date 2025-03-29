import Link from "next/link";

export const PagesLinks = () => {
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
        <div className="flex gap-4 items-center">
            {items.map((el, indx) => (
                <Link href={`/${el.link}`} key={indx}>
                    <div className="uppercase text-red-800 font-medium">
                        {el.title}
                    </div>
                </Link>
            ))}
        </div>
    )
} 