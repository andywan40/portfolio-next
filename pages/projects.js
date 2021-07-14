import Image from "next/image";
import Page from '../components/Page';
import {projects} from "../helpers/data.js";
export default function Projects() {
    return (
        <Page>
            <div className="container h-screen px-36 py-10 flex flex-col items-center justify-center">
            {projects.map( (project, i) => (
                <div className="flex justify-center items-center text-center rounded-lg my-6 group" key={project.title}>
                    <h1 className="text-4xl font-title text-black opacity-20 group-hover:opacity-100 mr-5 ">{i+1}.</h1>
                    <h1 className="text-4xl font-title text-black opacity-20 group-hover:opacity-100">{project.title}</h1>
                    <div className="hidden group-hover:block border border-lg border-black w-1/2 h-1/2">
                       <Image src={project.img} className="rounded-lg"/> 
                    </div>
                </div>
            ))}
            </div>
        </Page>
    )
}


{/* <div className="col-start-1 col-span-3 opacity-0 group-hover:opacity-100 text-center">
                        <h1 className="">{project.title}</h1>
                        <h1 className="">{project.technology}</h1>
                    </div>
                    <div className="col-start-4 col-span-6 w-full h-full rounded-lg group">
                        <Image src={project.img} className="rounded-lg group-hover:brightness-50"/> 
                    </div>
                    <div className="col-start-10 col-span-3 opacity-0 group-hover:opacity-100 text-center">
                        <h2>{project.description}</h2>
                    </div> */}