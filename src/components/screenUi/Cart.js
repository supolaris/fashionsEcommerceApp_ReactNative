import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {AppColors} from '../../constants/AppColors';
import {AppFonts} from '../../constants/AppFonts';

import PrimaryHeader from '../common/Headers/PrimaryHeader';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {SwipeListView} from 'react-native-swipe-list-view';
import {FlatList} from 'react-native-gesture-handler';

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  //console.log('cartProducts', cartProducts);
  let AsyncCartProducts;

  useEffect(() => {
    GetCartProducts();
    //AsyncStorage.removeItem('CartProducts');
  }, []);

  const GetCartProducts = async () => {
    AsyncCartProducts = await AsyncStorage.getItem('CartProducts');
    setCartProducts(JSON.parse(AsyncCartProducts));
    //console.log('data:' + AsyncCartProducts);
  };

  const renderCartItem = ({item}) => {
    return (
      <View style={styles.renderCartItemContainer}>
        <Text style={{color: 'black', fontSize: 20}}>{item.ProductName}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text>Cart</Text>
      <View style={styles.headerView}>
        <PrimaryHeader showSearchIcon={true} />
      </View>
      <View style={styles.cartProductSwipperList}>
        {/* Swipper list */}
        <FlatList
          data={cartProducts}
          renderItem={renderCartItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.White,
    paddingHorizontal: 15,
  },
});
