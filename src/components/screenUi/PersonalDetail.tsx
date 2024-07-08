import React from 'react';
import {
  View,
  ScrollView,
  Modal,
  StyleSheet,
  Image,
  StatusBar,
  Switch,
  TouchableOpacity,
  Text,
} from 'react-native';

import {AppColors} from '../../constants/AppColors';
import {AppFonts} from '../../constants/AppFonts';

import PrimaryTitle from '../common/Titles/PrimaryTitle';
import SecondaryTitle from '../common/Titles/SecondaryTitle';
import TertiaryTitle from '../common/Titles/TertiaryTitle';
import PrimaryDescription from '../common/Descriptions/PrimaryDescription';
import PrimaryButton from '../common/Buttons/PrimaryButton';
import QuaternaryTitle from '../common/Titles/QuaternaryTitle';

import EditIcon from 'react-native-vector-icons/AntDesign';
import GlobeIcon from 'react-native-vector-icons/Feather';
import BellIcon from 'react-native-vector-icons/FontAwesome5';
import MoonIcon from 'react-native-vector-icons/FontAwesome6';
import QuestionMarkIcon from 'react-native-vector-icons/FontAwesome6';
import ArrowRightIcon from 'react-native-vector-icons/MaterialIcons';

interface Iprops {
  //modal
  animationType: any;
  transparent: boolean;
  visible: boolean;
  onRequestClose: () => void;
  onLaunchCameraPressed: () => void;
  onSelectFromLibraryPressed: () => void;
  //
  onEditImagePressed: () => void;
  onSelectLanguagePressed: () => void;
  isNotificatonEnabled: boolean | undefined;
  onNotificationValueChange: () => void;
  notificatonValue: boolean | undefined;
  darkModeOnOffText: string;
  isDarkMode: boolean;
  onDarkModeValueChange: () => void;
  darkModevalue: boolean;
  onHelpCenterPressed: () => void;
  onLogOutPressed: () => void;
  isDarkModeActive: boolean;
}

const PersonalDetail = (props: Iprops) => {
  return (
    <>
      {props.isDarkModeActive ? (
        <StatusBar barStyle="light-content" />
      ) : (
        <StatusBar barStyle="dark-content" />
      )}
      <ScrollView
        style={{
          ...styles.Darkcontainer,
          backgroundColor: props.isDarkMode ? 'black' : 'white',
        }}>
        {/* Image picker modal start*/}
        <Modal
          animationType={props.animationType}
          transparent={props.transparent}
          visible={props.visible}
          onRequestClose={props.onRequestClose}>
          <View style={styles.modalOuterView}>
            <View style={styles.modalInnerView}>
              <TouchableOpacity
                onPress={props.onLaunchCameraPressed}
                style={styles.modalButtonTouchable}>
                <Text style={styles.modalButtonTouchableText}>
                  Launch camera
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={props.onSelectFromLibraryPressed}
                style={styles.modalButtonTouchable}>
                <Text style={styles.modalButtonTouchableText}>
                  Select from library
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Image picker modal end*/}
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
            <SecondaryTitle
              text="Upload Image"
              isDarkMode={props.isDarkModeActive}
            />
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
              <TertiaryTitle text="Gender" />
            </View>
            <View style={styles.detailView}>
              <QuaternaryTitle text="Female" />
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
            <PrimaryTitle text="Settings" isDarkMode={props.isDarkMode} />
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
                <SecondaryTitle
                  text="Language"
                  isDarkMode={props.isDarkModeActive}
                />
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
                <SecondaryTitle
                  text="Notification"
                  isDarkMode={props.isDarkModeActive}
                />
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
                <SecondaryTitle
                  text="Dark Mode"
                  isDarkMode={props.isDarkModeActive}
                />
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
                <SecondaryTitle
                  text="Help Center"
                  isDarkMode={props.isDarkModeActive}
                />
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
            <PrimaryButton
              onPress={props.onLogOutPressed}
              text="Log Out"
              isDarkMode={props.isDarkModeActive}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default PersonalDetail;

const styles = StyleSheet.create({
  //modal
  modalOuterView: {
    flex: 1,
    backgroundColor: AppColors.TransparentBlack,
    justifyContent: 'flex-end',
  },
  modalInnerView: {
    height: 250,
    backgroundColor: AppColors.White,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  modalButtonTouchable: {
    width: '80%',
    borderWidth: 0.5,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: AppColors.White,
    elevation: 10,
    marginVertical: 10,
  },
  modalButtonTouchableText: {
    textAlign: 'center',
    fontSize: 18,
    color: AppColors.Black,
    fontFamily: AppFonts.Bold,
  },

  //main
  Darkcontainer: {
    flex: 1,
    backgroundColor: AppColors.Black,
    padding: 15,
  },
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
