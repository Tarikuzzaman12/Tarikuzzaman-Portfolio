import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'; // Importing social icons
import image from "../assets/Zaman.jpg";

const Home = () => {
    return (
        <section id='home' className="flex flex-col lg:flex-row items-center  lg:justify-between p-8 bg-gray-100 w-11/12 mx-auto">
            {/* Left Side Content */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left mb-8 lg:mb-0 lg:w-1/2">
                <h2 className="text-4xl font-bold mb-4">Frontend Developer</h2>
                <p className="text-lg mb-6">Passionate about creating beautiful and functional web applications.</p>

                {/* Social Media Icons */}
                <div className="flex space-x-4 mb-6">
                    <a href="https://www.facebook.com/profile.php?id=100069936865122https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={30} className="text-blue-600 hover:text-blue-800" />
                    </a>
                    <a href="https://x.com/Tarikuzzaman98" target="_blank" rel="noopener noreferrer">
                        <FaTwitter size={30} className="text-blue-400 hover:text-blue-600" />
                    </a>
                    <a href="https://www.linkedin.com/in/tarikuzzaman-tuhin-29a53132b/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={30} className="text-blue-700 hover:text-blue-900" />
                    </a>
                    <a href="https://github.com/Tarikuzzaman12" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={30} className="text-gray-800 hover:text-gray-600" />
                    </a>
                </div>

                {/* Download Resume Button */}
                <a
                    href="https://docs.google.com/document/d/1L4kXiant87_hr1KltMMPEPa7wiWpNuiGbvJQaDmggn0/edit?usp=drive_link" // File should be placed in the public folder
                    download="Resume.pdf" // Suggested name for the downloaded file
                    className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
                >
                    Download Resume
                </a>
            </div>

            {/* Right Side Image */}
            <div className="flex justify-center lg:w-1/2">
                <img
                    src={image}
                    alt="Frontend Developer"
                    className="w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-full"
                />
            </div>
        </section>
    );
};

export default Home;
