import React from 'react';

const Navber = () => {
    const links = (
        <>
          <li><a className="uppercase">Home</a></li>
          <li><a className="uppercase">About me</a></li>
          <li><a className="uppercase">Skills</a></li>
          <li><a className="uppercase">Projects</a></li>
          <li><a className="uppercase">Contact</a></li>
        </>
      );
      
    return (
        <div className="navbar bg-base-100 w-11/12 mx-auto">
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
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end">
          <a className="btn bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold px-6 py-2 rounded-lg shadow-lg hover:opacity-90 transition-all duration-300">Hire Me</a>
            </div>
        </div>
    );
};

export default Navber;