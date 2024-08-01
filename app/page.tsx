import React from 'react';

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <main className="flex flex-col space-y-8">
        <section>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg mb-4">
            {`I am a Data Engineer Intern with a strong background in software engineering and product management.
            My experience spans across various roles including full-stack development, data engineering, and technology audit.`}
          </p>
        </section>
        <section>
          <h2 className="text-3xl font-semibold mb-4">Recent Projects</h2>
          <ul className="list-disc pl-5">
            <li className="text-lg mb-2">
              <a href="/projects" className="text-blue-500 hover:underline">
                Whistle Project
              </a> - Developed a system to translate detected whistle sounds into musical notes using signal processing and machine learning techniques.
            </li>
            <li className="text-lg mb-2">
              <a href="/projects" className="text-blue-500 hover:underline">
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
