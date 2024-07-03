import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {AppColors} from '../../constants/AppColors';
import {AppFonts} from '../../constants/AppFonts';

import PlusIcon from 'react-native-vector-icons/Entypo';
import MinusIcon from 'react-native-vector-icons/Entypo';
import TrashBinIcon from 'react-native-vector-icons/FontAwesome5';

import {SwipeListView} from 'react-native-swipe-list-view';

import PrimaryHeader from '../common/Headers/PrimaryHeader';
import SecondaryTitle from '../common/Titles/SecondaryTitle';
import ProductDescriptionText from '../common/Texts/ProductDescriptionText';
import ProductNameText from '../common/Texts/ProductNameText';
import ProductPriceText from '../common/Texts/ProductPriceText';
import PromoTextInput from '../common/TextInputs/PromoTextInput';
import PrimaryDescription from '../common/Descriptions/PrimaryDescription';
import CheckOutButton from '../common/Buttons/CheckOutButton';

import {InterfaceProductTyping} from '../../@types/AppTyping';

interface Iprops {
  onMinusIconPressed: (id: number) => void;
  onPlusIconPressed: (id: number) => void;
  onTrashIconPressed: (id: number) => void;
  onHeaderBackArrowPressed: () => void;
  cartProductsData: InterfaceProductTyping[];
  onCheckoutPressed: () => void;
}

const Cart = (props: Iprops) => {
  const renderCartItem = ({item}: {item: any}) => {
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
                onPress={() => props.onMinusIconPressed(item.id)}
                name="minus"
                size={22}
                color={AppColors.Black}
              />
              <Text style={styles.productCounterText}>{item.NoOfProducts}</Text>

              <PlusIcon
                onPress={() => props.onPlusIconPressed(item.id)}
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

  const renderHiddenFunctionality = ({
    item,
  }: {
    item: InterfaceProductTyping;
  }) => {
    return (
      <TouchableOpacity
        style={styles.renderRowBack}
        onPress={() => props.onTrashIconPressed(item.id)}>
        <TrashBinIcon
          style={styles.renderTrashIcon}
          name="trash"
          size={25}
          color={AppColors.White}
        />
      </TouchableOpacity>
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
          <SwipeListView
            showsVerticalScrollIndicator={false}
            data={props.cartProductsData}
            renderItem={renderCartItem}
            renderHiddenItem={renderHiddenFunctionality}
            rightOpenValue={-55}
            keyExtractor={(item: InterfaceProductTyping, index: number) =>
              index.toString()
            }
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
  renderRowBack: {
    marginTop: 12,
    marginBottom: 10,
    backgroundColor: AppColors.Black,
    paddingVertical: 40,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 10,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  renderTrashIcon: {},

  //main
  container: {
    flex: 1,
    backgroundColor: AppColors.White,
    paddingHorizontal: 15,
  },
  headerCartView: {},
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
