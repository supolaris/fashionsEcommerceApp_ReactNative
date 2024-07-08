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

interface Iprops {
  onHeaderBackArrowPressed: () => void;
  isDarkModeActive: boolean;
}

const Notification = (props: Iprops) => {
  const renderNotificaton = ({item}: {item: any}) => {
    return (
      <View
        style={
          props.isDarkModeActive
            ? styles.darkModeRenderContainer
            : styles.renderContainer
        }>
        <View style={styles.renderImageView}>
          <Image style={styles.renderImage} source={item.image} />
        </View>
        <View style={styles.nameCommentTimeView}>
          <Text
            style={
              props.isDarkModeActive
                ? styles.darkModeRenderNameText
                : styles.renderCommentText
            }>
            {item.name}
            <Text
              style={
                props.isDarkModeActive
                  ? styles.darkModeRenderCommentText
                  : styles.renderCommentText
              }>
              {' '}
              {item.message}
            </Text>
          </Text>
          <Text>{item.time} hour ago</Text>
        </View>
      </View>
    );
  };

  return (
    <ScrollView
      style={
        props.isDarkModeActive ? styles.darkModeContainer : styles.container
      }>
      <View style={styles.headerView}>
        <PrimaryHeader
          isDarkMode={props.isDarkModeActive}
          showSearchIcon={true}
          onHeaderBackArrowPressed={props.onHeaderBackArrowPressed}
        />
      </View>
      <View style={styles.titleView}>
        <SecondaryTitle
          text="Notification"
          isDarkMode={props.isDarkModeActive}
        />
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
  darkModeRenderContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: AppColors.White,
  },
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
  darkModeRenderNameText: {
    fontSize: 14,
    color: AppColors.White,
    fontFamily: AppFonts.Medium,
  },

  renderNameText: {
    fontSize: 14,
    color: AppColors.Black,
    fontFamily: AppFonts.Bold,
  },
  darkModeRenderCommentText: {},
  renderCommentText: {
    fontFamily: AppFonts.Regular,
  },

  //main
  darkModeContainer: {
    flex: 1,
    backgroundColor: AppColors.Black,
    paddingHorizontal: 15,
  },
  container: {
    flex: 1,
    backgroundColor: AppColors.White,
    paddingHorizontal: 15,
  },
  headerView: {},
  titleView: {},
  flatListView: {
    flex: 1,
    paddingBottom: 65,
  },
});
