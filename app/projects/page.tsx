import React from 'react';

const ProjectsPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Whistle Project</h2>
        <p className="text-lg mb-2">
          Role: Full Stack Developer (May 2022 – Jul 2022)
        </p>
        <p className="text-lg mb-4">
          Developed a system to translate detected whistle sounds into musical notes using signal processing and machine learning techniques. Responsibilities included creating algorithms to transcribe sounds into musical notations, implementing noise reduction techniques, and suggesting harmonies and chords based on a trained model.
        </p>
        <a href="https://github.com/tngjody/whistle" className="text-blue-500 hover:underline">
          View on GitHub
        </a>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Other Projects</h2>
        <ul className="list-disc pl-5">
          <li className="text-lg mb-2">
            NUS Hack&Roll 2023 - Participated in a hackathon event, working on innovative solutions and prototypes.
          </li>
          <li className="text-lg mb-2">
            Shopee Product & Design Challenge 2022 - Engaged in a product design competition, focusing on user experience and design solutions.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default ProjectsPage;
