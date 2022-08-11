import React from 'react';
import type { AppProps } from 'next/app';
import '../styles/globals.scss';
import wrapper from '@/store/configureStore';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
