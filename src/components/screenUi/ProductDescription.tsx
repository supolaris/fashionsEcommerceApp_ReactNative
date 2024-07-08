import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import {AppColors} from '../../constants/AppColors';
import {AppFonts} from '../../constants/AppFonts';

import PlusIcon from 'react-native-vector-icons/Entypo';
import MinusIcon from 'react-native-vector-icons/Entypo';
import CartIcon from 'react-native-vector-icons/Ionicons';

import PrimaryTitle from '../common/Titles/PrimaryTitle';
import PrimaryDescription from '../common/Descriptions/PrimaryDescription';
import ColorButton from '../common/Buttons/ColorButton';
import SecondaryTitle from '../common/Titles/SecondaryTitle';
import QuinaryTitle from '../common/Titles/QuinaryTitle';
import SecondaryHeader from '../common/Headers/SecondaryHeader';
import Star from '../common/Star';

import {ProductSizeData} from '../../constants/FlatlistData';
import {InterfaceProductSizeData} from '../../@types/AppTyping';
import {InterfaceProductTyping} from '../../@types/AppTyping';

const height = Dimensions.get('window').height;

interface Iprops {
  isItemInCart: boolean | undefined;
  isDarkModeActive: boolean;
  item: InterfaceProductTyping;
  selectedProductSize: number | undefined;
  onBackArrowPressed: () => void;
  onCartIconPressed: () => void;
  onReviewPressed: () => void;
  onAddToCartPressed: () => void;
  onProductSizePressed: (id: number) => void;
  onMinusIconPressed: (item: InterfaceProductTyping) => void;
  onPlusIconPressed: (item: InterfaceProductTyping) => void;
}
//const ProductDescription: FC<Iprops> = ({item, ...props}) => {
const ProductDescription = (props: Iprops) => {
  const item = props.item;
  const renderProductSize = ({item}: {item: InterfaceProductSizeData}) => {
    return (
      <TouchableOpacity
        onPress={() => props.onProductSizePressed(item.id)}
        style={[
          styles.renderProductSizeContainer,
          props.isDarkModeActive
            ? props.selectedProductSize === item.id
              ? styles.darkModeSelectedRenderProductSizeContainer
              : null
            : props.selectedProductSize === item.id
            ? styles.selectedRenderProductSizeContainer
            : null,
        ]}>
        <Text
          style={[
            props.isDarkModeActive
              ? styles.darkModeRenderProductSizeText
              : styles.renderProductSizeText,
            props.selectedProductSize === item.id
              ? props.isDarkModeActive
                ? styles.darkModeSelectedRenderProductSizeText
                : styles.selectedRenderProductSizeText
              : null,
          ]}>
          {item.SizeName}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageView}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={item.ProductImage}
        />
      </View>
      <View style={styles.headerView}>
        <SecondaryHeader
          showCartIcon={true}
          onBackArrowPressed={props.onBackArrowPressed}
          onCartIconPressed={props.onCartIconPressed}
        />
      </View>
      <View
        style={
          props.isDarkModeActive ? styles.darkModeDetailView : styles.detailView
        }>
        <View style={styles.nameDescriptionCounterView}>
          <View style={styles.nameDescriptionView}>
            <View>
              <PrimaryTitle
                text={item.ProductName}
                isDarkMode={props.isDarkModeActive}
              />
            </View>
            <View>
              <PrimaryDescription text={item.ProductDescription} />
            </View>
          </View>
          <View style={styles.counterView}>
            <MinusIcon
              onPress={() => props.onMinusIconPressed(item)}
              name="minus"
              size={22}
              color={AppColors.Black}
            />
            <Text style={styles.productCounterText}>{item.NoOfProducts}</Text>

            <PlusIcon
              onPress={() => props.onPlusIconPressed(item)}
              name="plus"
              size={20}
              color={AppColors.Black}
            />
          </View>
        </View>

        <View style={styles.startReviewStockView}>
          <View style={styles.starsReviewView}>
            <View style={styles.startView}>
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </View>
            <TouchableOpacity onPress={props.onReviewPressed}>
              <Text style={styles.reviewText}>320 Reviews</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.stockView}>
            <Text
              style={
                props.isDarkModeActive
                  ? styles.darkModeStockAvailableText
                  : styles.stockAvailableText
              }>
              Available in stock
            </Text>
          </View>
        </View>
        <View style={styles.titleSizeColorView}>
          <View style={styles.sizeTitleView}>
            <PrimaryTitle text="Size" isDarkMode={props.isDarkModeActive} />
          </View>
          <View style={styles.sizeColorView}>
            <View style={styles.sizeView}>
              <FlatList
                horizontal={true}
                data={ProductSizeData}
                renderItem={renderProductSize}
                keyExtractor={item => item.id.toString()}
              />
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
            <PrimaryTitle
              text="Description"
              isDarkMode={props.isDarkModeActive}
            />
          </View>
          <View style={styles.descriptionTextView}>
            <PrimaryDescription text="Elevate your style with this classic button-up shirt, featuring breathable fabric, a tailored fit, and versatile colors for any occasion. " />
          </View>
        </View>
        <View
          style={
            props.isDarkModeActive
              ? styles.darkModePriceAddToCartView
              : styles.priceAddToCartView
          }>
          <View
            style={[
              styles.priceView,
              {flexDirection: 'row', alignItems: 'center'},
            ]}>
            <Text
              style={
                props.isDarkModeActive
                  ? styles.darkModeDollarText
                  : styles.dollarText
              }>
              $
            </Text>
            <QuinaryTitle
              text={item.ProductPrice}
              isDarkMode={props.isDarkModeActive}
            />
          </View>
          {props.isItemInCart ? (
            <View
              style={
                props.isDarkModeActive
                  ? {...styles.darkModeAddToCartView, opacity: 0.6}
                  : {...styles.addToCartView, opacity: 0.6}
              }>
              <CartIcon
                style={styles.cartIcon}
                name="cart-outline"
                size={30}
                color={
                  props.isDarkModeActive ? AppColors.White : AppColors.Black
                }
              />
              <SecondaryTitle
                text="Add to cart"
                isDarkMode={props.isDarkModeActive}
              />
            </View>
          ) : (
            <TouchableOpacity
              onPress={props.onAddToCartPressed}
              style={
                props.isDarkModeActive
                  ? styles.darkModeAddToCartView
                  : styles.addToCartView
              }>
              <CartIcon
                style={styles.cartIcon}
                name="cart-outline"
                size={30}
                color={
                  props.isDarkModeActive ? AppColors.White : AppColors.Black
                }
              />
              <SecondaryTitle
                text="Add to cart"
                isDarkMode={props.isDarkModeActive}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductDescription;

const styles = StyleSheet.create({
  //flatlist size
  renderProductSizeContainer: {
    paddingHorizontal: 15,
    paddingVertical: 2,
    borderRadius: 100,
    borderWidth: 0.5,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  darkModeSelectedRenderProductSizeContainer: {
    backgroundColor: AppColors.White,
  },
  selectedRenderProductSizeContainer: {
    backgroundColor: AppColors.Black,
  },
  darkModeRenderProductSizeText: {
    textAlign: 'center',
    fontSize: 18,
    color: AppColors.White,
    fontFamily: AppFonts.SemiBold,
  },
  renderProductSizeText: {
    textAlign: 'center',
    fontSize: 18,
    color: AppColors.Black,
    fontFamily: AppFonts.SemiBold,
  },
  darkModeSelectedRenderProductSizeText: {
    textAlign: 'center',
    fontSize: 18,
    color: AppColors.Black,
    fontFamily: AppFonts.SemiBold,
  },
  selectedRenderProductSizeText: {
    textAlign: 'center',
    fontSize: 18,
    color: AppColors.White,
    fontFamily: AppFonts.SemiBold,
  },

  //main
  container: {
    height: height,
  },
  headerView: {
    width: '100%',
    paddingHorizontal: 15,
    position: 'absolute',
    top: 0,
    bottom: 0,
  },
  imageView: {
    height: 850,
  },
  image: {
    height: 500,
    width: '100%',
  },
  darkModeDetailView: {
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    backgroundColor: AppColors.Black,
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  detailView: {
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
    paddingVertical: 4,
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
  startView: {
    flexDirection: 'row',
  },
  reviewText: {
    paddingTop: 5,
    paddingLeft: 5,
    fontSize: 14,
    color: AppColors.Black,
    fontFamily: AppFonts.SemiBold,
  },
  stockView: {},
  titleSizeColorView: {
    paddingVertical: 15,
  },
  darkModeStockAvailableText: {
    fontSize: 16,
    color: AppColors.White,
    fontFamily: AppFonts.SemiBold,
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
  darkModePriceAddToCartView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: AppColors.White,
    paddingHorizontal: 10,
    borderRadius: 10,
    paddingVertical: 10,
  },

  priceAddToCartView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: AppColors.Black,
    paddingHorizontal: 10,
    borderRadius: 10,
    paddingVertical: 10,
  },
  priceView: {
    width: '40%',
  },
  darkModeDollarText: {
    fontSize: 25,
    color: AppColors.Black,
    fontFamily: AppFonts.Bold,
  },
  dollarText: {
    fontSize: 25,
    color: AppColors.White,
    fontFamily: AppFonts.Bold,
  },
  darkModeAddToCartView: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.Black,
    paddingHorizontal: 15,
    paddingTop: 8,
    paddingBottom: 6,
    borderRadius: 10,
  },
  addToCartView: {
    opacity: 10,
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.White,
    paddingHorizontal: 15,
    paddingTop: 8,
    paddingBottom: 6,
    borderRadius: 10,
  },
  cartIcon: {
    paddingRight: 10,
    paddingBottom: 5,
  },
});
