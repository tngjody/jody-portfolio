import React from 'react';

const ProjectsPage = () => {
  return (
    <div className="p-6 bg-pastel-yellow min-h-screen">
      <main className="flex flex-col space-y-12 mx-auto max-w-4xl">
        
        {/* Whistle Project Section */}
        <section className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-4 text-gray-800 border-b-2 border-gray-200 pb-2 flex items-center">
            <span className="mr-2 text-xl">📁</span> {/* Emoji for Projects */}
            Projects
          </h1>
          <div className="mb-8">
            <h2 className="text-3xl font-semibold mb-2 text-gray-800 flex items-center">
              <span className="mr-2 text-xl">🔍</span> {/* Emoji for Project Details */}
              Whistle Project
            </h2>
            <p className="text-lg mb-2 text-gray-700">
              <strong>Role:</strong> Full Stack Developer (May 2022 – Jul 2022)
            </p>
            <p className="text-lg mb-4 text-gray-700">
              Developed a system to translate detected whistle sounds into musical notes using signal processing and machine learning techniques. Responsibilities included creating algorithms to transcribe sounds into musical notations, implementing noise reduction techniques, and suggesting harmonies and chords based on a trained model.
            </p>
            <a href="https://github.com/tngjody/whistle" className="text-blue-600 hover:underline">
              View on GitHub
            </a>
          </div>
          
          {/* Other Projects Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold mb-2 text-gray-800 flex items-center">
              <span className="mr-2 text-xl">🔗</span> {/* Emoji for Other Projects */}
              Other Projects
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-lg text-gray-700">
                <span className="mr-2 text-lg">🏆</span> NUS Hack&Roll 2023 - Participated in a hackathon event, working on innovative solutions and prototypes.
              </li>
              <li className="text-lg text-gray-700">
                <span className="mr-2 text-lg">🎨</span> Shopee Product & Design Challenge 2022 - Engaged in a product design competition, focusing on user experience and design solutions.
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProjectsPage;
