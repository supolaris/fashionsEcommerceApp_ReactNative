import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';

import {AppColors} from '../../constants/AppColors';
import {AppFonts} from '../../constants/AppFonts';

import PlusIcon from 'react-native-vector-icons/Entypo';
import MinusIcon from 'react-native-vector-icons/Entypo';
import CartIcon from 'react-native-vector-icons/Ionicons';

import PrimaryTitle from '../common/Titles/PrimaryTitle';
import ProductSizeButton from '../common/Buttons/ProductSizeButton';
import PrimaryDescription from '../common/Descriptions/PrimaryDescription';
import ColorButton from '../common/Buttons/ColorButton';
import SecondaryTitle from '../common/Titles/SecondaryTitle';
import QuinaryTitle from '../common/Titles/QuinaryTitle';

const height = Dimensions.get('window').height;

const ProductDescription = props => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageView}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={require('../../assets/images/productImage.png')}
        />
      </View>
      <View style={styles.detailView}>
        <View style={styles.nameDescriptionCounterView}>
          <View style={styles.nameDescriptionView}>
            <View>
              <PrimaryTitle text="Roller Rabbit" />
            </View>
            <View>
              <PrimaryDescription text="Vodo Odelle Dress" />
            </View>
          </View>
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

        <View style={styles.startReviewStockView}>
          <View style={styles.starsReviewView}>
            <Text>stars</Text>
            <Text>320 reviews</Text>
          </View>
          <View style={styles.stockView}>
            <Text style={styles.stockAvailableText}>Available in stock</Text>
          </View>
        </View>
        <View style={styles.titleSizeColorView}>
          <View style={styles.sizeTitleView}>
            <PrimaryTitle text="Size" />
          </View>
          <View style={styles.sizeColorView}>
            <View style={styles.sizeView}>
              <ProductSizeButton text="S" />
              <ProductSizeButton text="M" />
              <ProductSizeButton text="L" />
            </View>
            <View style={styles.colorView}>
              <ColorButton color={AppColors.ProductDustyPink} />
              <ColorButton color={AppColors.ProductGraphitePurple} />
              <ColorButton color={AppColors.Black} />
              <ColorButton color="orange" />
            </View>
          </View>
        </View>

        <View style={styles.titleDescriptionView}>
          <View style={styles.descriptionTitleView}>
            <PrimaryTitle text="Description" />
          </View>
          <View style={styles.descriptionTextView}>
            <PrimaryDescription text="Elevate your style with this classic button-up shirt, featuring breathable fabric, a tailored fit, and versatile colors for any occasion. " />
          </View>
        </View>
        <View style={styles.priceAddToCartView}>
          <View style={styles.priceView}>
            <QuinaryTitle text="$254.0" />
          </View>
          <View style={styles.addToCartView}>
            <CartIcon
              style={styles.cartIcon}
              name="cart-outline"
              size={30}
              color={AppColors.Black}
            />
            <SecondaryTitle text="Add to cart" />
          </View>
        </View>

        {/*  */}
      </View>
    </ScrollView>
  );
};

export default ProductDescription;

const styles = StyleSheet.create({
  container: {
    height: height,
    //flex: 1,
  },
  imageView: {
    height: height,
  },
  image: {
    height: 500,
    width: '100%',
  },
  detailView: {
    //height: height - 250,
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    backgroundColor: AppColors.White,
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  nameDescriptionCounterView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nameDescriptionView: {},
  counterView: {
    width: '28%',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 5,
    backgroundColor: AppColors.LightGray2,
  },
  productCounterText: {
    fontSize: 18,
    paddingTop: 5,
    color: AppColors.Black,
    fontFamily: AppFonts.Medium,
  },
  startReviewStockView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  starsReviewView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stockView: {},
  titleSizeColorView: {
    paddingVertical: 15,
  },
  stockAvailableText: {
    fontSize: 16,
    color: AppColors.Black,
    fontFamily: AppFonts.SemiBold,
  },
  sizeTitleView: {},
  sizeColorView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sizeView: {
    width: '55%',
    flexDirection: 'row',
  },
  colorView: {
    backgroundColor: AppColors.White,
    elevation: 10,
    padding: 10,
    borderRadius: 20,
    width: '45%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  titleDescriptionView: {},
  descriptionTitleView: {
    paddingVertical: 10,
  },
  descriptionTextView: {
    paddingBottom: 20,
  },
  priceAddToCartView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: AppColors.Black,
    paddingHorizontal: 15,
    borderRadius: 10,
    paddingVertical: 15,
  },
  priceView: {
    width: '40%',
  },
  addToCartView: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.White,
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 8,
    borderRadius: 10,
  },
  cartIcon: {
    paddingRight: 10,
    paddingBottom: 5,
  },
});
