import { MenuIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
    return (
        <header className="font-navbar bg-white md:sticky top-0 z-10">
            <div className="mx-auto p-5 flex justify-between">
                <a className="title-font font-medium text-black mb-4 md:mb-0">
                    <a href="#" className="ml-3 text-xl">
                        <img 
                            className="absolute inset-0 object-center"
                            src="./logo_colored.png"
                            alt="logo"
                        />
                    </a>
                </a>
                <nav className="title-font flex justify-end">
                    <a href="#" className="md:hidden mr-5 text-black hover:line-through uppercase">
                        About
                    </a>
                    <a href="#projects" className="md:hidden mr-5 text-black hover:line-through uppercase">
                        Projects
                    </a>
                    <a href="#experiences" className="md:hidden mr-5 text-black hover:line-through uppercase">
                        Experiences
                    </a>
                    <a href="#contact" className="md:hidden mr-5 text-black hover:line-through uppercase">
                        Contact
                    </a>
                    <MenuIcon className="hidden md:block mr-5 text-black h-1/12 w-1/12 cursor-pointer"/>
                </nav>
                
            </div>
        </header>
    );
}