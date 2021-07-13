import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { MenuIcon } from "@heroicons/react/solid";
import logo from "../public/logo_colored.png";


export default function Navbar() {
    const router = useRouter();
    const { pathname } = router;
    return (
        <header className="font-content bg-white sticky top-0 z-10">
            <div className="mx-auto p-2 flex justify-between items-center">
                <div className="title-font font-medium text-black mb-4 md:mb-0">
                    <Link href="/">
                        <Image
                            className="absolute inset-0 object-center cursor-pointer"
                            src={logo}
                            alt="logo"
                        />
                    </Link>                </div>
                <nav className="title-font flex justify-end items-center">
                    <Link href="/about">
                        <a className={pathname === "/about" ? "md:hidden mr-5 text-black uppercase active" : "md:hidden mr-5 text-black uppercase strike"}>
                            About
                        </a>
                    </Link>
                    <Link href="/projects">
                        <a className={pathname === "/projects" ? "md:hidden mr-5 text-black uppercase active" : "md:hidden mr-5 text-black uppercase strike"}>
                            Projects
                        </a>
                    </Link>
                    <Link href="/experiences">
                        <a className={pathname === "/experiences" ? "md:hidden mr-5 text-black uppercase active" : "md:hidden mr-5 text-black uppercase strike"}>
                            Experiences
                        </a>
                    </Link>
                    <Link href="/#contact">
                        <a className="md:hidden mr-5 text-black uppercase strike">
                            Contact
                        </a>
                    </Link>
                    <MenuIcon className="hidden md:block mr-5 text-black h-1/12 w-1/12 cursor-pointer" />
                </nav>
            </div>
        </header>
    );
}