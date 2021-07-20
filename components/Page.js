import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Menu from "./Menu";
import Footer from "./Footer";
// import { useAppContext } from "../context/AppContext";
import { useAppContext } from "../pages/_app";

export default function Page({ children }) {
  const state = useAppContext();
  const { showMenu } = state;
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Andrew Wan, Full Stack Developer Portfolio Website"
        ></meta>
        <link rel="icon" href="/logo_colored.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Cantarell&family=Cinzel&family=Rakkas&display=swap"
          rel="stylesheet"
        />
        <title>Andrew Wan | Full Stack Developer</title>
      </Head>
      <main className="text-gray-400 bg-white body-font">
        <Navbar />
        {showMenu ? <Menu /> : children}
      </main>
      {!showMenu && <Footer />}
    </>
  );
}
