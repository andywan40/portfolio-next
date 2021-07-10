import React from "react";
import { CollectionIcon } from "@heroicons/react/solid";
import { projects } from "../helpers/data";

export default function Projects() {
    return (
        <section id="projects" className="text-gray-400 bg-white body-font">
            <div className="font-title px-5 py-10 mx-auto text-center lg:px-20">
                <div className="flex flex-col w-full mb-20">
                    <CollectionIcon className="mx-auto inline-block w-10 mb-4 " />
                    <h1 className="font-project tracking-wide sm:text-4xl text-3xl font-semibold mb-4 text-black">
                        Projects
                    </h1>
                </div>
                <div className="-m-4">
                    {projects.map( (project,i) => (
                        <div className="grid grid-cols-12 my-24" key={project.title}>
                            <div className={i%2 === 0 ? "hidden": "col-start-2 col-span-2 text-center"}>
                                
                            </div>
                            <a
                                href={project.link}
                                key={project.title}
                                className={i%2 === 0 ? "col-start-2 col-span-7 h-96" : "col-start-4 col-span-7 h-96"} >
                                <div className="flex relative group w-full h-full">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover object-center border rounded-lg shadow-2xl transition ease-in-out duration-500 group-hover:brightness-40 group-hover:opacity:30"
                                        src={project.image}
                                        alt={project.title}
                                    />
                                    <div className="px-8 py-10 relative w-full border-8 h-full rounded-lg border-pink-500 opacity-0 group-hover:opacity-100 transition ease-in-out duration-500 flex flex-col justify-center items-center">
                                        <h1 className="text-4xl text-white text-center font-project font-extrabold">
                                            {project.title}
                                        </h1>
                                        <h6 className="leading-relaxed text-xs text-white">{project.year}</h6>
                                    </div>
                                </div>
                            </a>
                            <div className={i%2 === 0 ? "col-span-3 text-center": "hidden"}>
                            </div>
                        </div>
                        // <a
                        //     href={project.link}
                        //     key={project.title}
                        //     className="sm:w-1/2 w-100 p-4">
                        //     <div className="flex relative">
                        //         <img
                        //             className="absolute inset-0 w-full h-full object-cover object-center"
                        //             src={project.image}
                        //             alt={project.title}
                        //         />
                        //         <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-white opacity-0 hover:opacity-100">
                        //             <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                        //                 {project.subtitle}
                        //             </h2>
                        //             <h1 className="title-font text-lg font-medium text-black mb-3">
                        //                 {project.title}
                        //             </h1>
                        //             <p className="leading-relaxed">{project.description}</p>
                        //         </div>
                        //     </div>
                        // </a>
                    ))}
                </div>
            </div>
        </section>
    );
}