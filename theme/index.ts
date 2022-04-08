import { extendTheme } from '@chakra-ui/react';

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
    Heading: {
      baseStyle: {
        fontWeight: '400',
      },
      sizes: {
        lg: {
          fontSize: '24',
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
