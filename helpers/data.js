import mountFuji from "../public/mountFuji.jpg";
import tokyoTower from "../public/tokyoTower.jpg";
import harajuku from "../public/harajuku.jpg";
import shibuya from "../public/shibuya.jpg";
import foodpicker from "../public/foodpicker.jpg";
import foodpicker1 from "../public/foodpicker1.png";
import foodpicker2 from "../public/foodpicker2.png";
import wannabuy from "../public/wannabuy.png";
import wannabuy1 from "../public/wannabuy1.png";
import wannabuy2 from "../public/wannabuy2.png";
import passwordvault from "../public/passwordvault.png";
import passwordvault1 from "../public/passwordvault1.png";
import passwordvault2 from "../public/passwordvault2.png";

export const projects = [
  {
    title: "Password Vault",
    subtitle: "Can't Remember Your Passwords?",
    description:
      "Designed and implemented for people who have trouble remembering their passwords. Password Vault offers the safest way for individuals to store personal and sensitive data.",
    technology: ["Next.js", "Tailwind CSS", "Material UI", "Django", "SQLite"],
    image: "./passwordvault.png",
    img: passwordvault,
    img1: passwordvault1,
    img2: passwordvault2,
    link: "https://passwordvaultnext.vercel.app/",
    year: "2021",
    id: 0,
  },
  {
    title: "FoodPicker",
    subtitle: "Can't Decide What To Eat?",
    description:
      "Designed and built for people who have trouble deciding what to eat. Randomly generates a cuisine and a dish. Showcases images and provides recipes of different dishes with the help of the Unsplash and Edamam API.",
    technology: ["React", "Material UI", "Node.js", "Express.js"],
    image: "./foodpicker.jpg",
    img: foodpicker,
    img1: foodpicker1,
    img2: foodpicker2,
    link: "https://react-foodpicker-app.herokuapp.com/",
    year: "2021",
    id: 1,
  },
  {
    title: "WannaBuy",
    subtitle: "Can't Find What To Buy?",
    description:
      "Designed for online shoppers to better keep track of interested items. Tired of having a million tabs open and struggling to find what to buy? Wannabuy is the website for you.",
    technology: [
      "HTML",
      "CSS",
      "Javascript",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    image: "./wannabuy.png",
    img: wannabuy,
    img1: wannabuy1,
    img2: wannabuy2,
    link: "https://powerful-journey-37111.herokuapp.com/",
    year: "2020",
    id: 2,
  },
];

export const skills = [
  "JavaScript/TypeScript",
  "Java",
  "Python",
  "React/Redux",
  "SpringBoot",
  "Vue/Vuex",
  "Node.js",
  "Express.js",
  "jQuery",
  "SQL",
  "MongoDB",
  "Material UI",
];

export const images = [
  {
    src: mountFuji,
    title: "Mount Fuji",
    author: "aditya anjagi",
  },
  {
    src: tokyoTower,
    title: "Tokyo Tower",
    author: "Jezael Melgoza",
  },
  {
    src: harajuku,
    title: "Harajuku",
    author: "Elton Sa",
  },
  {
    src: shibuya,
    title: "Shibuya",
    author: "Jezael Melgoza",
  },
];

export const particlesParams = {
  particles: {
    number: { value: 30, density: { enable: false, value_area: 300 } },
    color: { value: "#c84040" },
    shape: {
      type: "image",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "flower.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.7,
      random: true,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 7,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: true, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
};

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
