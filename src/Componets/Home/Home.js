import React from 'react';
import { HiOutlineCloudDownload } from "react-icons/hi"
import Navbar from '../Navbar/Navbar';
import videobg from '../../Assets/Particles - 92266_2.mp4'
import './Home.css'
import fontpic from '../../Assets/fontpic.png'
import About from '../About/About';
import Skills from '../Skills/Skills';
import Fotter from '../../Fotter/Fotter';
const Home = () => {
    return (
        <div id='home'>
            <video  src={videobg} autoPlay loop muted className='bg-vid w-full'></video>
            <Navbar></Navbar>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-evenly">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="font-serif text-lg leading-none bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-transparent">
                            Hello There!
                        </h1>
                        <h1 className="font-serif leading-none text-5xl mt-4 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-transparent">
                            I'm <br>
                            </br>
                            Mominul Islam
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-transparent">Full Stack Web Developer
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <a href="https://drive.google.com/file/d/1LnXXjcNpvTiSenRWfe4cOfA8rnTZW5iv/view?usp=sharing" target="_blank" rel="noreferrer" className="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
                                <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                                <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                                    <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                                    <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                                </span>
                                <span className="relative flex items-center text-white">Resume <HiOutlineCloudDownload className='ml-2' /></span>
                            </a>
                            <a href="#contact" className="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
                                <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                                <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                                    <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                                    <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                                </span>
                                <span className="relative flex items-center text-white">Contact Me</span>
                            </a>
                        </div>

                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={fontpic} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
            <About></About>
            <Skills></Skills>
            <Fotter></Fotter>
        </div>
    );
};

export default Home;