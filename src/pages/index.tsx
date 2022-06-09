import Head from 'next/head';
import { Introduction } from '../elements/home';

export default function Home() {
  return (
    <>
      <Head>
        <title>Conor Byrne • Software Developer</title>
      </Head>
      <Introduction />
    </>
  );
}
