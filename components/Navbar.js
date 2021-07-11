import React from "react";
import Link from 'next/link';
import { MenuIcon } from "@heroicons/react/solid";
import { useRouter } from 'next/router';

export default function Navbar() {
    const router = useRouter();
    const {pathname} = router;
    return (
        <header className="font-navbar bg-white sticky top-0 z-10">
            <div className="mx-auto p-5 flex justify-between">
                <div className="title-font font-medium text-black mb-4 md:mb-0">
                    <Link href="/">
                        <a className="ml-3 text-xl">
                            <img 
                                className="absolute inset-0 object-center"
                                src="./logo_colored.png"
                                alt="logo"
                            />
                        </a>
                    </Link>
                </div>
                <nav className="title-font flex justify-end">
                    <Link href="/about">
                        <a className={ pathname === "/about" ? "md:hidden mr-5 text-black uppercase active" : "md:hidden mr-5 text-black uppercase strike"}>
                            About
                        </a>
                    </Link>
                    <Link href="/projects">
                        <a className={ pathname === "/projects" ? "md:hidden mr-5 text-black uppercase active" : "md:hidden mr-5 text-black uppercase strike"}>
                            Projects
                        </a>
                    </Link>
                    <Link href="/experiences">
                        <a className={ pathname === "/experiences" ? "md:hidden mr-5 text-black uppercase active" : "md:hidden mr-5 text-black uppercase strike"}>
                            Experiences
                        </a>
                    </Link>
                    <Link href="/#contact">
                        <a className="md:hidden mr-5 text-black uppercase strike">
                            Contact
                        </a>
                    </Link>
                    <MenuIcon className="hidden md:block mr-5 text-black h-1/12 w-1/12 cursor-pointer"/>
                </nav>
            </div>
        </header>
    );
}