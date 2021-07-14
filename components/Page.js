import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from "./Footer";

export default function Page({children}) {
    return (
        <>
            <Head>
                <title>Andrew Wan | Full Stack Developer</title>
                <link rel="icon" href="/logo_colored.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Cantarell&family=Cinzel&family=Rakkas&display=swap" rel="stylesheet"/>
            </Head>
            <main className="text-gray-400 bg-white body-font">
                <Navbar/>
                {children}
            </main>
            <Footer />
        </>
    )
}
