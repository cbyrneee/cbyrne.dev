import '../styles/globals.css';
import type { AppProps } from 'next/app';

import '@fontsource/inter/variable.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
