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

import {ProductCatagories, ShirtsData} from '../../constants/FlatlistData';

const Home = props => {
  const renderCategories = ({item}) => {
    return (
      <TouchableOpacity
        style={[
          styles.renderCategoriesContainer,
          props.selectedCategory === item.id ? styles.selectedCategory : null,
        ]}
        onPress={() => props.categoryPressed(item)}>
        <Text
          style={[
            styles.renderCategoryText,
            props.selectedCategory === item.id
              ? styles.renderSelectedCategoryText
              : null,
          ]}>
          {item.CatagoryName}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderTopDresses = ({item}) => {
    return (
      <View style={styles.renderTopDressesView}>
        <View style={styles.renderProductImageView}>
          <Image
            resizeMethod="stretch"
            source={item.ProductImage}
            style={styles.renderProductImage}
          />
        </View>
        <View style={styles.renderProductDetailView}>
          <ProductNameText text={item.ProductName} />
          <View style={styles.renderProductDescriptionTextView}>
            <ProductDescriptionText text="ProductDescription" />
          </View>
          <ProductPriceText text={item.ProductPrice} />
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <QuaternaryHeader
        showUserImage={true}
        onUserImagePressed={props.onUserImagePressed}
      />
      <View style={styles.titleDescriptionView}>
        <PrimaryTitle text="Welcome," />
        <SecondaryDescription text="Our Fashion App" />
      </View>
      <View style={styles.textInputFilterView}>
        <View style={styles.textInputView}>
          <PrimaryTextInput placeholder="Search" />
        </View>
        <View style={styles.filterButtonView}>
          <FilterButton onPress={props.onFilterIconPressed} />
        </View>
      </View>
      <View style={styles.hotProductView}>
        <View style={styles.imageView}>
          <Image
            style={styles.image}
            source={require('../../assets/images/Products/Shirts/shirt1.jpg')}
          />
        </View>
        <View style={styles.detailView}>
          <View style={styles.hotProductTitleDescriptionPriceView}>
            <ProductNameText text="Alex Arigato" />
            <ProductDescriptionText text="Clean 90 triple sneakers" />
            <ProductPriceText text="245.00" />
          </View>
          <TouchableOpacity style={styles.arrowRrightButton}>
            <ArrowIcon
              style={styles.icon}
              name="keyboard-arrow-right"
              size={25}
              color={AppColors.White}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.categoriesView}>
        <View>
          <SecondaryTitle text="Categories" />
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
            <SecondaryTitle text="Top Dresses" />
            <TouchableOpacity onPress={props.onViewAllPresses}>
              <PrimaryDescription text="View All" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.topDressesFlatlistView}>
          <FlatList
            numColumns={2}
            showsVerticalScrollIndicator={false}
            data={ShirtsData}
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
  renderCategoriesContainer: {
    borderWidth: 0.5,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
    margin: 4,
    justifyContent: 'center',
  },
  selectedCategory: {
    backgroundColor: AppColors.Black,
  },
  renderCategoryText: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: AppFonts.SemiBold,
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
    alignItems: 'center',
  },
  renderProductDescriptionTextView: {
    marginVertical: -5,
  },

  //main
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
  hotProductTitleDescriptionPriceView: {},
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
