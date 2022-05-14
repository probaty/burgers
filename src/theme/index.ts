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
    Button: {
      variants: {
        brand: {
          bg: 'brand',
          borderRadius: 0,
          px: 5,
          color: 'background',
          _hover: { bg: '#d9bc86' },
        },
        brandDark: {
          bg: 'brandGray',
          borderRadius: 0,
          px: 5,

          _hover: { bg: 'blackAlpha.800' },
          _active: { bg: 'blackAlpha.800' },
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
