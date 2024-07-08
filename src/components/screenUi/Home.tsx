import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';

import {AppColors} from '../../constants/AppColors';
import {AppFonts} from '../../constants/AppFonts';

import QuaternaryHeader from '../common/Headers/QuaternaryHeader';
import PrimaryTitle from '../common/Titles/PrimaryTitle';
import SecondaryDescription from '../common/Descriptions/SecondaryDescription';
import PrimaryTextInput from '../common/TextInputs/PrimaryTextInput';
import FilterButton from '../common/Buttons/FilterButton';
import ProductNameText from '../common/Texts/ProductNameText';
import ProductDescriptionText from '../common/Texts/ProductDescriptionText';
import ProductPriceText from '../common/Texts/ProductPriceText';
import SecondaryTitle from '../common/Titles/SecondaryTitle';
import PrimaryDescription from '../common/Descriptions/PrimaryDescription';

import ArrowIcon from 'react-native-vector-icons/MaterialIcons';

import {BagsData, ProductCatagories} from '../../constants/FlatlistData';

import {InterfaceProductTyping} from '../../@types/AppTyping';
import {InterfaceProductCatagories} from '../../@types/AppTyping';

interface Iprops {
  isDarkModeActive: boolean;
  // text: string;
  selectedCategory: number;
  searchValue: string;
  FlatlistData: InterfaceProductTyping[];
  onUserImagePressed: () => void;
  onFilterIconPressed: () => void;
  onViewAllPresses: () => void;
  //searchOnChangeText: (text: string) => void;
  onSearchChangeText: (text: any) => void;
  onHeaderBackArrowPressed: () => void;
  categoryPressed: (item: InterfaceProductCatagories) => void;
  onHomeProductPressed: (item: InterfaceProductTyping) => void;
}

const Home = (props: Iprops) => {
  const renderCategories = ({item}: {item: InterfaceProductCatagories}) => {
    return (
      <TouchableOpacity
        style={[
          styles.renderCategoriesContainer,

          props.isDarkModeActive
            ? props.selectedCategory === item.id
              ? styles.darkModeSelectedCategory
              : null
            : props.selectedCategory === item.id
            ? styles.selectedCategory
            : null,
        ]}
        onPress={() => props.categoryPressed(item)}>
        <Text
          style={[
            props.isDarkModeActive
              ? styles.darkModeRenderCategoryText
              : styles.renderCategoryText,
            props.isDarkModeActive
              ? props.selectedCategory === item.id
                ? styles.darkModeRenderSelectedCategoryText
                : null
              : props.selectedCategory === item.id
              ? styles.renderSelectedCategoryText
              : null,
          ]}>
          {item.CatagoryName}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderTopDresses = ({item}: {item: InterfaceProductTyping}) => {
    return (
      <TouchableOpacity
        style={styles.renderTopDressesView}
        onPress={() => props.onHomeProductPressed(item)}>
        <View style={styles.renderProductImageView}>
          <Image
            resizeMode="stretch"
            source={item.ProductImage}
            style={styles.renderProductImage}
          />
        </View>
        <View style={styles.renderProductDetailView}>
          <ProductNameText
            text={item.ProductName}
            isDarkMode={props.isDarkModeActive}
          />
          <View style={styles.renderProductDescriptionTextView}>
            <ProductDescriptionText text="ProductDescription" />
          </View>
          <ProductPriceText
            text={item.ProductPrice}
            isDarkMode={props.isDarkModeActive}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView
      style={
        props.isDarkModeActive ? styles.darkModeContainer : styles.container
      }>
      <QuaternaryHeader
        onHeaderBackArrowPressed={props.onHeaderBackArrowPressed}
        showUserImage={true}
        onUserImagePressed={props.onUserImagePressed}
      />
      <View style={styles.titleDescriptionView}>
        <PrimaryTitle text="Welcome," isDarkMode={props.isDarkModeActive} />
        <SecondaryDescription text="Our Fashion App" />
      </View>
      <View style={styles.textInputFilterView}>
        <View style={styles.textInputView}>
          <PrimaryTextInput
            value={props.searchValue}
            onChangeText={(val: any) => props.onSearchChangeText(val)}
            placeholder="Search"
          />
        </View>
        <View style={styles.filterButtonView}>
          <FilterButton
            onPress={props.onFilterIconPressed}
            isDarkMode={props.isDarkModeActive}
          />
        </View>
      </View>
      <View
        style={
          props.isDarkModeActive
            ? styles.darkModeHotProductView
            : styles.hotProductView
        }>
        <View style={styles.imageView}>
          <Image
            style={styles.image}
            source={require('../../assets/images/Products/Shirts/shirt1.jpg')}
          />
        </View>
        <View style={styles.detailView}>
          <View
            style={
              props.isDarkModeActive
                ? styles.darkModeHotProductTitleDescriptionPriceView
                : styles.hotProductTitleDescriptionPriceView
            }>
            <ProductNameText
              text="Alex Arigato"
              isDarkMode={props.isDarkModeActive}
            />
            <ProductDescriptionText text="Clean 90 triple sneakers" />
            <ProductPriceText
              text="245.00"
              isDarkMode={props.isDarkModeActive}
            />
          </View>
          <TouchableOpacity
            style={
              props.isDarkModeActive
                ? styles.darkModeArrowRrightButton
                : styles.arrowRrightButton
            }>
            <ArrowIcon
              style={styles.icon}
              name="keyboard-arrow-right"
              size={25}
              color={props.isDarkModeActive ? AppColors.Black : AppColors.White}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.categoriesView}>
        <View>
          <SecondaryTitle
            text="Categories"
            isDarkMode={props.isDarkModeActive}
          />
        </View>
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={ProductCatagories}
            renderItem={renderCategories}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      </View>
      <View style={styles.topDressesView}>
        <View style={styles.topDressesTitleView}>
          <View style={styles.topDressesSeeAllView}>
            <SecondaryTitle
              text="Top Dresses"
              isDarkMode={props.isDarkModeActive}
            />
            <TouchableOpacity onPress={props.onViewAllPresses}>
              <PrimaryDescription text="View All" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.topDressesFlatlistView}>
          <FlatList
            numColumns={2}
            showsVerticalScrollIndicator={false}
            data={props.FlatlistData}
            renderItem={renderTopDresses}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  //categories flatlist
  darkModeRenderCategoriesContainer: {},
  renderCategoriesContainer: {
    borderWidth: 0.5,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
    margin: 4,
    justifyContent: 'center',
  },
  darkModeSelectedCategory: {
    backgroundColor: AppColors.White,
  },
  selectedCategory: {
    backgroundColor: AppColors.Black,
  },
  darkModeRenderCategoryText: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: AppFonts.SemiBold,
    color: AppColors.White,
  },
  renderCategoryText: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: AppFonts.SemiBold,
    color: AppColors.Black,
  },
  darkModeRenderSelectedCategoryText: {
    color: AppColors.Black,
  },
  renderSelectedCategoryText: {
    color: AppColors.White,
  },

  //top dresses flatlist
  renderTopDressesView: {
    margin: 10,
  },
  renderProductImageView: {},
  renderProductImage: {
    height: 150,
    width: 165,
    borderRadius: 10,
  },
  renderProductDetailView: {
    paddingTop: 5,
    alignItems: 'center',
  },
  renderProductDescriptionTextView: {
    marginVertical: -5,
  },

  //main
  darkModeContainer: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: AppColors.Black,
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: AppColors.White,
  },
  titleDescriptionView: {},
  textInputFilterView: {
    paddingTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInputView: {
    width: '84%',
  },
  filterButtonView: {},
  darkModeHotProductView: {
    marginHorizontal: 5,
    flexDirection: 'row',
    padding: 10,
    backgroundColor: AppColors.Black,
    elevation: 10,
    shadowColor: AppColors.White,
    borderRadius: 10,
    marginVertical: 20,
  },
  hotProductView: {
    marginHorizontal: 5,
    flexDirection: 'row',
    padding: 10,
    backgroundColor: AppColors.White,
    elevation: 10,
    borderRadius: 10,
    marginVertical: 20,
  },
  imageView: {},
  image: {
    height: 75,
    width: 75,
    borderRadius: 10,
  },
  detailView: {
    width: '75%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
  },
  darkModeHotProductTitleDescriptionPriceView: {
    padding: 3,
    backgroundColor: AppColors.Black,
    borderRadius: 5,
  },
  hotProductTitleDescriptionPriceView: {
    padding: 3,
    backgroundColor: AppColors.Black,
    borderRadius: 5,
  },
  darkModeArrowRrightButton: {
    padding: 3,
    backgroundColor: AppColors.White,
    borderRadius: 5,
  },
  arrowRrightButton: {
    padding: 3,
    backgroundColor: AppColors.Black,
    borderRadius: 5,
  },
  icon: {},
  categoriesView: {},
  topDressesView: {
    paddingTop: 20,
  },
  topDressesTitleView: {},
  topDressesSeeAllView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  topDressesFlatlistView: {
    flex: 1,
    paddingBottom: 70,
  },
});
