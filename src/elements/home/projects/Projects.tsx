import React from 'react';
import useSWR from 'swr';
import fetcher from '../../../lib/fetcher';
import { Repository } from '../../../lib/types/Repository.interface';
import typography from '../../../lib/typography';
import ProjectItem from './ProjectItem';

type ProjectsProps = {
  cachedRepositories: Repository[];
};

export function Projects({ cachedRepositories }: ProjectsProps) {
  const { data } = useSWR<Repository[]>(`/api/projects`, fetcher, { fallbackData: cachedRepositories });

  const content = () => {
    if (data) {
      return (
        <div className="grid grid-flow-row lg:grid-cols-2 gap-4">
          {data.map((repo) => (
            <ProjectItem key={repo.repo} {...repo} />
          ))}
        </div>
      );
    } else {
      return <p className={typography.errorParagraph}>Failed to fetch projects.</p>;
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className={typography.title}>Projects</h1>
      <h2 className={typography.subtitle}>
        Over the years, I have worked on various projects utilising many different languages and frameworks.
      </h2>
      {content()}
    </div>
  );
}
