import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

import {AppColors} from '../../constants/AppColors';
import {AppFonts} from '../../constants/AppFonts';

import PrimaryHeader from '../common/Headers/PrimaryHeader';
import SecondaryTitle from '../common/Titles/SecondaryTitle';

import {ProductCatagories} from '../../constants/FlatlistData';
import {ProductSortByData} from '../../constants/FlatlistData';
import QuaternaryButton from '../common/Buttons/QuaternaryButton';

const ProductsFilter = props => {
  const renderCatagories = ({item}) => {
    return (
      <TouchableOpacity
        style={[
          styles.renderCatagoriesContainer,
          props.selectedCatagory === item.id ? styles.selectedCatagory : null,
        ]}
        onPress={() => props.catagoryPressed(item)}>
        <Text
          style={[
            styles.renderCatagoriesText,
            props.selectedCatagory === item.id
              ? styles.renderSelectedCatagoriesText
              : null,
          ]}>
          {item.CatagoryName}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderSortBy = ({item}) => {
    return (
      <TouchableOpacity
        style={[
          styles.renderSortByContainer,
          props.selectedSortBy === item.id ? styles.selectedSortBy : null,
        ]}
        onPress={() => props.sortByPressed(item)}>
        <Text
          style={[
            styles.renderSortByText,
            props.selectedSortBy === item.id
              ? styles.renderSelectedSortByText
              : null,
          ]}>
          {item.SortName}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.detailsView}>
        <View style={styles.headerView}>
          <PrimaryHeader showSearchIcon={true} />
        </View>
        <SecondaryTitle text="Categories" />
        <View style={styles.catagoriesFlatlistView}>
          <FlatList
            numColumns={4}
            data={ProductCatagories}
            renderItem={renderCatagories}
            keyExtractor={item => item.id.toString()}
          />
        </View>
        <View style={styles.sortByTitle}>
          <SecondaryTitle text="Sort by" />
        </View>
        <View style={styles.sortByFlatlistView}>
          <FlatList
            numColumns={3}
            data={ProductSortByData}
            renderItem={renderSortBy}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      </View>
      <View style={styles.buttonView}>
        <QuaternaryButton text="Apply Now" />
      </View>
    </View>
  );
};

export default ProductsFilter;

const styles = StyleSheet.create({
  //Catagories flatlist
  renderCatagoriesContainer: {
    borderWidth: 0.5,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
    margin: 4,
    justifyContent: 'center',
  },
  selectedCatagory: {
    backgroundColor: AppColors.Black,
  },
  renderCatagoriesText: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: AppFonts.SemiBold,
    color: AppColors.Black,
  },
  renderSelectedCatagoriesText: {
    color: AppColors.White,
  },

  //Sort by Flatlist
  renderSortByContainer: {
    borderWidth: 0.5,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
    margin: 4,
    justifyContent: 'center',
  },
  selectedSortBy: {
    backgroundColor: AppColors.Black,
  },
  renderSortByText: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: AppFonts.SemiBold,
    color: AppColors.Black,
  },
  renderSelectedSortByText: {
    color: AppColors.White,
  },

  //main
  container: {
    flex: 1,
    backgroundColor: AppColors.White,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  detailsView: {},

  headerView: {
    paddingBottom: 20,
  },
  catagoriesFlatlistView: {
    width: '100%',
    paddingTop: 10,
  },
  sortByTitle: {
    paddingTop: 20,
    paddingBottom: 10,
  },
  buttonView: {},
});
