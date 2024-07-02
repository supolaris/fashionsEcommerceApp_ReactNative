import React, {useState} from 'react';

import ProductsFilter from '../components/screenUi/ProductsFilter';

import {useAppNavigation} from '../@types/AppNavigation';

const ProductsFilterScreen = () => {
  const navigation = useAppNavigation();
  const [selectedCatagoryId, setSelectedCatagoryId] = useState(0);
  const [selectedSortById, setSelectedSortById] = useState(0);

  const [selectedRating, setSelectedRating] = useState('');

  const onHeaderBackArrowPressed = () => {
    navigation.goBack();
  };

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

  const onApplyNowPressed = () => {
    console.log('Apply Now Pressed');
  };

  return (
    <ProductsFilter
      selectedCatagory={selectedCatagoryId}
      catagoryPressed={catagoryPressed}
      selectedSortBy={selectedSortById}
      sortByPressed={sortByPressed}
      onHeaderBackArrowPressed={onHeaderBackArrowPressed}
      selectedRating={selectedRating}
      onTouchableRadioPressed={onTouchableRadioPressed}
      onStarPressed={onStarPressed}
      onApplyNowPressed={onApplyNowPressed}
    />
  );
};

export default ProductsFilterScreen;
