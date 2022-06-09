import React from 'react';
import { Project } from '../../../lib/types/Project.interface';
import typography from '../../../lib/typography';
import ProjectItem from './ProjectItem';

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className={typography.title}>Projects</h1>
      <h2 className={typography.subtitle}>
        Over the years, I have worked on various projects utilising many different languages and frameworks.
      </h2>

      {projects.map((project) => (
        <ProjectItem key={project.name} {...project} />
      ))}
    </div>
  );
}
