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
      className={`ml-12 flex w-full flex-row items-center gap-2 text-neutral-700 transition-all dark:text-neutral-400`}
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
