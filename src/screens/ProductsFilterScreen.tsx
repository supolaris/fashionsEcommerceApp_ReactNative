import React, {useState} from 'react';
import {View, Text} from 'react-native';

import ProductsFilter from '../components/screenUi/ProductsFilter';

const ProductsFilterScreen = () => {
  const [selectedCatagoryId, setSelectedCatagoryId] = useState(0);
  const [selectedSortById, setSelectedSortById] = useState(0);

  const catagoryPressed = (item: any) => {
    setSelectedCatagoryId(item.id);
  };

  const sortByPressed = (item: any) => {
    setSelectedSortById(item.id);
  };

  return (
    <ProductsFilter
      selectedCatagory={selectedCatagoryId}
      catagoryPressed={catagoryPressed}
      selectedSortBy={selectedSortById}
      sortByPressed={sortByPressed}

      //sort
    />
  );
};

export default ProductsFilterScreen;
