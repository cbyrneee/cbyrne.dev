export type Route = {
  icon?: React.ReactNode;
  external?: boolean;
  destination: string;
  name: string;
};

const routes: Route[] = [
  { destination: '/', name: 'Home' },
  { destination: 'mailto:hello@cbyrne.dev', name: 'Email', external: true },
  { destination: 'https://github.com/cbyrneee', name: 'Github', external: true },
];

export default routes;
