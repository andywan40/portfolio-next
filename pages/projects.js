import Image from "next/image";
import Page from '../components/Page';
import {projects} from "../helpers/data.js";
export default function Projects() {
    return (
        <Page>
            <div className="container px-36 py-10 flex flex-col items-center justify-center">
            {projects.map( project => (
                <div className="grid grid-cols-12 text-center rounded-lg my-6 group" key={project.title}>
                    <div className="col-start-1 col-span-3 opacity-0 group-hover:opacity-100 text-center">
                        <h1 className="">{project.title}</h1>
                        <h1 className="">{project.technology}</h1>
                    </div>
                    <div className="col-start-4 col-span-6 w-full h-full rounded-lg group">
                        <Image src={project.image} className="rounded-lg group-hover:brightness-50"/> 
                    </div>
                    <div className="col-start-10 col-span-3 opacity-0 group-hover:opacity-100 text-center">
                        <h2>{project.description}</h2>
                    </div>
                </div>
            ))}
            </div>
        </Page>
    )
}



// {
//         title: "Food Picker",
//         subtitle: "Can't Decide What To Eat?",
//         description:
//             "Designed and built for people who have trouble deciding what to eat. Showcases images and provides recipes of different dishes with the help of the Unsplash and Edamam API",
//         image: "./foodpicker.jpg",
//         link: "https://react-foodpicker-app.herokuapp.com",
//         year: "2021"
//     },
//     {
//         title: "WannaBuy",
//         subtitle: "Can't Find What To Buy?",
//         description:
//             "Designed for online shoppers to better keep track of interested items",
//         image: "./wannabuy.png",
//         link: "https://powerful-journey-37111.herokuapp.com",
//         year: "2019"
//     }