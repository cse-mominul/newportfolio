import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <div id='skills'>
        <h1 className='text-4xl font-serif bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-transparent text-center'>My Skills</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 skill gap-10 max-w-4xl' >
            <div className='md:px-28'>
                <li><h3 className='bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-transparent font-bold'>Html 90%</h3>
                    <span className="bar"><span className='html'></span></span>
                </li>
                <li><h3 className='bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-transparent font-bold'>CSS 85%</h3>
                    <span className="bar"><span className='css'></span></span>
                </li>
                <li><h3 className='bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-transparent font-bold'>React.JS 80%</h3>
                    <span className="bar"><span className='react'></span></span>
                </li>
                <li><h3 className='bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-transparent font-bold'>JavaScript 70%</h3>
                    <span className="bar"><span className='js'></span></span>
                </li>
            </div>
            <div className='md:px-10'>
                <li><h3 className='bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-transparent font-bold'>Node.JS 60%</h3>
                    <span className="bar"><span className='node'></span></span>
                </li>
                <li><h3 className='bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-transparent font-bold'>Express.JS 50%</h3>
                    <span className="bar"><span className='express'></span></span>
                </li>
                <li><h3 className='bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-transparent font-bold'>MongoDB 80%</h3>
                    <span className="bar"><span className='mongo'></span></span>
                </li>
            </div>
        </div>

    </div>
    );
};

export default Skills;