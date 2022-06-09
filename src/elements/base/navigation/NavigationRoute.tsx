import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Route } from '../../../lib/routes';

export default function NavigationRoute(route: Route) {
  const [isActive, setActive] = useState(false);

  const router = useRouter();
  const activeBasedClasses = isActive ? 'underline cursor-default pointer-events-none' : 'opacity-90 hover:opacity-60';

  useEffect(() => {
    setActive(router.asPath === route.destination);
  }, [router, route]);

  return (
    <Link href={route.destination} passHref>
      <a
        target={route.external ? '_blank' : ''}
        className={`select-none text-neutral-700 transition-all dark:text-neutral-400 ${activeBasedClasses}`}
      >
        {route.name}
      </a>
    </Link>
  );
}
