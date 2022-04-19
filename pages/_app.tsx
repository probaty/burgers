import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';
import { firebaseConfig } from '../configs/firebase';
import { initializeApp } from 'firebase/app';
import Layout from '../components/layouts/Layout';
import { Provider } from 'react-redux';
import { store } from '../store';

// export const Context = createContext({ storage });
function MyApp({ Component, pageProps }: AppProps) {
  initializeApp(firebaseConfig);
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
