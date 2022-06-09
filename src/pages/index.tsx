import Head from 'next/head';
import { Introduction, Projects } from '../elements/home';
import { Project } from '../lib/types/Project.interface';

export default function Home() {
  const projects: Project[] = [
    {
      name: 'CompactChat',
      description:
        'A mod for Fabric which cleans up your chat by removing duplicate messages, extending the chat history, and more.',
      url: 'https://github.com/cbyrneee/CompactChat',
    },
    {
      name: 'MediaMod',
      description:
        'A mod for Forge and Fabric that allows you to see your current song on any streaming platform directly inside of Minecraft.',
      url: 'https://github.com/MediaMod/MediaModMC',
    },
    {
      name: 'AxolotlViewer',
      description:
        'A mod for Fabric that makes it easier to see what type of axolotl is in your inventory by changing the texture and adding a tooltip.',
      url: 'https://github.com/cbyrneee/AxolotlViewer',
    },
  ];

  return (
    <>
      <Head>
        <title>Conor Byrne • Software Developer</title>
      </Head>

      <div className="flex flex-col gap-12">
        <Introduction />
        <Projects projects={projects} />
      </div>
    </>
  );
}
