import Landing from "../components/Landing";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Page from "../components/Page";

export default function Home() {
  return (
    <Page>
      <Landing />
      <Projects />
      <Skills />
      <Contact />
    </Page>
  );
}
