import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {AppColors} from '../../constants/AppColors';
import {AppFonts} from '../../constants/AppFonts';

import PrimaryHeader from '../common/Headers/PrimaryHeader';
import PrimaryTextInput from '../common/TextInputs/PrimaryTextInput';

import {ProductCatagoriesData} from '../../constants/FlatlistData';

const Catagories = props => {
  const renderCatagories = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => props.onCatagoryPressed(item)}
        style={styles.renderContainer}>
        <ImageBackground
          style={styles.renderBackgroundImage}
          source={item.CatagoryPicture}
          resizeMode="stretch">
          <View style={styles.renderDetailView}>
            <Text style={styles.renderCatagName}>{item.CatagoryName}</Text>
            <Text style={styles.renderProductsCount}>
              {item.NoOfProducts} Products
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerView}>
        <PrimaryHeader
          onHeaderBackArrowPressed={props.onHeaderBackArrowPressed}
        />
      </View>
      <View style={styles.textInputView}>
        <PrimaryTextInput placeholder="Search Categories" />
      </View>
      <View style={styles.flatLisView}>
        <FlatList
          numColumns={2}
          showsVerticalScrollIndicator={false}
          data={ProductCatagoriesData}
          renderItem={renderCatagories}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </ScrollView>
  );
};

export default Catagories;

const styles = StyleSheet.create({
  renderContainer: {
    width: '45%',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    borderRadius: 10,
  },
  renderBackgroundImage: {
    width: '100%',
    height: 200,
    overflow: 'hidden',
    borderRadius: 10,
    justifyContent: 'flex-end',
  },
  renderDetailView: {
    backgroundColor: AppColors.TransparentWhite,
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 5,
  },
  renderCatagName: {
    fontSize: 18,
    fontFamily: AppFonts.ExtraBold,
    color: AppColors.Black,
  },
  renderProductsCount: {
    fontSize: 16,
    fontFamily: AppFonts.SemiBold,
    color: AppColors.Black,
  },

  container: {
    flex: 1,
    backgroundColor: AppColors.White,
    paddingHorizontal: 15,
  },
  headerView: {},
  textInputView: {
    paddingBottom: 20,
  },
  flatLisView: {
    flex: 1,
    paddingBottom: 20,
  },
});
