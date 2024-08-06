import React from 'react';

const HomePage = () => {
  return (
    <div className="p-6 bg-pastel-yellow min-h-screen">
      <main className="flex flex-col space-y-12 mx-auto max-w-4xl">
        
        {/* About Me Section */}
        <section className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold mb-4 text-gray-800 border-b-2 border-gray-200 pb-2 flex items-center">
            <span className="mr-2 text-xl">👋</span> {/* Emoji for About Me */}
            About Me
          </h2>
          <p className="text-lg text-gray-700">
            I am a Data Engineer Intern with a strong background in software engineering and product management.
            My experience spans across various roles including full-stack development, data engineering, and technology audit.
          </p>
        </section>

        {/* Recent Projects Section */}
        <section className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold mb-4 text-gray-800 border-b-2 border-gray-200 pb-2 flex items-center">
            <span className="mr-2 text-xl">📂</span> {/* Emoji for Recent Projects */}
            Recent Projects
          </h2>
          <ul className="list-disc pl-5 space-y-4">
            <li className="text-lg text-gray-700">
              <a href="/projects" className="text-blue-600 hover:underline">
                Whistle Project
              </a> - Developed a system to translate detected whistle sounds into musical notes using signal processing and machine learning techniques.
            </li>
            <li className="text-lg text-gray-700">
              <a href="/projects" className="text-blue-600 hover:underline">
                Shopee Product & Design Challenge 2022
              </a> - Engaged in a product design competition, focusing on user experience and design solutions.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
