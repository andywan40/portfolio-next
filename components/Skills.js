import React from "react";
import { BadgeCheckIcon, DatabaseIcon } from "@heroicons/react/solid";
import { skills } from "../helpers/data";

export default function Skills() {
    return (
        <section id="skills">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <DatabaseIcon className="w-10 inline-block mb-4" />
                    <h1 className="font-title sm:text-4xl text-3xl font-semibold text-black mb-3">
                        Skills &amp; Technologies
                    </h1>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {skills.map( skill => (
                        <div key={skill} className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-100 border border-blue-400 rounded flex p-4 h-full items-center">
                                <BadgeCheckIcon className="text-blue-400 w-6 h-6 flex-shrink-0 mr-4" />
                                <span className="font-list font-black text-gray-900">
                                    {skill}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}