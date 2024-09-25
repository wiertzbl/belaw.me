import React from 'react';

const projects = [
    {
        name: 'Early-Stage VC',
        description: 'Investments in AI, Dev & Infra',
        period: '2021-2024',
        link: null
    },
    {
        name: 'Various Startups',
        description: 'Growth | Ops | Marketing',
        period: '2021-Today',
        link: null
    },
    {
      name: 'FiveZeroEight',
      description: 'Fashion E-Commerce',
      period: '2020-2021',
      link: null
    },
    {
      name: 'N8N Automation',
      description: 'Tech Blog',
      period: '2023-Today',
      link: 'https://n8n-automation.com'
    },
    {
      name: '{Tech: Berlin}',
      description: 'Tech Community',
      period: '2024-Today',
      link: 'https://www.techberlin.io'
    },
    {
      name: 'LangueBot',
      description: 'AI Language Learning App',
      period: '2024-Today',
      link: 'https://www.languebot.com'
    }
    // Add more projects here
];
  
  // Add more projects here

const Projects = () => {
  return (
    <main className="projects p-5">
      <h1>Projects</h1>
      <div className="mb-12">
        <p className="description-text">
            Below are projects that I have either contributed to, collaborated with, or founded myself.
        </p>
        <hr className="my-4"/>
      </div>
      <div>
        {projects.map((project, index) => (
          <div key={index} className="project-item mb-5">
            <p className="m-1">
              <strong>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-inherit hover:text-gray-500"
                  >
                    {project.name} - 
                  </a>
                ) : (
                  project.name + " - "
                )}
              </strong>
              {' '}({project.description}) {project.period}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Projects;
