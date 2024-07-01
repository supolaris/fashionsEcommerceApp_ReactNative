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

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Products = props => {
  const renderShirts = ({item}) => {
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
          <Text style={styles.renderProductName}>{item.ProductName}</Text>
          <Text numberOfLines={1} style={styles.renderProductDescription}>
            {item.ProductDescription}
          </Text>
          <Text style={styles.renderProductPrice}>${item.ProductPrice}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <PrimaryHeader
        showSearchIcon={true}
        onHeaderBackArrowPressed={props.onHeaderBackArrowPressed}
      />
      <View style={styles.titleView}>
        <SecondaryTitle text="Clothes" />
      </View>
      <View style={styles.flatlistView}>
        <FlatList
          numColumns={2}
          showsVerticalScrollIndicator={false}
          // data={props.CatagoryApiName}
          data={props.flatListProductsData}
          renderItem={renderShirts}
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
  flatlistView: {
    flex: 1,
    width: width,
  },
});
