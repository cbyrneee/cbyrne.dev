import React from 'react';
import { CurrentSong, ThemeToggle } from '../../../components';
import routes from '../../../lib/routes';
import NavigationRoute from './NavigationRoute';

export function Navigation() {
  const getRoutes = (external: boolean): React.ReactNode => {
    return routes
      .filter((it) => (it.external ?? false) === external)
      .map((route) => {
        return <NavigationRoute key={route.destination} {...route} />;
      });
  };

  return (
    <div className="flex w-full flex-row justify-between">
      <div className="flex flex-row gap-6">
        <div className="flex gap-4">{getRoutes(false)}</div>
        <div className="flex gap-4 border-l border-l-neutral-600 pl-6">{getRoutes(true)}</div>
      </div>

      <div className="flex flex-row gap-6 overflow-hidden">
        <div className="hidden border-r border-r-neutral-600 pr-6 md:block">
          <CurrentSong />
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
}
