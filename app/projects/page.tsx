import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Bela Wiertz',
  description: 'Explore the various projects I have contributed to, collaborated with, or founded, including ventures in AI, Dev & Infra, Fashion E-Commerce, and more.',
};

const projects = [
    {
        name: 'Investing in Startups',
        description: 'Focus on AI, Dev & Infra - First as a VC, now as an Angel',
        period: '2021-Today',
        link: null
    },
    {
      name: 'N8N Automation',
      description: 'Biggest Independent Blog on n8n',
      period: '2023-Today',
      link: 'https://n8n-automation.com'
    },
    {
      name: '{Tech: Europe}',
      description: "Europe's Builder Community",
      period: '2024-Today',
      link: 'https://www.techeurope.io'
    },
    {
      name: 'European Infra Stack',
      description: 'Build your Products on European Infrastructure',
      period: '2025-Today',
      link: 'https://www.infraeurope.dev'
    }

];
  

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
