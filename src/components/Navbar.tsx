"use client";
import {useEffect, useState} from "react";
import {
    CloseButton,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";

const navigation = [
    {
        name: "cosa posso fare per te",
        href: "services",
        current: true,
        color: "#620F1B",
    },
    {
        name: "per chi l'ho già fatto",
        href: "clients",
        current: false,
        color: "#996752",
    },
    {name: "chi sono", href: "about", current: false, color: "#CAC2A1"},
    {name: "contatti", href: "contacts", current: false, color: "#39455A"},
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
    const [path, setPath] = useState("");
    const pathname = usePathname();

    useEffect(() => {
        setPath(pathname);
    }, [pathname]);

    return (
        <Disclosure as="nav" className="transparent">
            {({open}) => (
                <>
                    <div className="md:max-w-[960px] md:mx-auto mx-auto px-4">
                        <div className="relative flex items-center justify-between">
                            <div className="h-[12vh] w-[25vw] md:h-[22vh] md:w-[15vw] relative">
                                <Link href={"/"}>
                                    <Image
                                        src="/logo.png"
                                        alt="profile"
                                        objectFit="contain"
                                        fill
                                    />
                                </Link>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-red-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <XMarkIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <Bars3Icon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </DisclosureButton>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={`/${item.href}`}
                                                className={classNames(
                                                    pathname.includes(item.href)
                                                        ? `font-bold`
                                                        : "font-medium text-light-red",
                                                    "uppercase"
                                                )}
                                                style={
                                                    pathname.includes(item.href)
                                                        ? {color: item.color}
                                                        : {}
                                                }
                                                aria-current={
                                                    item.href === path
                                                        ? "page"
                                                        : undefined
                                                }
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* mobile items */}
                    <DisclosurePanel className="sm:hidden absolute w-full h-auto bg-background-color z-[200]">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <CloseButton
                                    as={Link}
                                    key={item.name}
                                    href={`/${item.href}`}
                                    className={classNames(
                                        pathname.includes(item.href)
                                            ? "font-bold text-dark-red"
                                            : "font-medium text-light-red",
                                        "block rounded-md px-3 py-2 text-base uppercase"
                                    )}
                                    aria-current={
                                        pathname.includes(item.href)
                                            ? "page"
                                            : undefined
                                    }
                                >
                                    {item.name}
                                </CloseButton>
                            ))}
                        </div>
                    </DisclosurePanel>
                </>
            )}
        </Disclosure>
    );
}
