import React from 'react';
import usePinnedRepositories from '../../../hooks/usePinnedRepositories';
import typography from '../../../lib/typography';
import ProjectItem from './ProjectItem';

export function Projects() {
  const repositories = usePinnedRepositories('cbyrneee');

  return (
    <div className="flex flex-col gap-4">
      <h1 className={typography.title}>Projects</h1>
      <h2 className={typography.subtitle}>
        Over the years, I have worked on various projects utilising many different languages and frameworks.
      </h2>

      {repositories && repositories.map((repo) => <ProjectItem key={repo.repo} {...repo} />)}
    </div>
  );
}
