import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';

import {AppColors} from '../../constants/AppColors';
import {AppFonts} from '../../constants/AppFonts';

import PrimaryHeader from '../common/Headers/PrimaryHeader';
import SecondaryTitle from '../common/Titles/SecondaryTitle';

import {InterfaceProductTyping} from '../../@types/AppTyping';

const width = Dimensions.get('window').width;

interface Iprops {
  isDarkModeActive: boolean;
  onProductPressed: (item: InterfaceProductTyping) => void;
  onHeaderBackArrowPressed: () => void;
  categoryName: string;
  flatListProductsData: InterfaceProductTyping[];
}
interface Item {
  name: string;
  productId: number;
}

const Products = (props: Iprops) => {
  const renderProducts = ({item}: {item: InterfaceProductTyping}) => {
    return (
      <TouchableOpacity
        onPress={() => props.onProductPressed(item)}
        style={styles.renderContainer}>
        <View style={styles.renderImageView}>
          <Image
            resizeMode="cover"
            style={styles.renderImage}
            source={item.ProductImage}
          />
        </View>
        <View style={styles.renderProductDetailView}>
          <Text
            style={{
              ...styles.renderProductName,
              color: props.isDarkModeActive ? AppColors.White : AppColors.Black,
            }}>
            {item.ProductName}
          </Text>
          <Text
            numberOfLines={1}
            style={{
              ...styles.renderProductDescription,
              color: props.isDarkModeActive
                ? AppColors.GrayDescriptonText
                : AppColors.GrayDescriptonText,
            }}>
            {item.ProductDescription}
          </Text>
          <Text
            style={{
              ...styles.renderProductPrice,
              color: props.isDarkModeActive ? AppColors.White : AppColors.Black,
            }}>
            ${item.ProductPrice}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView
      style={{
        ...styles.container,
        backgroundColor: props.isDarkModeActive
          ? AppColors.Black
          : AppColors.White,
      }}>
      <PrimaryHeader
        isDarkMode={props.isDarkModeActive}
        showSearchIcon={true}
        onHeaderBackArrowPressed={props.onHeaderBackArrowPressed}
      />
      <View style={styles.titleView}>
        <SecondaryTitle
          text={props.categoryName}
          isDarkMode={props.isDarkModeActive}
        />
      </View>
      <View style={styles.flatlistView}>
        <FlatList
          numColumns={2}
          showsVerticalScrollIndicator={false}
          data={props.flatListProductsData}
          renderItem={renderProducts}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </ScrollView>
  );
};

export default Products;

const styles = StyleSheet.create({
  renderContainer: {
    margin: 10,
  },
  renderImageView: {},
  renderImage: {
    borderRadius: 15,
    height: 150,
    width: width - 230,
  },
  renderProductDetailView: {},
  renderProductName: {
    textAlign: 'center',
    fontSize: 16,
    color: AppColors.Black,
    fontFamily: AppFonts.Bold,
  },
  renderProductDescription: {
    textAlign: 'center',
    fontSize: 15,
    color: AppColors.Black,
    fontFamily: AppFonts.Regular,
  },
  renderProductPrice: {
    textAlign: 'center',
    fontSize: 16,
    color: AppColors.Black,
    fontFamily: AppFonts.Bold,
  },

  container: {
    flex: 1,
    backgroundColor: AppColors.White,
    paddingHorizontal: 15,
  },
  titleView: {
    paddingLeft: 5,
  },
  flatlistView: {
    flex: 1,
    width: width,
  },
});
