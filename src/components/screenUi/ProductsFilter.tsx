import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Pressable,
} from 'react-native';

import {AppColors} from '../../constants/AppColors';
import {AppFonts} from '../../constants/AppFonts';

import PrimaryHeader from '../common/Headers/PrimaryHeader';
import SecondaryTitle from '../common/Titles/SecondaryTitle';
import QuaternaryButton from '../common/Buttons/QuaternaryButton';

import {ProductCatagories} from '../../constants/FlatlistData';
import {ProductSortByData} from '../../constants/FlatlistData';
import {RatingStarData} from '../../constants/FlatlistData';

import Star from '../common/Star';

import TickIcon from 'react-native-vector-icons/MaterialIcons';
import CircleIcon from 'react-native-vector-icons/Entypo';

import {InterfaceProductSortByData} from '../../@types/AppTyping';
import {InterfaceProductCatagories} from '../../@types/AppTyping';
import {InterfaceRatingStarData} from '../../@types/AppTyping';

import {StarRatingDisplay} from 'react-native-star-rating-widget';

interface Iprops {
  selectedCatagory: number;
  catagoryPressed: (item: InterfaceProductCatagories) => void;
  selectedSortBy: number;
  sortByPressed: (item: InterfaceProductSortByData) => void;
  onHeaderBackArrowPressed: () => void;
  selectedRating: number;
  onApplyNowPressed: () => void;
  onSeletedRatingPressed: (item: InterfaceRatingStarData) => void;
}

const ProductsFilter = (props: Iprops) => {
  const renderCatagories = ({item}: {item: InterfaceProductCatagories}) => {
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

  const renderSortBy = ({item}: {item: InterfaceProductSortByData}) => {
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

  const renderRatingStars = ({item}: {item: InterfaceRatingStarData}) => {
    return (
      <TouchableOpacity
        style={styles.renderRatingStarIconView}
        onPress={() => props.onSeletedRatingPressed(item)}>
        <View style={styles.renderStarView}>
          <StarRatingDisplay rating={item.ratingNumber} />
        </View>
        <View style={styles.iconView}>
          {props.selectedRating === item.id ? (
            <TickIcon
              style={styles.doneIcon}
              name="done"
              size={20}
              color={AppColors.White}
            />
          ) : (
            <CircleIcon
              style={styles.doneIcon}
              name="circle"
              size={20}
              color={AppColors.Black}
            />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.detailsView}>
        <View style={styles.headerView}>
          <PrimaryHeader
            showSearchIcon={true}
            onHeaderBackArrowPressed={props.onHeaderBackArrowPressed}
          />
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
        <View style={styles.ratingTitleView}>
          <SecondaryTitle text="Rating" />
        </View>
        <View style={styles.ratingView}>
          <FlatList
            data={RatingStarData}
            renderItem={renderRatingStars}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>

      <View style={styles.buttonView}>
        <QuaternaryButton onPress={props.onApplyNowPressed} text="Apply Now" />
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

  //render stars
  renderRatingStarIconView: {
    marginBottom: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  renderStarView: {},
  iconView: {
    padding: 2,
    borderRadius: 100,
    backgroundColor: AppColors.Black,
  },
  doneIcon: {},

  //main
  container: {
    flex: 1,
    backgroundColor: AppColors.White,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  detailsView: {},
  headerView: {},
  catagoriesFlatlistView: {
    width: '100%',
    paddingTop: 10,
  },
  sortByTitle: {
    paddingTop: 20,
    paddingBottom: 10,
  },
  sortByFlatlistView: {},
  ratingTitleView: {
    paddingTop: 20,
  },

  ratingView: {
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  starsView: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectionView: {},
  buttonView: {},

  //
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  starRow: {
    flexDirection: 'row',
  },
  star: {
    fontSize: 24,
    color: '#FFD700', // Gold color for stars
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ccc',
    marginLeft: 10,
  },
  selectedRadio: {
    backgroundColor: '#000',
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#000',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
