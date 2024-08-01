import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="text-lg mb-4">
        Hello! I’m Jody, a passionate software developer with a focus on data engineering and full-stack development.
        I love exploring new technologies and building innovative solutions.
      </p>
      <p className="text-lg mb-4">
        I have experience working on various projects, including data analytics, product management, and full-stack web development.
        My goal is to continue growing as a developer and contribute to meaningful projects.
      </p>
      <p className="text-lg">
        Feel free to connect with me on <a href="https://github.com/tngjody" className="text-blue-500">GitHub</a> or
          
        <a href="https://www.linkedin.com/in/jody-tng" className="text-blue-500">LinkedIn</a>.
      </p>
    </div>
  );
};

export default AboutPage;
