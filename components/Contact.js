import React, {useState} from "react";
import axios from "axios";
import { HandIcon } from "@heroicons/react/solid";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    //const alertSuccess = () => toast.success("I will get back to you soon. Thank you ! 🦄");
    //const alertFailure = () => toast.error("Something went wrong. Please try again later!");
    //const showLoadingMessage = () => toast.info("Submitting....", {autoClose: false});
    const handleSubmit = (e) => {
        setIsLoading(true);
        e.preventDefault();
        //showLoadingMessage();
        const infoData = {
            name,
            email,
            message
        }
        setName("");
        setEmail("");
        setMessage("");
        const url = "https://immense-fortress-49913.herokuapp.com/submitMessage"
        axios.post(url, infoData).then(res => {
            if (res.data.message) {
                //toast.dismiss();
                //alertSuccess();
            } else {
                //toast.dismiss();
                //alertFailure();
            }
            setIsLoading(false);
        })
    }
    const handleChange = (e, setFunc) => {
        setFunc(e.target.value);
    }
    return (
        <section id="contact" className="relative">
            <div className="container grid grid-cols-12 px-36 py-10 mx-auto my-10">
                <div className="col-start-1 col-span-6 lg:hidden bg-gray-900 rounded-lg overflow-hidden p-10 flex items-end justify-start relative">
                    <iframe
                        width="100%"
                        height="100%"
                        title="map"
                        className="absolute inset-0"
                        frameBorder={0}
                        marginHeight={0}
                        marginWidth={0}
                        style={{ filter: "opacity(0.8)" }}
                        src={`https://www.google.com/maps/embed/v1/place?q=dongmen+station+taipei&key=${process.env.MAP_KEY}`}
                    />
                    <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                LOCATION
                            </h2>
                            <p className="mt-1">
                                Taipei, <br />
                                Taiwan
                            </p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                EMAIL
                            </h2>
                            <a className="text-indigo-400 leading-relaxed">
                                andywan40@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="col-start-7 col-span-6 px-8 flex flex-col w-full mt-2 lg:col-start-1 lg:col-span-12">
                    <h2 className="text-black text-3xl mb-2 font-medium font-title">
                        Contact Me
                        <HandIcon className="w-1/12 h-1/12 inline-block mx-2 animate-wiggle"/>
                    </h2>
                    <p className="leading-relaxed mb-5 font-navbar">
                        How can I help?
                    </p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-400 font-navbar">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={e => handleChange(e, setName)}
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-400 font-navbar">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={e => handleChange(e, setEmail)}
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label
                            htmlFor="message"
                            className="leading-7 text-sm text-gray-400 font-navbar">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={message}
                            onChange={e => handleChange(e, setMessage)}
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg font-title tracking-widest"
                        className={isLoading? "cursor-not-allowed opacity-50 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg font-title tracking-widest" :"text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg font-title tracking-widest"}
                        disabled={isLoading ? true: false}
                    >
                        {isLoading? "...Submitting" : "Submit"}
                    </button>
                </form>
            </div>
        </section>
    );
}