import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';
import { firebaseConfig } from '../configs/firebase';
import { initializeApp } from 'firebase/app';

const app = initializeApp(firebaseConfig);
// const storage = getStorage(app);

// export const Context = createContext({ storage });
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      {/* <Context.Provider value={{ storage }}> */}
      <Component {...pageProps} />
      {/* </Context.Provider> */}
    </ChakraProvider>
  );
}

export default MyApp;
