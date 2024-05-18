"use client";
import { useEffect, useState } from "react";
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navigation = [
    { name: "cosa posso fare per te", href: "services", current: true },
    { name: "per chi l'ho già fatto", href: "clients", current: false },
    { name: "chi sono", href: "about", current: false },
    { name: "contatti", href: "contacts", current: false },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
    const [path, setPath] = useState("");
    const pathname = usePathname();
    console.log(pathname);

    useEffect(() => {
        setPath(pathname);
    }, [pathname]);

    return (
        <Disclosure as="nav" className="transparent">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between">
                            <Link href={"/"}>
                                <Image
                                    src={"/logo.png"}
                                    alt="slow consulting"
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                    }}
                                    width={100}
                                    height={100}
                                />
                            </Link>
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
                                                        ? "font-bold"
                                                        : "font-medium",
                                                    "uppercase text-red-800"
                                                )}
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
                    <DisclosurePanel className="sm:hidden absolute w-full h-auto bg-[#fffcf3] z-[200]">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        pathname.includes(item.href)
                                            ? "bg-red-800 text-white"
                                            : "text-red-800",
                                        "block rounded-md px-3 py-2 text-base font-medium"
                                    )}
                                    aria-current={
                                        pathname.includes(item.href)
                                            ? "page"
                                            : undefined
                                    }
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </DisclosurePanel>
                </>
            )}
        </Disclosure>
    );
}
