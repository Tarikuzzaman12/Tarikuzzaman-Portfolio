import React from 'react';

const ProjectCard = () => {
  const projects = [
    {
      id: 1,
      title: 'Lingo Bingo',
      description: 'An interactive language learning app with lessons, quizzes, and audio pronunciation.',
      features: [
        'Interactive Lessons',
        'Audio Pronunciation',
        'Responsive Design',
        'User Authentication',
      ],
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Speech Synthesis API'],
      liveLink: 'https://encouraging-invention.surge.sh/',
      githubLink: 'https://github.com/Tarikuzzaman12/Lingo-Bingo',
      image: 'https://via.placeholder.com/300x200', // Replace with your image URL
    },
    {
      id: 2,
      title: 'Visa Compass',
      description: 'Navigate your visa journey with ease and confidence.',
      features: [
        'Comprehensive Visa Information',
        'Interactive Tools',
        'Secure User Authentication',
        'Theme Toggling',
        'CRUD Operations',
        'Responsive Design',
        'Engaging Animations',
      ],
      technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Lottie', 'React Awesome Reveal'],
      liveLink: 'https://visa-compass.surge.sh/',
      githubLink: 'https://github.com/your-username/visa-compass',
      image: 'https://via.placeholder.com/300x200', // Replace with your image URL
    },
    {
      id: 3,
      title: 'StayEase - Hotel Booking Platform',
      description: 'A modern hotel booking platform for seamless browsing and room bookings.',
      features: [
        'Responsive Design',
        'Room Listings',
        'Room Details',
        'User Reviews',
        'Room Booking',
        'Search & Filters',
      ],
      technologies: ['React', 'Tailwind CSS', 'JWT Authentication', 'React Router', 'React Toastify', 'JWT Decode', 'React Icons'],
      liveLink: 'https://shaky-slip.surge.sh',
      githubLink: 'https://github.com/Tarikuzzaman12/Stay-Ease',
      image: 'https://via.placeholder.com/300x200', // Replace with your image URL
    },
  ];

  return (
    <section id='projects' className="p-8 bg-gray-100 w-11/12 mx-auto mt-14">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all transform overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Technologies Used:</h3>
                <ul className="list-none flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <li
                      key={index}
                      className="bg-blue-100 text-blue-700 px-2 py-1 rounded-lg text-sm"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  Visit Project
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition"
                >
                  GitHub Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectCard;
