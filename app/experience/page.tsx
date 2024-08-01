import React from 'react';

const ExperiencePage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Experience</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Current Position</h2>
        <p className="text-lg mb-2">
          GIC - Data Engineer Intern (Present)
        </p>
        <p className="text-lg">
          Currently working at GIC as a Data Engineer Intern, where I am involved in various data engineering tasks, including data pipeline development and data analysis.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Previous Roles</h2>
        <ul className="list-disc pl-5">
          <li className="text-lg mb-2">
            Bank Of America - Technology Audit Intern (May 2024 – Jul 2024)
            <p>
              Worked on technology audits, including assessing IT controls and ensuring compliance with regulations.
            </p>
          </li>
          <li className="text-lg mb-2">
            Convier (Oslo, Norway) - Software Engineer Intern (Aug 2023 – Jan 2024)
            <p>
              Contributed to software development projects, focusing on full-stack development and code optimization.
            </p>
          </li>
          <li className="text-lg mb-2">
            NCS - Data Engineer Intern (May 2023 – Jul 2023)
            <p>
              Assisted with data engineering tasks such as ETL processes and data analysis.
            </p>
          </li>
          <li className="text-lg mb-2">
            Circles.Life - Product Management Intern (Sep 2022 – Dec 2022)
            <p>
              Supported product management activities, including market research and product development.
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default ExperiencePage;
