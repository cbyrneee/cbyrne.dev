import Link from 'next/link';
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Project } from '../../../lib/types/Project.interface';
import typography from '../../../lib/typography';

export default function ProjectItem(project: Project) {
  const content = (arrow: boolean) => (
    <div className="cursor-pointer hover:scale-[102%] transition-all w-full outline outline-1 p-4 rounded-md outline-neutral-300 shadow-neutral-300 dark:outline-neutral-800 dark:shadow-neutral-800 shadow-md">
      <div className="flex flex-row items-center gap-4">
        <div>
          <h5 className={typography.caption}>{project.name}</h5>
          <p className={typography.paragraph}>{project.description}</p>
        </div>

        <div>{arrow && <FiArrowRight />}</div>
      </div>
    </div>
  );

  return (
    <>
      {project.url ? (
        <Link passHref href={project.url ?? '/'}>
          <a target="_blank">{content(true)}</a>
        </Link>
      ) : (
        <>{content(false)}</>
      )}
    </>
  );
}
