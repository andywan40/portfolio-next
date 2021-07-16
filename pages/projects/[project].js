import { useRouter } from "next/router";
import Image from "next/image";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import Page from "../../components/Page";
import { projects } from "../../helpers/data";

export default function Project({ project }) {
  //const router = useRouter();
  //const projectTitle = router.query.project;
  //let projectObj = {};
  // for (let project of projects) {
  //   if (project.title.toLowerCase() === projectTitle) {
  //     projectObj = project;
  //   }
  // }

  return (
    <Page>
      <div className="container mt-5 xxs:px-1 xs:px-4 sm:px-8 lg:px-20 px-30 py-10 flex flex-col">
        <div className="grid grid-cols-12 mb-20">
          <div className="flex flex-col col-start-1 col-span-4 justify-center items-center p-5">
            <h1 className="text-black text-3xl font-title">{project.title}</h1>
            <h6 className="text-gray-700 text-sm font-title">
              {project.subtitle}
            </h6>
          </div>
          <div className="w-full h-full col-start-5 col-span-6">
            <Image
              src={project.img}
              alt={project.title}
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
        <div className="grid grid-cols-12 mb-20">
          <div className="w-full h-full col-start-2 col-span-6">
            <Image
              src={project.img1}
              alt={project.title}
              className="w-full h-full rounded-lg "
            />
          </div>
          <div className="flex flex-col col-start-8 col-span-5 justify-start items-start text-left pt-5 p-20">
            <div className="my-5">
              <h2 className="font-bold uppercase text-black mb-1">Year</h2>
              <h2>{project.year}</h2>
            </div>
            <div className="my-5">
              <h2 className="font-bold uppercase text-black mb-1">Stack</h2>
              <ul className="ml-3">
                {project?.technology.map(tech => (
                  <li className="list-disc" key={tech}>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div className="my-5 w-1/2">
              <h2 className="font-bold uppercase text-black mb-1">Mission</h2>
              <h2>{project.description}</h2>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-content uppercase text-white bg-black py-3 px-5 mt-5 rounded-sm"
            >
              Visit Site
              <ArrowNarrowRightIcon className="w-5 h-5 ml-5 inline-block"></ArrowNarrowRightIcon>
            </a>
          </div>
        </div>
      </div>
    </Page>
  );
}

export async function getStaticProps(context) {
  let projectObj = {};
  for (let project of projects) {
    if (project.title.toLowerCase() === context.params.project) {
      projectObj = project;
      break;
    }
  }
  return {
    props: {
      project: projectObj,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: ["/projects/foodpicker", "/projects/wannabuy"],
    fallback: true,
  };
}
