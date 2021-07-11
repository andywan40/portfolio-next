import React from 'react';
import { BadgeCheckIcon } from "@heroicons/react/solid";
import Page from '../components/Page';

export default function About() {
  return (
    <Page>
        <div className="container xxs:px-1 xs:px-4 sm:px-8 md:px-20 px-36 py-10 text-gray-600 h-screen font-navbar xs:flex xs:flex-col xs:justify-center xs:items-center xs:text-center">
            <div className="flex items-center">
                <h1 className="xs:text-1xl sm:text-2xl md:text-3xl text-4xl text-gray-800 font-title inline-block">Andrew Wan</h1>
                <BadgeCheckIcon className="h-7 w-7 ml-2 text-blue-600 inline-block xxs:hidden"/>
            </div>
            <h5 className="mt-8 mb-12 text-1xl xs:w-10/12">I currently am working as a Software Engineer at <span className="text-pink-400">Asgard System, Inc.</span><h5/>
            <p className="mb-12 text-md xs:w-10/12">I am passionate about creating products that help improve the lives of many people.</p>
            <p className="mb-12 text-md xs:w-10/12">Outside of work, I enjoy playing <span className="text-pink-400">basketball </span>, working out and travelling. <br></br> <span className="text-pink-400">Tokyo</span> is by far my favorite city, and I hope
            to visit it again once the pandemic ends.</p> 
            <p className="mb-12 text-md xs:w-10/12">I am also working on a few side projects including  
                <a href="https://react-foodpicker-app.herokuapp.com/" className="text-pink-400" target="_blank" rel="noopener noreferrer" > FoodPicker </a>
                (a web app to generate random meals and provide recipes for people).
            </p>
            </h5>
        </div>
    </Page>
  )
}
