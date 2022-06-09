import Head from 'next/head';
import { Introduction, Projects } from '../elements/home';

export default function Home() {
  return (
    <>
      <Head>
        <title>Conor Byrne • Software Developer</title>
      </Head>

      <div className="flex flex-col gap-12">
        <Introduction />
        <Projects />
      </div>
    </>
  );
}
