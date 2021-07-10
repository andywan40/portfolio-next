import React from "react";

export default function About() {
    return (
        <section id="about" className="h-screen">
            <div className="grid grid-cols-12">
                <div className="col-start-3 col-end-9">
                    <h1 className="font-title font-extrabold sm:text-9xl text-9xl mb-4 text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-red-600">
                        Andrew Wan
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Hello, I'm a fullstack developer. Welcome to my portfolio!
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Work With Me
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            See My Past Work
                        </a>
                    </div>
                </div>
                <div className="col-start8 col-end-10">
                    {/* <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="./coding.svg"
                    /> */}
                </div>
            </div>
        </section>
    );
}