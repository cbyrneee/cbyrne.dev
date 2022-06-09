import React from 'react';
import typography from '../../lib/typography';

export function Introduction() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className={typography.title}>👋 Hi, I{"'"}m Conor</h1>
      <h2 className={typography.subtitle}>
        I{"'"}m a 16 year old software developer from Ireland. I{"'"}m mostly interested in full-stack web development
        and creating immersive and detailed web experiences.
      </h2>
    </div>
  );
}
