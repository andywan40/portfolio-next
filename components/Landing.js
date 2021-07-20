import React from "react";
import Particles from "react-particles-js";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import { particlesParams } from "../helpers/data.js";

export default function Landing() {
  return (
    <section id="about" className="h-screen">
      <Particles className="particles-container" params={particlesParams} />
      <div className="grid grid-cols-12 h-screen">
        <div className="col-start-1 col-span-1 md:col-start-1 md:col-span-2 flex flex-col justify-end items-end sm:justify-start z-10 sm:pt-20 xs:pt-32 md:pb-36 pb-48">
          <a
            className="my-1 hover:text-pink-600 transition duration-3000 ease-in-out"
            href="https://www.linkedin.com/in/and-wan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            className="my-1 hover:text-pink-600 transition duration-3000 ease-in-out"
            href="https://github.com/andywan40"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>
          <a
            className="my-1 hover:text-pink-600 transition duration-3000 ease-in-out"
            href="https://www.instagram.com/and__wan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </a>
        </div>
        <div className="col-start-4 col-end-8 md:col-start-5 md:col-end-9 flex justify-center items-center">
          <h1 className="font-title font-extrabold leading-0.6 xxs:text-5xl xs:text-6xl lg:text-10xl text-12xl mb-4 text-transparent bg-clip-text bg-gradient-to-b from-yellow-500 via-red-500 via-red-600 to-pink-500 ">
            Andrew <br></br> Wan
          </h1>
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
