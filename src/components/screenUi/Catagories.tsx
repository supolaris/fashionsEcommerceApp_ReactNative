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
import {InterfaceProductCatagoriesData} from '../../@types/AppTyping';

interface Iprops {
  isDarkModeActive: boolean;
  onSearchValue: string;
  onCatagoryPressed: (item: any) => void;
  onHeaderBackArrowPressed: () => void;
  onSearchChangeText: (val: any) => void;
}

const Catagories = (props: Iprops) => {
  const renderCatagories = ({item}: {item: InterfaceProductCatagoriesData}) => {
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
    <ScrollView
      style={{
        ...styles.container,
        backgroundColor: props.isDarkModeActive
          ? AppColors.Black
          : AppColors.White,
      }}>
      <View style={styles.headerView}>
        <PrimaryHeader
          isDarkMode={props.isDarkModeActive}
          showSearchIcon={false}
          onHeaderBackArrowPressed={props.onHeaderBackArrowPressed}
        />
      </View>
      <View style={styles.textInputView}>
        <PrimaryTextInput
          placeholder="Search Categories"
          value={props.onSearchValue}
          onChangeText={(val: any) => props.onSearchChangeText(val)}
        />
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
