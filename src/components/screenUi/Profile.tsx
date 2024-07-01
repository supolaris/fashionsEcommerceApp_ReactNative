import React, {FC} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
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
  onPersonalDetailsPressed: () => void;
  onShippingAddressPressed: () => void;
}

const Profile: FC<Iprops> = props => {
  return (
    <ScrollView style={styles.container}>
      <TertiaryHeader showSettingIcon={true} />
      <View style={styles.pictureNameEmailView}>
        <View style={styles.imageView}>
          <Image
            style={styles.image}
            resizeMode="stretch"
            source={require('../../assets/images/userImage.jpg')}
          />
        </View>
        <View style={styles.nameEmailView}>
          <PrimaryTitle text="Jessicca" />
          <PrimaryDescription text="jessicca@example.com" />
        </View>
      </View>

      {/* Main Detail View */}
      <View style={styles.mainDetailView}>
        {/* personal details */}
        <TouchableOpacity
          style={styles.iconTitleArrowView}
          onPress={props.onPersonalDetailsPressed}>
          <View style={styles.descriptiveIconView}>
            <UserIcon name="user" size={25} color={AppColors.Black} />
          </View>
          <View style={styles.titleArrowView}>
            <ProfileDetailTitleIcon text="Personal Detail" />
          </View>
        </TouchableOpacity>

        {/* Orders */}
        <TouchableOpacity style={styles.iconTitleArrowView}>
          <View style={styles.descriptiveIconView}>
            <CartIcon name="cart-outline" size={25} color={AppColors.Black} />
          </View>
          <View style={styles.titleArrowView}>
            <ProfileDetailTitleIcon text="My Order" />
          </View>
        </TouchableOpacity>

        {/* Favourites */}
        <TouchableOpacity style={styles.iconTitleArrowView}>
          <View style={styles.descriptiveIconView}>
            <HeartIcon name="heart" size={25} color={AppColors.Black} />
          </View>
          <View style={styles.titleArrowView}>
            <ProfileDetailTitleIcon text="My Favourites" />
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
            <ProfileDetailTitleIcon text="Shipping Address" />
          </View>
        </TouchableOpacity>

        {/* cards */}
        <TouchableOpacity style={styles.iconTitleArrowView}>
          <View style={styles.descriptiveIconView}>
            <CardIcon name="creditcard" size={25} color={AppColors.Black} />
          </View>
          <View style={styles.titleArrowView}>
            <ProfileDetailTitleIcon text="My Card" />
          </View>
        </TouchableOpacity>

        {/* settings */}
        <TouchableOpacity style={styles.iconTitleArrowView}>
          <View style={styles.descriptiveIconView}>
            <SettingIcon name="settings" size={25} color={AppColors.Black} />
          </View>
          <View style={styles.titleArrowView}>
            <ProfileDetailTitleIcon text="Settings" />
          </View>
        </TouchableOpacity>
      </View>

      {/* Secondary Detail View */}
      <View style={styles.secondaryDetailView}>
        {/* FAQs */}
        <TouchableOpacity style={styles.iconTitleArrowView}>
          <View style={styles.descriptiveIconView}>
            <IIcon name="infocirlceo" size={25} color={AppColors.Black} />
          </View>
          <View style={styles.titleArrowView}>
            <ProfileDetailTitleIcon text="FAQs" />
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
            <ProfileDetailTitleIcon text="Privacy Policy" />
          </View>
        </TouchableOpacity>

        {/* Terms & Conditions */}
        <TouchableOpacity style={styles.iconTitleArrowView}>
          <View style={styles.descriptiveIconView}>
            <BookIcon name="notebook" size={25} color={AppColors.Black} />
          </View>
          <View style={styles.titleArrowView}>
            <ProfileDetailTitleIcon text="Terms and Conditions" />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.White,
    paddingHorizontal: 15,
    marginBottom: 30,
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
  mainDetailView: {
    marginVertical: 25,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderWidth: 0.5,
    borderRadius: 20,
    // paddingBottom: 65,
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
