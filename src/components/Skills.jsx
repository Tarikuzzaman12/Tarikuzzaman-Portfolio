import React from 'react';

const Skills = () => {
  const skills = [
    { id: 1, name: 'HTML', image: 'https://skillicons.dev/icons?i=html' },
    { id: 2, name: 'CSS', image: 'https://skillicons.dev/icons?i=css' },
    { id: 3, name: 'JavaScript', image: 'https://skillicons.dev/icons?i=js' },
    { id: 4, name: 'React', image: 'https://skillicons.dev/icons?i=react' },
    { id: 5, name: 'Node.js', image: 'https://skillicons.dev/icons?i=nodejs' },
    { id: 6, name: 'Tailwind CSS', image: 'https://skillicons.dev/icons?i=tailwind' },
    { id: 7, name: 'GitHub', image: 'https://skillicons.dev/icons?i=github' },
    { id: 8, name: 'Firebase', image: 'https://skillicons.dev/icons?i=firebase' },
  ];

  return (
    <section id='skills' className="p-8 bg-gradient-to-b from-gray-50 to-gray-200 w-11/12 mx-auto">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-800">My Skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="group relative bg-white p-6 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-blue-50"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-200 opacity-0 group-hover:opacity-40 transition-opacity"></div>
            <img
              src={skill.image}
              alt={skill.name}
              className="w-20 h-20 mx-auto mb-4 transform group-hover:scale-125 transition-all"
            />
            <h2 className="text-2xl font-semibold text-center text-gray-800 group-hover:text-blue-500 transition-colors">
              {skill.name}
            </h2>
            <p className="text-gray-600 mt-2 text-center opacity-0 group-hover:opacity-100 transition-opacity text-sm">
              {`Proficient in ${skill.name}`}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
