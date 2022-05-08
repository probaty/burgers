import { ComponentStyleConfig } from '@chakra-ui/react';

export const Menu: ComponentStyleConfig = {
  // All parts of multipart components can be found in the @chakra-ui/anatomy package,
  // the menuAnatomy has as well these parts: button, list, groupTitle, command, divider
  parts: ['item'],
  baseStyle: {
    item: {
      bgColor: 'darkGray',
      _hover: { backgroundColor: '#333345' },
      _active: { backgroundColor: '#333345' },
      _focus: { backgroundColor: '#333345' },
    },
  },
};
