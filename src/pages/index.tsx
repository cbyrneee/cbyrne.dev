import Head from 'next/head';
import { Introduction, Projects } from '../elements/home';
import { getPinnedRepostiories } from '../lib/api/getPinnedRepositories';
import { Repository } from '../lib/types/Repository.interface';

type HomeProps = {
  cachedRepositories: Repository[];
};

export default function Home({ cachedRepositories }: HomeProps) {
  return (
    <>
      <Head>
        <title>Conor Byrne • Software Developer</title>
        <meta name="title" content="Conor Byrne • Software Developer" />
        <meta name="description" content="I'm a 16 year old software developer from Ireland." />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Conor Byrne • Software Developer" />
        <meta property="og:description" content="I'm a 16 year old software developer from Ireland." />
      </Head>

      <div className="flex flex-col gap-12">
        <Introduction />
        <Projects cachedRepositories={cachedRepositories} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      cachedRepositories: await getPinnedRepostiories(),
    },
  };
}
