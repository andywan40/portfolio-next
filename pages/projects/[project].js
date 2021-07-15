import { useRouter } from "next/router";
import Image from "next/image";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import Page from "../../components/Page";
import { projects } from "../../helpers/data";

export default function Project(props) {
  const router = useRouter();
  const projectTitle = router.query.project;
  let projectObj = {};
  for (let project of projects) {
    if (project.title.toLowerCase() === projectTitle) {
      projectObj = project;
    }
  }

  return (
    <Page>
      <div className="container mt-5 xxs:px-1 xs:px-4 sm:px-8 lg:px-20 px-30 py-10 flex flex-col">
        <div className="grid grid-cols-12 mb-20">
          <div className="flex flex-col col-start-1 col-span-4 justify-center items-center p-5">
            <h1 className="text-black text-3xl font-title">
              {projectObj.title}
            </h1>
            <h6 className="text-gray-700 text-sm font-title">
              {projectObj.subtitle}
            </h6>
          </div>
          <div className="w-full h-full col-start-5 col-span-6">
            <Image
              src={projectObj.img}
              alt={projectObj.title}
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
        <div className="grid grid-cols-12 mb-20">
          <div className="w-full h-full col-start-2 col-span-6">
            <Image
              src={projectObj.img1}
              alt={projectObj.title}
              className="w-full h-full rounded-lg "
            />
          </div>
          <div className="flex flex-col col-start-8 col-span-5 justify-start items-start text-left pt-5 p-20">
            <div className="my-5">
              <h2 className="font-bold uppercase text-black mb-1">Year</h2>
              <h2>{projectObj.year}</h2>
            </div>
            <div className="my-5">
              <h2 className="font-bold uppercase text-black mb-1">Stack</h2>
              <ul className="ml-3">
                {projectObj.technology.map(tech => (
                  <li className="list-disc">{tech}</li>
                ))}
              </ul>
            </div>
            <div className="my-5 w-1/2">
              <h2 className="font-bold uppercase text-black mb-1">Mission</h2>
              <h2>{projectObj.description}</h2>
            </div>
            <a
              href={projectObj.link}
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
  return {
    props: {
      title: context.params.project,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: ["/projects/foodpicker", "/projects/wannabuy"],
    fallback: true,
  };
}
