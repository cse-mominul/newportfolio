import React from 'react';

const About = () => {
    return (
        <div id='about' className='mt-20'>
        <section className="">
            <div className="max-w-6xl px-6 py-10 mx-auto">

                <h1 className='text-4xl font-serif text-center bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-transparent'>About Me!</h1>

                <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
                    <div className="absolute w-full glass -z-10 md:h-96 rounded-2xl"></div>

                    <div className="w-full p-6 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                        <img className="h-32 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[32rem] lg:w-[26rem] md:rounded-2xl" src='' alt="" />

                        <div className="mt-2 md:mx-6">
                            <div>
                                <p className="text-xl font-medium tracking-tight  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-transparent">Mominul Islam</p>
                                <p className=" bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-transparent">Full Stack Developer</p>
                            </div>

                            <p className="mt-4 text-lg leading-relaxed  md:text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-transparent">Howdy! I'm Momin. I graduated from Dinajpur Polytechnic Institute in Computer Science and Technology. I'm passionate about Web development. Apart from coding, I like to play games, listen music,reading books.</p>

                            <div className="flex items-center justify-between mt-6 md:justify-start">
                                <button title="left arrow" className="p-2 text-fuchsia-600 transition-colors duration-300 border rounded-full rtl:-scale-x-100 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>

                                <button title="right arrow" className="p-2 text-fuchsia-600 transition-colors duration-300 border rounded-full rtl:-scale-x-100 md:mx-6 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </section>
    </div>
    );
};

export default About;