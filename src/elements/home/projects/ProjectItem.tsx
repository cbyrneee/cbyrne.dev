import Link from 'next/link';
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Repository } from '../../../lib/types/Repository.interface';
import typography from '../../../lib/typography';

export default function ProjectItem(repo: Repository) {
  const content = (arrow: boolean) => (
    <div className="border-1 w-full cursor-pointer rounded-md border border-neutral-300 p-4 shadow-md shadow-neutral-300 transition-all hover:scale-[102%] dark:border-neutral-800 dark:shadow-neutral-800">
      <div className="flex flex-row items-center justify-between gap-4">
        <div>
          <h5 className={`${typography.caption} capitalize`}>{repo.repo}</h5>
          <p className={typography.paragraph}>{repo.description}</p>
        </div>

        <div>{arrow && <FiArrowRight />}</div>
      </div>
    </div>
  );

  return (
    <>
      {repo.link ? (
        <Link passHref href={repo.link ?? '/'}>
          <a target="_blank">{content(true)}</a>
        </Link>
      ) : (
        <>{content(false)}</>
      )}
    </>
  );
}
