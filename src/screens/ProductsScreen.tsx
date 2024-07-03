import React, {useCallback, useState} from 'react';

import Products from '../components/screenUi/Products';

import {useFocusEffect} from '@react-navigation/native';
import {useAppNavigation} from '../@types/AppNavigation';

import {BagsData} from '../constants/FlatlistData';
import {ShirtsData} from '../constants/FlatlistData';
import {ShoesData} from '../constants/FlatlistData';
import {ElectronicsData} from '../constants/FlatlistData';

import {InterfaceProductTyping} from '../@types/AppTyping';

const ProductsScreen = ({route}: {route: any}) => {
  const [flatlistProductArray, setFlatlistProductArray] = useState<any>([]);
  const {item} = route.params;
  // Alert.alert('Warning', item.CatagoryApiName);
  const navigation = useAppNavigation();

  useFocusEffect(
    useCallback(() => {
      if (item.CatagoryApiName === 'ShirtsData') {
        setFlatlistProductArray(ShirtsData);
      } else if (item.CatagoryApiName === 'BagsData') {
        setFlatlistProductArray(BagsData);
      } else if (item.CatagoryApiName === 'ShoesData') {
        setFlatlistProductArray(ShoesData);
      } else if (item.CatagoryApiName === 'ElectronicsData') {
        setFlatlistProductArray(ElectronicsData);
      } else if (item.CatagoryApiName === 'JewelryData') {
        setFlatlistProductArray(ShirtsData);
      } else if (item.CatagoryApiName === 'AccessoriesData') {
        setFlatlistProductArray(BagsData);
      }
    }, []),
  );

  const onProductPressed = (item: any) => {
    navigation.navigate('ProductDescripton_Screen', {item: item});
  };
  const onHeaderBackArrowPressed = () => {
    navigation.goBack();
  };

  return (
    <Products
      onProductPressed={onProductPressed}
      onHeaderBackArrowPressed={onHeaderBackArrowPressed}
      categoryName={item.CatagoryName}
      flatListProductsData={flatlistProductArray}
    />
  );
};

export default ProductsScreen;
