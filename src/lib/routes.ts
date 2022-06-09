export type Route = {
  icon?: React.ReactNode;
  external?: boolean;
  destination: string;
  name: string;
};

const routes: Route[] = [
  { destination: '/', name: 'Home' },
  { destination: 'https://github.com/cbyrneee', name: 'Github', external: true },
];

export default routes;
