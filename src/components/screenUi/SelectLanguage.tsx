import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

import {AppColors} from '../../constants/AppColors';
import {AppFonts} from '../../constants/AppFonts';

import PrimaryTextInput from '../common/TextInputs/PrimaryTextInput';

import {SelectLanguageData} from '../../constants/FlatlistData';

import CircleIcon from 'react-native-vector-icons/FontAwesome';
import DotCircleIcon from 'react-native-vector-icons/FontAwesome';
import SecondaryTitle from '../common/Titles/SecondaryTitle';

import {LogBox} from 'react-native';
import PrimaryHeader from '../common/Headers/PrimaryHeader';

LogBox.ignoreAllLogs(true);

import {InterfaceSelectLanguageData} from '../../@types/AppTyping';

interface Iprops {
  isDarkModeActive: boolean;
  selectedLanguage: string;
  onLanguagePressed: (item: InterfaceSelectLanguageData) => void;
  onHeaderBackArrowPressed: () => void;
  languageValue: string;
  onLangaugeOnChangeText: (val: string) => void;
}

const SelectLanguage = (props: Iprops) => {
  const renderSelectLanguage = ({
    item,
  }: {
    item: InterfaceSelectLanguageData;
  }) => {
    return (
      <TouchableOpacity
        style={[
          {
            ...styles.renderTouchable,
            backgroundColor: props.isDarkModeActive
              ? AppColors.Black
              : AppColors.White,
            shadowColor: props.isDarkModeActive
              ? AppColors.White
              : AppColors.Black,
          },
          props.selectedLanguage === item.LanguageName
            ? {
                ...styles.renderSelectedTouchable,
                backgroundColor: props.isDarkModeActive
                  ? AppColors.White
                  : AppColors.Black,
              }
            : null,
        ]}
        onPress={() => props.onLanguagePressed(item)}>
        <View style={styles.renderImageNameView}>
          <Image
            resizeMode="cover"
            style={styles.renderImage}
            source={item.LanguageImage}
          />
          <Text
            style={[
              {
                ...styles.renderLanguageText,
                color: props.isDarkModeActive
                  ? AppColors.White
                  : AppColors.Black,
              },
              props.selectedLanguage === item.LanguageName
                ? {
                    ...styles.renderSelectedLanguageText,
                    color: props.isDarkModeActive
                      ? AppColors.Black
                      : AppColors.White,
                  }
                : null,
            ]}>
            {item.LanguageName}
          </Text>
        </View>
        <View style={styles.renderIconView}>
          {props.selectedLanguage === item.LanguageName ? (
            <DotCircleIcon
              style={styles.renderIcon}
              name="dot-circle-o"
              size={20}
              color={props.isDarkModeActive ? AppColors.Black : AppColors.White}
            />
          ) : (
            <CircleIcon
              style={styles.renderIcon}
              name="circle-o"
              size={20}
              color={props.isDarkModeActive ? AppColors.White : AppColors.Black}
            />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView
      style={{
        ...styles.container,
        backgroundColor: props.isDarkModeActive
          ? AppColors.Black
          : AppColors.White,
      }}>
      <PrimaryHeader
        isDarkMode={props.isDarkModeActive}
        onHeaderBackArrowPressed={props.onHeaderBackArrowPressed}
        showSearchIcon={false}
      />
      <View style={styles.textInputView}>
        <PrimaryTextInput
          placeholder="Search Language"
          value={props.languageValue}
          onChangeText={(val: string) => props.onLangaugeOnChangeText(val)}
        />
      </View>
      <View style={styles.titleView}>
        <SecondaryTitle
          text="Select Language"
          isDarkMode={props.isDarkModeActive}
        />
      </View>
      <View style={styles.flatlistView}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={SelectLanguageData}
          renderItem={renderSelectLanguage}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </ScrollView>
  );
};

export default SelectLanguage;

const styles = StyleSheet.create({
  renderTouchable: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
    paddingVertical: 15,
    elevation: 8,
    borderRadius: 20,
    backgroundColor: AppColors.White,
    paddingHorizontal: 15,
    marginHorizontal: 5,
  },
  renderSelectedTouchable: {
    backgroundColor: AppColors.Black,
  },
  renderImageNameView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  renderImage: {
    height: 50,
    width: 50,
    borderRadius: 100,
  },
  renderLanguageText: {
    paddingLeft: 15,
    fontSize: 17,
    color: AppColors.Black,
    fontFamily: AppFonts.Medium,
  },
  renderSelectedLanguageText: {
    color: AppColors.White,
  },
  renderIconView: {},
  renderIcon: {},
  container: {
    paddingHorizontal: 10,
    backgroundColor: AppColors.White,
  },
  textInputView: {
    paddingBottom: 20,
    paddingLeft: 5,
  },
  titleView: {
    paddingLeft: 5,
    paddingBottom: 10,
  },
  flatlistView: {
    flex: 1,
    paddingBottom: 30,
  },
});
