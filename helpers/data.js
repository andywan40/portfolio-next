import mountFuji from "../public/mountFuji.jpg";
import tokyoTower from "../public/tokyoTower.jpg";
import harajuku from "../public/harajuku.jpg";
import shibuya from "../public/shibuya.jpg";
import foodpicker from "../public/foodpicker.jpg";
import wannabuy from "../public/wannabuy.png";


export const projects = [
    {
        title: "FoodPicker",
        subtitle: "Can't Decide What To Eat?",
        description: "Designed and built for people who have trouble deciding what to eat. Showcases images and provides recipes of different dishes with the help of the Unsplash and Edamam API",
        technology: ["React, Material UI, Node.js, Express.js"],
        image: "./foodpicker.jpg",
        img: foodpicker,
        link: "https://react-foodpicker-app.herokuapp.com",
        year: "2021",
        id:0
    },
    {
        title: "WannaBuy",
        subtitle: "Can't Find What To Buy?",
        description: "Designed for online shoppers to better keep track of interested items",
        technology: ["HTML", "CSS", "Javascript", "Node.js", "Express.js", "MongoDB"],
        image: "./wannabuy.png",
        img: wannabuy,
        link: "https://powerful-journey-37111.herokuapp.com",
        year: "2020",
        id:1
    }
];

export const skills = [
    "JavaScript",
    "React/Redux",
    "Vue/Vuex",
    "Node.js",
    "Express.js",
    "jQuery",
    "Python",
    "SQL",
    "MongoDB",
    "Material UI"
];


export const images = [
    {
        src: mountFuji,
        title: "Mount Fuji",
        author: "aditya anjagi"
    },
    {
        src: tokyoTower,
        title: "Tokyo Tower",
        author: "Jezael Melgoza"
    },
    {
        src: harajuku,
        title: "Harajuku",
        author: "Elton Sa"
    },
    {
        src: shibuya,
        title: "Shibuya",
        author: "Jezael Melgoza"
    }
]




//Photo by <a href="https://unsplash.com/@agilelo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">aditya anjagi</a> on <a href="https://unsplash.com/s/photos/mount-fuji?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
//Photo by <a href="https://unsplash.com/@jezael?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jezael Melgoza</a> on <a href="https://unsplash.com/s/photos/tokyo-tower?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
//Photo by <a href="https://unsplash.com/@bigeruta?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Elton Sa</a> on <a href="https://unsplash.com/s/photos/harajuku?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
//Photo by <a href="https://unsplash.com/@jezael?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jezael Melgoza</a> on <a href="https://unsplash.com/s/photos/shibuya?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
  



// export const resumeSections = [
//   {
//     title: "EDUCATION",
//     image:
//       "https://images.unsplash.com/photo-1509869175650-a1d97972541a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//     desc: [
//       { text: "University of California, San Diego", important: true },
//       { text: "Graduated June 2019", important: true },
//       { text: "B.S. Nanoengineering , 3.62 GPA", important: true },
//     ],
//   },
//   {
//     title: "EXPERIENCE",
//     image:
//       "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//     desc: [
//       {
//         text: "Software Engineer at Asgard System, Inc.",
//         important: true,
//         children: "Taipei,Taiwan / Oct, 2020 - Current",
//       },
//       {
//         text: "Learned Vue.js within a month and designed and implemented various front-end components.",
//         important: false,
//       },
//       {
//         text: "Contributed to an in-house UI library by creating reusable UI components that increased development efficiency by 30%",
//         important: false,
//       },
//       {
//         text: "Served as a bridge between frontend, ui/ux designers and backend developers",
//         important: false,
//       },
//       {
//         text: "Led the frontend aspect of a project for a client with over 200 users spanning multiple applications",
//         important: false,
//       },
//        {
//         text: "Added new API endpoints to improve UI experience and overall app functionality",
//         important: false,
//       },
//       {
//         text: "Software Engineer Intern at Asgard System, Inc.",
//         important: true,
//         children: "Taipei,Taiwan / Oct, 2020 - Current",
//       },
//       {
//         text: "Designed and implemented a feature-rich user interface using React and Redux to handle and display data",
//         important: false,
//       },
//       {
//         text: "Developed reusable functions and integrated them with existing Javascript libraries to streamline the frontend development process and decrease development time by over 40%",
//         important: false,
//       },
//     ],
//   },
//   {
//]




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