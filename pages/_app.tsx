import React from 'react';
import { AppProps } from 'next/app';
import { NextPage } from 'next';
import Head from 'next/head';
import GlobalStyle from '../styles/GlobalStyle';

const App: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>push your favorite song!</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
