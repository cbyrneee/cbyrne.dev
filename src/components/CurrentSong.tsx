import Link from 'next/link';
import React from 'react';
import { FiMusic } from 'react-icons/fi';
import { useLanyardWs } from 'use-lanyard';

interface CurrentSongProps {
  className?: string;
}

export function CurrentSong({ className }: CurrentSongProps) {
  const lanyard = useLanyardWs('843135686173392946');
  const spotify = lanyard?.spotify;

  const content = (text: string) => (
    <div
      className={`text-neutral-700 dark:text-neutral-400 transition-all flex flex-row items-center gap-2 ml-12 w-full`}
    >
      <FiMusic />
      <span className="whitespace-nowrap">{text}</span>
    </div>
  );

  if (!spotify) {
    return <>{content(`Not playing anything`)}</>;
  }

  return (
    <Link href={`https://open.spotify.com/track/${spotify.track_id}`} passHref>
      <a target="_blank" className="hover:opacity-60">
        {content(`${spotify.song} by ${spotify.artist}`)}
      </a>
    </Link>
  );
}
