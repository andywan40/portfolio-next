// import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
    return (
        <header className="font-title bg-white md:sticky top-0 z-10">
            <div className="container mx-auto p-5 flex justify-between">
                <a className="title-font font-medium text-black mb-4 md:mb-0">
                    <a href="#about" className="ml-3 text-xl">
                        Reed Barger
                    </a>
                </a>
                <nav className="title-font md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center">
                    <a href="#projects" className="mr-5 hover:text-white hover:line-through">
                        About
                    </a>
                    <a href="#skills" className="mr-5 hover:text-white hover:line-through">
                        Projects
                    </a>
                    <a href="#experiences" className="mr-5 hover:text-white hover:line-through">
                        Experiences
                    </a>
                    <a href="#contact" className="mr-5 hover:text-white hover:line-through">
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