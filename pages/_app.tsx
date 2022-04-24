import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider, css } from '@chakra-ui/react';
import theme from '../theme';
import { firebaseConfig } from '../configs/firebase';
import { initializeApp } from 'firebase/app';
import Layout from '../components/layouts/Layout';
import { Provider } from 'react-redux';
import { store } from '../store';
import { Global } from '@emotion/react';

const GlobalStyles = css({
  'a:focus, button:focus': {
    boxShadow: '0 0 0 3px #ffdea0bb !important',
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  initializeApp(firebaseConfig);
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Global styles={GlobalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
