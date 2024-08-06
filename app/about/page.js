import React from 'react';

const AboutPage = () => {
  return (
    <div className="p-6 bg-pastel-yellow min-h-screen">
      <main className="flex flex-col space-y-12 mx-auto max-w-4xl">
        {/* About Me Section */}
        <section className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-4 text-gray-800 border-b-2 border-gray-200 pb-2 flex items-center">
            <span className="mr-2 text-xl">👋</span> {/* Emoji for About Me */}
            About Me
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            Hello! I’m Jody, a passionate software developer with a focus on data engineering and full-stack development.
            I love exploring new technologies and building innovative solutions.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            I have experience working on various projects, including data analytics, product management, and full-stack web development.
            My goal is to continue growing as a developer and contribute to meaningful projects.
          </p>
          <p className="text-lg text-gray-700">
            Feel free to connect with me on{' '}
            <a href="https://github.com/tngjody" className="text-blue-600 hover:underline">
              GitHub
            </a>{' '}
            or{' '}
            <a href="https://www.linkedin.com/in/jodytng/" className="text-blue-600 hover:underline">
              LinkedIn
            </a>.
          </p>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
