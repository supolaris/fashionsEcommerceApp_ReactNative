import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import {AppColors} from '../../constants/AppColors';

import PrimaryTitle from '../common/Titles/PrimaryTitle';
import PrimaryDescription from '../common/Descriptions/PrimaryDescription';
import ProfileDetailTitleIcon from '../common/ProfileDetailTitleIcon';

import UserIcon from 'react-native-vector-icons/FontAwesome5';
import CartIcon from 'react-native-vector-icons/Ionicons';
import HeartIcon from 'react-native-vector-icons/Feather';
import BusIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import CardIcon from 'react-native-vector-icons/AntDesign';
import SettingIcon from 'react-native-vector-icons/Feather';
import IIcon from 'react-native-vector-icons/AntDesign';
import ShieldIcon from 'react-native-vector-icons/Ionicons';
import BookIcon from 'react-native-vector-icons/SimpleLineIcons';
import TertiaryHeader from '../common/Headers/TertiaryHeader';

interface Iprops {
  isDarkModeActive: boolean;
  onPersonalDetailsPressed: () => void;
  onShippingAddressPressed: () => void;
  onBackArrowPressed: () => void;
  onSettingIconPressed: () => void;
}

const Profile = (props: Iprops) => {
  return (
    <>
      {props.isDarkModeActive ? (
        <StatusBar barStyle="light-content" />
      ) : (
        <StatusBar barStyle="dark-content" />
      )}
      <ScrollView
        style={
          props.isDarkModeActive ? styles.darkModecontainer : styles.container
        }>
        <TertiaryHeader
          isDarkMode={props.isDarkModeActive}
          onBackArrowPressed={props.onBackArrowPressed}
          onSettingIconPressed={props.onSettingIconPressed}
          showSettingIcon={true}
        />
        <View
          style={
            props.isDarkModeActive
              ? styles.darkModePictureNameEmailView
              : styles.pictureNameEmailView
          }>
          <View style={styles.imageView}>
            <Image
              style={styles.image}
              resizeMode="stretch"
              source={require('../../assets/images/userImage.jpg')}
            />
          </View>
          <View style={styles.nameEmailView}>
            <PrimaryTitle text="Jessicca" isDarkMode={props.isDarkModeActive} />
            <PrimaryDescription text="jessicca@example.com" />
          </View>
        </View>

        {/* Main Detail View */}
        <View
          style={
            props.isDarkModeActive
              ? styles.darkModeMainDetailView
              : styles.mainDetailView
          }>
          {/* personal details */}
          <TouchableOpacity
            style={styles.iconTitleArrowView}
            onPress={props.onPersonalDetailsPressed}>
            <View style={styles.descriptiveIconView}>
              <UserIcon name="user" size={25} color={AppColors.Black} />
            </View>
            <View style={styles.titleArrowView}>
              <ProfileDetailTitleIcon
                text="Personal Detail"
                isDarkMode={props.isDarkModeActive}
              />
            </View>
          </TouchableOpacity>

          {/* Orders */}
          <TouchableOpacity style={styles.iconTitleArrowView}>
            <View style={styles.descriptiveIconView}>
              <CartIcon name="cart-outline" size={25} color={AppColors.Black} />
            </View>
            <View style={styles.titleArrowView}>
              <ProfileDetailTitleIcon
                text="My Order"
                isDarkMode={props.isDarkModeActive}
              />
            </View>
          </TouchableOpacity>

          {/* Favourites */}
          <TouchableOpacity style={styles.iconTitleArrowView}>
            <View style={styles.descriptiveIconView}>
              <HeartIcon name="heart" size={25} color={AppColors.Black} />
            </View>
            <View style={styles.titleArrowView}>
              <ProfileDetailTitleIcon
                text="My Favourites"
                isDarkMode={props.isDarkModeActive}
              />
            </View>
          </TouchableOpacity>

          {/* shipping */}
          <TouchableOpacity
            style={styles.iconTitleArrowView}
            onPress={props.onShippingAddressPressed}>
            <View style={styles.descriptiveIconView}>
              <BusIcon name="bus-marker" size={25} color={AppColors.Black} />
            </View>
            <View style={styles.titleArrowView}>
              <ProfileDetailTitleIcon
                text="Shipping Address"
                isDarkMode={props.isDarkModeActive}
              />
            </View>
          </TouchableOpacity>

          {/* cards */}
          <TouchableOpacity style={styles.iconTitleArrowView}>
            <View style={styles.descriptiveIconView}>
              <CardIcon name="creditcard" size={25} color={AppColors.Black} />
            </View>
            <View style={styles.titleArrowView}>
              <ProfileDetailTitleIcon
                text="My Card"
                isDarkMode={props.isDarkModeActive}
              />
            </View>
          </TouchableOpacity>

          {/* settings */}
          <TouchableOpacity style={styles.iconTitleArrowView}>
            <View style={styles.descriptiveIconView}>
              <SettingIcon name="settings" size={25} color={AppColors.Black} />
            </View>
            <View style={styles.titleArrowView}>
              <ProfileDetailTitleIcon
                text="Settings"
                isDarkMode={props.isDarkModeActive}
              />
            </View>
          </TouchableOpacity>
        </View>

        {/* Secondary Detail View */}
        <View
          style={
            props.isDarkModeActive
              ? styles.darkModeSecondaryDetailView
              : styles.secondaryDetailView
          }>
          {/* FAQs */}
          <TouchableOpacity style={styles.iconTitleArrowView}>
            <View style={styles.descriptiveIconView}>
              <IIcon name="infocirlceo" size={25} color={AppColors.Black} />
            </View>
            <View style={styles.titleArrowView}>
              <ProfileDetailTitleIcon
                text="FAQs"
                isDarkMode={props.isDarkModeActive}
              />
            </View>
          </TouchableOpacity>

          {/* Privacy Policy */}
          <TouchableOpacity style={styles.iconTitleArrowView}>
            <View style={styles.descriptiveIconView}>
              <ShieldIcon
                name="shield-checkmark-outline"
                size={25}
                color={AppColors.Black}
              />
            </View>
            <View style={styles.titleArrowView}>
              <ProfileDetailTitleIcon
                text="Privacy Policy"
                isDarkMode={props.isDarkModeActive}
              />
            </View>
          </TouchableOpacity>

          {/* Terms & Conditions */}
          <TouchableOpacity style={styles.iconTitleArrowView}>
            <View style={styles.descriptiveIconView}>
              <BookIcon name="notebook" size={25} color={AppColors.Black} />
            </View>
            <View style={styles.titleArrowView}>
              <ProfileDetailTitleIcon
                text="Terms and Conditions"
                isDarkMode={props.isDarkModeActive}
              />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  darkModecontainer: {
    backgroundColor: AppColors.Black,
    paddingHorizontal: 15,
    marginBottom: 30,
  },
  container: {
    backgroundColor: AppColors.White,
    paddingHorizontal: 15,
    marginBottom: 30,
  },
  darkModePictureNameEmailView: {
    marginHorizontal: 2,
    flexDirection: 'row',
    borderRadius: 20,
    padding: 10,
    elevation: 5,
    shadowColor: AppColors.White,
    backgroundColor: AppColors.Black,
  },
  pictureNameEmailView: {
    marginHorizontal: 2,
    flexDirection: 'row',
    borderRadius: 20,
    padding: 10,
    elevation: 5,
    backgroundColor: AppColors.White,
  },
  imageView: {},
  image: {
    height: 80,
    width: 80,
    borderRadius: 10,
  },
  nameEmailView: {
    paddingLeft: 20,
  },
  darkModeMainDetailView: {
    marginVertical: 25,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderWidth: 0.5,
    borderRadius: 20,
    borderColor: AppColors.White,
  },
  mainDetailView: {
    marginVertical: 25,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderWidth: 0.5,
    borderRadius: 20,
    // paddingBottom: 65,
  },
  darkModeSecondaryDetailView: {
    marginBottom: 60,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderWidth: 0.5,
    borderRadius: 20,
    borderColor: AppColors.White,
  },
  secondaryDetailView: {
    marginBottom: 60,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderWidth: 0.5,
    borderRadius: 20,
  },
  iconTitleArrowView: {
    paddingHorizontal: 10,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  descriptiveIconView: {
    padding: 15,
    backgroundColor: AppColors.LightGray2,
    borderRadius: 10,
  },
  titleArrowView: {
    width: '83%',
    paddingLeft: 20,
  },
});
