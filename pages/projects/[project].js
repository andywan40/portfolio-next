import { useRouter } from "next/router";
import Image from "next/image";
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
              src={projectObj.img}
              alt={projectObj.title}
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="flex flex-col col-start-8 col-span-5 justify-start items-center text-center pt-5 p-16">
            <div className="my-3">
              <h2 className="font-bold uppercase">Year</h2>
              <h2>{projectObj.year}</h2>
            </div>
            <div className="my-3">
              <h2 className="font-bold uppercase">Stack</h2>
              <h2>{projectObj.technology}</h2>
            </div>
            <div className="my-3">
              <h2 className="font-bold uppercase">Mission</h2>
              <h2>{projectObj.description}</h2>
            </div>
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
