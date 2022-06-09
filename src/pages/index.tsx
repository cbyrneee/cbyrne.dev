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
