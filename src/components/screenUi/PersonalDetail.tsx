import React, {FC} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  Switch,
  TouchableOpacity,
} from 'react-native';

import {AppColors} from '../../constants/AppColors';

import PrimaryTitle from '../common/Titles/PrimaryTitle';
import SecondaryTitle from '../common/Titles/SecondaryTitle';

import EditIcon from 'react-native-vector-icons/AntDesign';
import GlobeIcon from 'react-native-vector-icons/Feather';
import BellIcon from 'react-native-vector-icons/FontAwesome5';
import MoonIcon from 'react-native-vector-icons/FontAwesome6';
import QuestionMarkIcon from 'react-native-vector-icons/FontAwesome6';
import ArrowRightIcon from 'react-native-vector-icons/MaterialIcons';

import TertiaryTitle from '../common/Titles/TertiaryTitle';
import PrimaryDescription from '../common/Descriptions/PrimaryDescription';
import PrimaryButton from '../common/Buttons/PrimaryButton';
import QuaternaryTitle from '../common/Titles/QuaternaryTitle';

interface Iprops {
  onEditImagePressed: () => void;
  onSelectLanguagePressed: () => void;
  isNotificatonEnabled: boolean;
  onNotificationValueChange: () => void;
  notificatonValue: boolean;
  darkModeOnOffText: string;
  isDarkMode: boolean;
  onDarkModeValueChange: () => void;
  darkModevalue: boolean;
  onHelpCenterPressed: () => void;
  onLogOutPressed: () => void;
}

const PersonalDetail = (props: Iprops) => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={AppColors.White} />
      <ScrollView style={styles.container}>
        <View style={styles.imageView}>
          <Image
            style={styles.image}
            resizeMode="stretch"
            source={require('../../assets/images/userImage.jpg')}
          />
          <TouchableOpacity
            style={styles.editIconView}
            onPress={props.onEditImagePressed}>
            <EditIcon
              style={styles.editIcon}
              name="edit"
              size={20}
              color={AppColors.Black}
            />
          </TouchableOpacity>
          <View style={styles.uploadTextView}>
            <SecondaryTitle text="Upload Image" />
          </View>
        </View>
        <View style={styles.userDetailView}>
          {/* Name */}
          <View style={styles.titleDetailView}>
            <View style={styles.titleView}>
              <TertiaryTitle text="Name" />
            </View>
            <View style={styles.detailView}>
              <QuaternaryTitle text="Jessica" />
            </View>
          </View>

          {/* Gender */}
          <View style={styles.titleDetailView}>
            <View style={styles.titleView}>
              <TertiaryTitle text="Name" />
            </View>
            <View style={styles.detailView}>
              <QuaternaryTitle text="Jessica" />
            </View>
          </View>

          {/* Age */}
          <View style={styles.titleDetailView}>
            <View style={styles.titleView}>
              <TertiaryTitle text="Age" />
            </View>
            <View style={styles.detailView}>
              <QuaternaryTitle text="22 years" />
            </View>
          </View>

          {/* Email */}
          <View style={styles.titleDetailView}>
            <View style={styles.titleView}>
              <TertiaryTitle text="Name" />
            </View>
            <View style={styles.detailView}>
              <QuaternaryTitle text="Jessica@example.com" />
            </View>
          </View>
        </View>

        {/* Setting View */}
        <View style={styles.settingView}>
          <View style={styles.settingsTitleView}>
            <PrimaryTitle text="Settings" />
          </View>

          <View style={styles.settingsDetailsView}>
            <TouchableOpacity
              style={styles.iconTitleOptionView}
              onPress={props.onSelectLanguagePressed}>
              <View style={styles.iconTitleView}>
                <GlobeIcon
                  style={styles.icon}
                  name="globe"
                  size={25}
                  color={AppColors.Black}
                />
                <SecondaryTitle text="Language" />
              </View>
              <View style={styles.optionsView}>
                <PrimaryDescription text="English" />
                <ArrowRightIcon
                  name="keyboard-arrow-right"
                  size={25}
                  color={AppColors.Black}
                />
              </View>
            </TouchableOpacity>
            {/* Notification */}
            <View style={styles.iconTitleOptionView}>
              <View style={styles.iconTitleView}>
                <BellIcon
                  style={styles.icon}
                  name="bell"
                  size={25}
                  color={AppColors.Black}
                />
                <SecondaryTitle text="Notification" />
              </View>
              <View style={styles.optionsView}>
                <Switch
                  trackColor={{false: '#767577', true: '#81b0ff'}}
                  thumbColor={
                    props.isNotificatonEnabled ? '#f5dd4b' : '#f4f3f4'
                  }
                  onValueChange={props.onNotificationValueChange}
                  value={props.notificatonValue}
                />
              </View>
            </View>
            {/* Dark Mode */}
            <View style={styles.iconTitleOptionView}>
              <View style={styles.iconTitleView}>
                <MoonIcon
                  style={styles.icon}
                  name="moon"
                  size={25}
                  color={AppColors.Black}
                />
                <SecondaryTitle text="Dark Mode" />
              </View>
              <View style={styles.optionsView}>
                <PrimaryDescription text={props.darkModeOnOffText} />
                <Switch
                  trackColor={{false: '#767577', true: '#81b0ff'}}
                  thumbColor={props.isDarkMode ? '#f5dd4b' : '#f4f3f4'}
                  onValueChange={props.onDarkModeValueChange}
                  value={props.darkModevalue}
                />
              </View>
            </View>
            {/* Help Center */}
            <TouchableOpacity
              style={styles.iconTitleOptionView}
              onPress={props.onHelpCenterPressed}>
              <View style={styles.iconTitleView}>
                <QuestionMarkIcon
                  style={styles.icon}
                  name="circle-question"
                  size={25}
                  color={AppColors.Black}
                />
                <SecondaryTitle text="Help Center" />
              </View>
              <View style={styles.optionsView}>
                <ArrowRightIcon
                  name="keyboard-arrow-right"
                  size={25}
                  color={AppColors.Black}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonView}>
            <PrimaryButton onPress={props.onLogOutPressed} text="Log Out" />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default PersonalDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.White,
    padding: 15,
  },
  imageView: {
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 10,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  editIconView: {},
  editIcon: {
    elevation: 15,
    borderRadius: 10,
    backgroundColor: AppColors.White,
    padding: 10,
    position: 'absolute',
    bottom: -5,
    left: 25,
  },
  uploadTextView: {
    paddingTop: 15,
  },
  userDetailView: {},
  titleView: {
    width: '30%',
    paddingRight: 40,
  },
  detailView: {
    width: '70%',
  },
  titleDetailView: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    paddingVertical: 10,
  },

  settingView: {
    paddingVertical: 20,
  },
  settingsTitleView: {},
  settingsDetailsView: {
    paddingVertical: 20,
    marginBottom: 20,
    paddingHorizontal: 15,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: AppColors.GrayDescriptonText,
  },
  iconTitleOptionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  iconTitleView: {
    width: '60%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: AppColors.LightGray,
    marginRight: 15,
  },
  optionsView: {
    width: '40%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttonView: {
    paddingBottom: 20,
  },
});
