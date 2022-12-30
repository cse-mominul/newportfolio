import React from 'react';
import { FaHeart,FaRegUser,FaRegFileCode } from 'react-icons/fa';
import { GiSkills } from "react-icons/gi"
import { SiBloglovin } from "react-icons/si"

const Navbar = () => {
    return (          
        <div>
            <ul className="menu glass z-10 p-2 rounded-box fixed top-1/2 left-5 -translate-x-1/2 text-fuchsia-600 ">
                <li>
                <a href='#home'>
                        <FaHeart/>
                    </a>
                </li>
            
                     <li>
                    <a href='#about'>
                        <FaRegUser/>
                    </a>
                </li>
                <li>
                    <a href='#projects'>
                        <FaRegFileCode/>
                    </a>
                </li>
                <li>
                    <a href='#skills'>
                        <GiSkills className='h-5 w-5 text-fuchsia-600'></GiSkills>
                    </a>
                </li>
                <li>
                    <a href='#blogs'>
                        <SiBloglovin className='h-5 w-5 text-fuchsia-600'></SiBloglovin>
                    </a>
                </li>
                <li>
                    <a href='#contact'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                        </svg>
                    </a>
                </li>
                

            </ul>

        </div>
    );
};

export default Navbar;