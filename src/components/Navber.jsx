import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll'; // import react-scroll Link

const Navber = () => {
    const [activeLink, setActiveLink] = useState('');

    const links = (
        <>
          <li>
            <ScrollLink
              to="home" 
              smooth={true}
              duration={500}
              className={`uppercase ${activeLink === 'home' ? 'text-blue-600' : ''}`}
              onClick={() => setActiveLink('home')}
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="aboutme" 
              smooth={true}
              duration={500}
              className={`uppercase ${activeLink === 'aboutme' ? 'text-blue-600' : ''}`}
              onClick={() => setActiveLink('aboutme')}
            >
              About me
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="skills" 
              smooth={true}
              duration={500}
              className={`uppercase ${activeLink === 'skills' ? 'text-blue-600' : ''}`}
              onClick={() => setActiveLink('skills')}
            >
              Skills
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="projects" 
              smooth={true}
              duration={500}
              className={`uppercase ${activeLink === 'projects' ? 'text-blue-600' : ''}`}
              onClick={() => setActiveLink('projects')}
            >
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact" 
              smooth={true}
              duration={500}
              className={`uppercase ${activeLink === 'contact' ? 'text-blue-600' : ''}`}
              onClick={() => setActiveLink('contact')}
            >
              Contact
            </ScrollLink>
          </li>
        </>
    );
    
    return (
        <div className="navbar bg-gray-400 fixed z-30 mb-10 w-11/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a
                    href="#"
                    className="text-xl font-bold text-blue-600 hover:text-purple-500 transition-all duration-300">
                    Tarkuzzaman
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold px-6 py-2 rounded-lg shadow-lg hover:opacity-90 transition-all duration-300">Hire Me</a>
            </div>
        </div>
    );
};

export default Navber;
