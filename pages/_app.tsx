import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';
import { firebaseConfig } from '../configs/firebase';
import { initializeApp } from 'firebase/app';
import Layout from '../components/layouts/Layout';

const app = initializeApp(firebaseConfig);
// const storage = getStorage(app);

// export const Context = createContext({ storage });
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      {/* <Context.Provider value={{ storage }}> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* </Context.Provider> */}
    </ChakraProvider>
  );
}

export default MyApp;
