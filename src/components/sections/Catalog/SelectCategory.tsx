import { Button, ButtonGroup } from '@chakra-ui/react';
import React from 'react';

const SelectCategory: React.FC<{
  productsCategories: string[];
  selectedCategories: string[];
  selectCategory: (value: string) => void;
}> = ({ productsCategories, selectCategory, selectedCategories }) => {
  return (
    <ButtonGroup spacing={3}>
      {productsCategories.map((prod) => {
        const selected = selectedCategories.includes(prod);
        return (
          <Button
            size="sm"
            fontWeight="normal"
            onClick={() => selectCategory(prod)}
            variant={selected ? 'brand' : 'brandDark'}
            key={prod}
          >
            {prod.toUpperCase()}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};

export default React.memo(SelectCategory);
