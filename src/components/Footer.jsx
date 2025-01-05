import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
      <div className="container mx-auto max-w-screen-xl p-6 text-center space-y-2">
        <p className="text-xl font-bold">
          Developer Portfolio of{" "}
          <span className="text-blue-500 dark:text-blue-400">MD. SAIF ISLAM</span>
        </p>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} - All Rights Reserved
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://www.facebook.com/profile.php?id=100069936865122https://www.facebook.com"
            className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500"
          >
            Facebook
          </a>
          <a
            href="https://www.linkedin.com/in/tarikuzzaman-tuhin-29a53132b/"
            className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Tarikuzzaman12"
            className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
