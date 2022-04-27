import { extendTheme } from '@chakra-ui/react';
import { Menu } from './menu';

const theme = extendTheme({
  colors: {
    brand: '#ffdea0',
    darkGray: '#181820',
    background: '#292d36',
    brandGray: '#25252d',
  },
  fonts: {
    heading: 'Cormorant, sans-serif',
    body: 'Montserrat, sans-serif',
  },
  components: {
    Menu,
    Heading: {
      baseStyle: {
        fontWeight: '400',
      },
      sizes: {
        brand: {
          fontSize: '22',
        },
        price: {
          fontSize: 18,
          fontFamily: 'sans',
          letterSpacing: 1,
        },
      },
    },
    Modal: {
      variants: {
        brand: {
          dialog: {
            bg: 'brandGray',
            borderRadius: 0,
          },
        },
      },
    },
  },
  styles: {
    global: () => ({
      body: {
        bg: 'background',
        color: 'white',
      },
    }),
  },
});

export default theme;
