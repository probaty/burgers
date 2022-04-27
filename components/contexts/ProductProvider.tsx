import { useDisclosure } from '@chakra-ui/react';
import React, { Dispatch, useState } from 'react';
import { Product } from '../../types/product';

interface ContextValues {
  currentProduct: Product | null;
  isOpen: boolean;
  setCurrentProduct: Dispatch<React.SetStateAction<Product | null>>;
  onOpen: () => void;
  onClose: () => void;
}

export const ProductContext = React.createContext<ContextValues | null>(null);

const ProductProvider: React.FC = ({ children }) => {
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const values: ContextValues = {
    currentProduct,
    setCurrentProduct,
    isOpen,
    onOpen,
    onClose,
  };

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export default ProductProvider;
