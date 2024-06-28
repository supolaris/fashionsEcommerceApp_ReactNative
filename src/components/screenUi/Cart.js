import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';

import {AppColors} from '../../constants/AppColors';
import {AppFonts} from '../../constants/AppFonts';

import PlusIcon from 'react-native-vector-icons/Entypo';
import MinusIcon from 'react-native-vector-icons/Entypo';

import PrimaryHeader from '../common/Headers/PrimaryHeader';

import {SwipeListView} from 'react-native-swipe-list-view';
import SecondaryTitle from '../common/Titles/SecondaryTitle';
import ProductDescriptionText from '../common/Texts/ProductDescriptionText';
import ProductNameText from '../common/Texts/ProductNameText';
import ProductPriceText from '../common/Texts/ProductPriceText';
import PromoTextInput from '../common/TextInputs/PromoTextInput';
import PrimaryDescription from '../common/Descriptions/PrimaryDescription';
import CheckOutButton from '../common/Buttons/CheckOutButton';

const Cart = props => {
  const renderCartItem = ({item}) => {
    return (
      <View style={styles.renderCartItemContainer}>
        <View style={styles.renderImageView}>
          <Image source={item.ProductImage} style={styles.renderImage} />
        </View>
        <View style={styles.renderDetailView}>
          <View style={styles.nameDescriptionView}>
            <ProductNameText text={item.ProductName} />
            <ProductDescriptionText text={item.ProductDescription} />
          </View>
          <View style={styles.priceCounterView}>
            <ProductPriceText text={item.ProductPrice} />
            <View style={styles.counterView}>
              <MinusIcon
                onPress={props.onMinusIconPressed}
                name="minus"
                size={22}
                color={AppColors.Black}
              />
              <Text style={styles.productCounterText}>
                {props.productCounterValue}
              </Text>

              <PlusIcon
                onPress={props.onPlusIconPressed}
                name="plus"
                size={20}
                color={AppColors.Black}
              />
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerCartView}>
        <View style={styles.headerView}>
          <PrimaryHeader
            showSearchIcon={true}
            onHeaderBackArrowPressed={props.onHeaderBackArrowPressed}
          />
        </View>
        <View style={styles.cartTitleView}>
          <SecondaryTitle text="My Cart" />
        </View>
        <View style={styles.cartProductSwipperList}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={props.cartProducts}
            renderItem={renderCartItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
      <View style={styles.promoTotalProductsPriceCheckoutView}>
        <View style={styles.promoTextView}>
          <PromoTextInput placeholder="Promo Code" touchableText="Apply" />
        </View>
        <View style={styles.itemPriceCheckView}>
          <View style={styles.itemPriceView}>
            <PrimaryDescription text="Total (3 items)" />
            <SecondaryTitle text="$300" />
          </View>
          <View style={styles.checkOutButtonView}>
            <CheckOutButton
              text="Proceed to checkout"
              onPress={props.onCheckoutPressed}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  //flatlist products
  renderCartItemContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    backgroundColor: AppColors.White,
    elevation: 5,
    paddingVertical: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  renderImageView: {},
  renderImage: {
    height: 75,
    width: 75,
    borderRadius: 20,
  },
  renderDetailView: {
    paddingLeft: 15,
  },
  nameDescriptionView: {},
  priceCounterView: {
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  priceText: {},
  counterView: {
    width: '35%',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: 2,
    paddingHorizontal: 8,
    backgroundColor: AppColors.LightGray2,
  },
  productCounterText: {
    textAlign: 'center',
    width: '40%',
    fontSize: 14,
    paddingTop: 5,
    color: AppColors.Black,
    fontFamily: AppFonts.Medium,
  },

  //main
  container: {
    flex: 1,
    backgroundColor: AppColors.White,
    paddingHorizontal: 15,
  },
  headerView: {},
  cartProductSwipperList: {
    flex: 1,
  },
  cartTitleView: {
    paddingBottom: 5,
  },
  promoTotalProductsPriceCheckoutView: {
    paddingBottom: 30,
  },
  promoTextView: {
    paddingTop: 30,
    paddingBottom: 50,
  },
  itemPriceCheckView: {},
  itemPriceView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkOutButtonView: {
    paddingTop: 10,
    paddingBottom: 50,
  },
});
