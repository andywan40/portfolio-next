import React from "react";
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Landing() {
    return (
        <section id="about" className="h-screen">
            <div className="grid grid-cols-12 h-screen">
                <div className="col-start-3 col-end-8 md:col-start-5 md:col-end-9 flex justify-center items-center">
                    <h1 className="font-title font-extrabold leading-0.6 xxs:text-4xl xs:text-6xl lg:text-10xl text-14xl mb-4 text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-red-600 ">
                        Andrew <br></br> Wan
                    </h1>
                    {/* <div className="flex justify-center">
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
                    </div> */}
                </div>
                <div className="col-start-8 col-end-12 md:col-start-9 md:col-end-13">
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