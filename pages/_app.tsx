import type {AppProps} from 'next/app';
import RootLayout from '@/app/layout';

import Head from 'next/head';
import {TranslationProvider} from "@/contexts/Translation";
import CSR from "@/components/CSR";


const App = ({Component, pageProps}: AppProps) => {

  return (
    <CSR>
      <Head>
        <meta httpEquiv="Pragma" content="no-cache"/>
        <meta httpEquiv="Cache-Control" content="no-cache"/>
      </Head>
      <RootLayout>
        <TranslationProvider>
          <AppCover {...pageProps} Component={Component}/>
        </TranslationProvider>
      </RootLayout>
    </CSR>
  );
};


const AppCover = ({Component, pageProps}: AppProps) => {
    return (
      <Component {...pageProps} />
    );
  }
;

export default App;