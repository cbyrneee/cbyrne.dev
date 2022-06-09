import '../styles/globals.css';
import '@fontsource/inter/variable.css';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { Navigation } from '../elements/base';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <div className="container mx-auto max-w-4xl p-4 pt-8 lg:p-0 lg:py-12 flex flex-col gap-8">
        <Navigation />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
