import React from 'react';

const ExperiencePage = () => {
  return (
    <div className="p-6 bg-pastel-yellow min-h-screen">
      <main className="flex flex-col space-y-12 mx-auto max-w-4xl">
        
        {/* Current Position Section */}
        <section className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-4 text-gray-800 border-b-2 border-gray-200 pb-2 flex items-center">
            <span className="mr-2 text-xl">💼</span> {/* Emoji for Experience */}
            Experience
          </h1>
          <div className="mb-8">
            <h2 className="text-3xl font-semibold mb-2 text-gray-800 flex items-center">
              <span className="mr-2 text-xl">🔍</span> {/* Emoji for Current Position */}
              Current Position
            </h2>
            <p className="text-lg mb-2 text-gray-700">
              <strong>GIC - Data Engineer Intern (Present)</strong>
            </p>
            <p className="text-lg text-gray-700">
              Currently working at GIC as a Data Engineer Intern, where I am involved in various data engineering tasks, including data pipeline development and data analysis.
            </p>
          </div>
          
          {/* Previous Roles Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold mb-2 text-gray-800 flex items-center">
              <span className="mr-2 text-xl">🗂️</span> {/* Emoji for Previous Roles */}
              Previous Roles
            </h2>
            <ul className="list-disc pl-5 space-y-4">
              <li className="text-lg text-gray-700">
                <span className="mr-2 text-lg">🏦</span> Bank Of America - Technology Audit Intern (May 2024 – Jul 2024)
                <p className="text-lg mt-1">
                  Worked on technology audits, including assessing IT controls and ensuring compliance with regulations.
                </p>
              </li>
              <li className="text-lg text-gray-700">
                <span className="mr-2 text-lg">💻</span> Convier (Oslo, Norway) - Software Engineer Intern (Aug 2023 – Jan 2024)
                <p className="text-lg mt-1">
                  Contributed to software development projects, focusing on full-stack development and code optimization.
                </p>
              </li>
              <li className="text-lg text-gray-700">
                <span className="mr-2 text-lg">📊</span> NCS - Data Engineer Intern (May 2023 – Jul 2023)
                <p className="text-lg mt-1">
                  Assisted with data engineering tasks such as ETL processes and data analysis.
                </p>
              </li>
              <li className="text-lg text-gray-700">
                <span className="mr-2 text-lg">📈</span> Circles.Life - Product Management Intern (Sep 2022 – Dec 2022)
                <p className="text-lg mt-1">
                  Supported product management activities, including market research and product development.
                </p>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ExperiencePage;
