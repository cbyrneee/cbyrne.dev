import React from 'react';
import { ThemeToggle } from '../../../components';
import routes, { Route } from '../../../lib/routes';
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
    <div className="flex flex-row justify-between">
      <div className="flex gap-6">
        <div className="flex gap-4">{getRoutes(false)}</div>
        <div className="flex gap-4 border-l border-l-neutral-600 pl-6">{getRoutes(true)}</div>
      </div>

      <ThemeToggle />
    </div>
  );
}
