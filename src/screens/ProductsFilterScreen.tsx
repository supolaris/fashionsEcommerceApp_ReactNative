import React, {useState} from 'react';

import ProductsFilter from '../components/screenUi/ProductsFilter';

import {useAppNavigation} from '../@types/AppNavigation';

const ProductsFilterScreen = () => {
  const navigation = useAppNavigation();
  const [selectedCatagoryId, setSelectedCatagoryId] = useState(0);
  const [selectedSortById, setSelectedSortById] = useState(0);

  const [selecteRating, setSelectedRating] = useState(0);

  const onHeaderBackArrowPressed = () => {
    navigation.goBack();
  };

  const catagoryPressed = (item: any) => {
    setSelectedCatagoryId(item.id);
  };

  const sortByPressed = (item: any) => {
    setSelectedSortById(item.id);
  };

  const onApplyNowPressed = () => {
    console.log('Apply Now Pressed');
  };

  const onSeletedRatingPressed = (item: any) => {
    setSelectedRating(item.id);
  };

  return (
    <ProductsFilter
      onSeletedRatingPressed={onSeletedRatingPressed}
      selectedRating={selecteRating}
      selectedCatagory={selectedCatagoryId}
      catagoryPressed={catagoryPressed}
      selectedSortBy={selectedSortById}
      sortByPressed={sortByPressed}
      onHeaderBackArrowPressed={onHeaderBackArrowPressed}
      onApplyNowPressed={onApplyNowPressed}
    />
  );
};

export default ProductsFilterScreen;
