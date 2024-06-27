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

import PrimaryHeader from '../common/Headers/PrimaryHeader';
import SecondaryTitle from '../common/Titles/SecondaryTitle';

import {NotificationsData} from '../../constants/FlatlistData';
import {AppFonts} from '../../constants/AppFonts';

const Notification = () => {
  const renderNotificaton = ({item}) => {
    return (
      <View style={styles.renderContainer}>
        <View style={styles.renderImageView}>
          <Image style={styles.renderImage} source={item.image} />
        </View>
        <View style={styles.nameCommentTimeView}>
          <Text style={styles.renderNameText}>
            {item.name}
            <Text style={styles.renderCommentText}> {item.message}</Text>
          </Text>
          <Text>{item.time} hour ago</Text>
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
        <SecondaryTitle text="Notification" />
      </View>
      <View style={styles.flatListView}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={NotificationsData}
          renderItem={renderNotificaton}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </ScrollView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  //flatlist
  renderContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 0.5,
  },
  renderImageView: {},
  renderImage: {
    height: 70,
    width: 70,
    borderRadius: 100,
  },
  nameCommentTimeView: {
    paddingLeft: 10,
    width: '80%',
  },
  renderNameText: {
    fontSize: 14,
    color: AppColors.Black,
    fontFamily: AppFonts.Bold,
  },
  renderCommentText: {
    fontFamily: AppFonts.Regular,
  },

  //main
  container: {
    flex: 1,
    backgroundColor: AppColors.White,
    paddingHorizontal: 15,
  },
  headerView: {
    paddingTop: 10,
    paddingBottom: 20,
  },
  titleView: {},
  flatListView: {
    flex: 1,
  },
});
