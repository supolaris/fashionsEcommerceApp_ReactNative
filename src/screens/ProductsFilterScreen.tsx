import React, {useState} from 'react';
import {View, Text} from 'react-native';

import ProductsFilter from '../components/screenUi/ProductsFilter';

const ProductsFilterScreen = () => {
  const [selectedCatagoryId, setSelectedCatagoryId] = useState(0);
  const [selectedSortById, setSelectedSortById] = useState(0);

  const [selectedRating, setSelectedRating] = useState(null);

  const catagoryPressed = (item: any) => {
    setSelectedCatagoryId(item.id);
  };

  const sortByPressed = (item: any) => {
    setSelectedSortById(item.id);
  };

  const onStarPressed = (item: any) => {
    setSelectedRating(item);
  };

  const onTouchableRadioPressed = (item: any) => {
    setSelectedRating(item);
  };

  return (
    <ProductsFilter
      selectedCatagory={selectedCatagoryId}
      catagoryPressed={catagoryPressed}
      selectedSortBy={selectedSortById}
      sortByPressed={sortByPressed}
      //stars
      onStarPressed={onStarPressed}
      selectedRating={selectedRating}
      onTouchableRadioPressed={onTouchableRadioPressed}

      //sort
    />
  );
};

export default ProductsFilterScreen;
