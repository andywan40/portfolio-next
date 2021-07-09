import Head from 'next/head';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Andrew Wan | Full Stack Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Cantarell&display=swap" rel="stylesheet" />
      </Head>
      <main className="text-gray-400 bg-white body-font">
        <Navbar />
        <About />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}
