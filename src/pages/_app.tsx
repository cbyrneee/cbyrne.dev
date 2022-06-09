import '../styles/globals.css';
import type { AppProps } from 'next/app';

import '@fontsource/inter/variable.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="container mx-auto max-w-4xl p-4 pt-8 lg:p-0 lg:py-12">
      <Component {...pageProps} />
    </div>
  );
}
