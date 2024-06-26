import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';

import {AppColors} from '../../constants/AppColors';
import {AppFonts} from '../../constants/AppFonts';

import PrimaryTitle from '../common/Titles/PrimaryTitle';
import PrimaryDescription from '../common/Descriptions/PrimaryDescription';
import ProfileDetailTitleIcon from '../common/ProfileDetailTitleIcon';

import UserIcon from 'react-native-vector-icons/FontAwesome5';

const height = Dimensions.get('window').height;
const widht = Dimensions.get('window').width;

const Profile = () => {
  return (
    <ScrollView style={styles.container}>
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
        <View style={styles.iconTitleArrowView}>
          <View style={styles.descriptiveIconView}>
            <UserIcon name="user" size={25} color={AppColors.Black} />
          </View>
          <View style={styles.titleArrowView}>
            <ProfileDetailTitleIcon text="Personal Detail" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    height: height,
    backgroundColor: AppColors.White,
    padding: 15,
  },
  pictureNameEmailView: {
    flexDirection: 'row',
    shadowColor: 'red',
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
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderWidth: 0.5,
    borderRadius: 10,
  },
  iconTitleArrowView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  descriptiveIconView: {
    padding: 15,
    backgroundColor: AppColors.LightGray2,
    borderRadius: 10,
  },
  titleArrowView: {
    width: '80%',
    paddingLeft: 20,
  },
});
