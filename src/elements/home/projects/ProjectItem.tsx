import Link from 'next/link';
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Repository } from '../../../lib/types/Repository.interface';
import typography from '../../../lib/typography';

export default function ProjectItem(repo: Repository) {
  const content = (arrow: boolean) => (
    <div className="cursor-pointer hover:scale-[102%] transition-all w-full border border-1 p-4 rounded-md border-neutral-300 shadow-neutral-300 dark:border-neutral-800 dark:shadow-neutral-800 shadow-md">
      <div className="justify-between flex flex-row items-center gap-4">
        <div>
          <h5 className={typography.caption}>{repo.repo}</h5>
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
