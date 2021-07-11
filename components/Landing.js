import React from "react";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

export default function Landing() {
    return (
        <section id="about" className="h-screen">
            <div className="grid grid-cols-12 h-screen">
                <div className="col-start-1 col-span-1 flex flex-col justify-end items-end pb-36">
                    <a className="my-1" href="https://www.linkedin.com/in/and-wan" target="_blank" rel="noopener noreferrer"><LinkedInIcon/></a>
                    <a className="my-1" href="https://github.com/andywan40" target="_blank" rel="noopener noreferrer"><GitHubIcon/></a>
                    <a className="my-1" href="https://www.instagram.com/and__wan" target="_blank" rel="noopener noreferrer"><InstagramIcon/></a>
                </div>
                <div className="col-start-3 col-end-8 md:col-start-5 md:col-end-9 flex justify-center items-center">
                    <h1 className="font-title font-extrabold leading-0.6 xxs:text-4xl xs:text-6xl lg:text-10xl text-14xl mb-4 text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-red-600 ">
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