// import { ArrowRightIcon } from "@heroicons/react/solid";
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
                <nav className="title-font md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center">
                    <a href="#projects" className="mr-5 text-black hover:line-through uppercase">
                        About
                    </a>
                    <a href="#skills" className="mr-5 text-black hover:line-through uppercase">
                        Projects
                    </a>
                    <a href="#experiences" className="mr-5 text-black hover:line-through uppercase">
                        Experiences
                    </a>
                    <a href="#contact" className="mr-5 text-black hover:line-through uppercase">
                        Contact
                    </a>
                </nav>
                {/* <popup/>  appear when medium*/}
                {/* <a
                    href="#contact"
                    className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                    Hire Me
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                </a> */}
            </div>
        </header>
    );
}