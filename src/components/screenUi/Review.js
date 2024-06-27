import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';

import {AppColors} from '../../constants/AppColors';
import {AppFonts} from '../../constants/AppFonts';

import PrimaryHeader from '../common/Headers/PrimaryHeader';
import SecondaryTitle from '../common/Titles/SecondaryTitle';

import {ReviewData} from '../../constants/FlatlistData';
import PrimaryTitle from '../common/Titles/PrimaryTitle';
import Star from '../common/Star';

const Review = () => {
  const renderNotificaton = ({item}) => {
    return (
      <View style={styles.renderContainer}>
        <View style={styles.renderImageView}>
          <Image style={styles.renderImage} source={item.image} />
        </View>
        <View style={styles.renderDetailView}>
          <View style={styles.nameDataRatingView}>
            <View style={styles.nameTimeView}>
              <SecondaryTitle text={item.name} />
              <Text style={styles.renderTimeText}>{item.time}</Text>
            </View>
            <View style={styles.starsView}>
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </View>
          </View>
          <View style={styles.renderReviewView}>
            <Text style={styles.renderReviewText}>{item.message}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerView}>
        <PrimaryHeader showSearchIcon={true} />
      </View>
      <View style={styles.titleView}>
        <SecondaryTitle text="Reviews Client" />
      </View>
      <View style={styles.flatListView}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={ReviewData}
          renderItem={renderNotificaton}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </ScrollView>
  );
};

export default Review;

const styles = StyleSheet.create({
  //flatlist
  renderContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    elevation: 10,
    backgroundColor: AppColors.White,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  renderImageView: {},
  renderImage: {
    height: 80,
    width: 70,
    borderRadius: 20,
  },
  renderDetailView: {
    width: '75%',
    paddingLeft: 10,
  },
  nameDataRatingView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameTimeView: {},
  renderTimeText: {
    marginTop: -6,
    paddingBottom: 5,
  },
  starsView: {
    flexDirection: 'row',
  },
  renderNameText: {
    fontSize: 14,
    color: AppColors.Black,
    fontFamily: AppFonts.Bold,
  },
  renderReviewView: {},
  renderReviewText: {
    fontSize: 14,
    color: AppColors.Black,
    fontFamily: AppFonts.SemiBold,
  },

  //main
  container: {
    flex: 1,
    backgroundColor: AppColors.White,
    paddingHorizontal: 10,
    //paddingTop: 20,
  },
  headerView: {
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 5,
  },
  titleView: {
    paddingHorizontal: 5,
  },
  flatListView: {
    flex: 1,
    paddingBottom: 65,
  },
});
