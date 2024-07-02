import React, {FC} from 'react';
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

import {SelectCountryData} from '../../constants/FlatlistData';

import CircleIcon from 'react-native-vector-icons/FontAwesome';
import DotCircleIcon from 'react-native-vector-icons/FontAwesome';
import SecondaryTitle from '../common/Titles/SecondaryTitle';

import {LogBox} from 'react-native';

LogBox.ignoreAllLogs(true);

interface Iprops {
  selectedCountry: string;
  onCountryPressed: () => void;
  countrySearchValue: string;
  countryOnChangeText: () => void;
}

const SelectCountry = (props: Iprops) => {
  const renderSelectCountry = ({item}: {item: any}) => {
    return (
      <TouchableOpacity
        style={[
          styles.renderTouchable,
          props.selectedCountry === item.CountryName
            ? styles.renderSelectedTouchable
            : null,
        ]}
        onPress={() => props.onCountryPressed(item)}>
        <View style={styles.renderImageNameView}>
          <Image
            resizeMode="cover"
            style={styles.renderImage}
            source={item.CountryFlag}
          />
          <Text
            style={[
              styles.renderCountryText,
              props.selectedCountry === item.CountryName
                ? styles.renderSelectedCountryText
                : null,
            ]}>
            {item.CountryName}
          </Text>
        </View>
        <View style={styles.renderIconView}>
          {props.selectedCountry === item.CountryName ? (
            <DotCircleIcon
              style={styles.renderIcon}
              name="dot-circle-o"
              size={20}
              color={AppColors.White}
            />
          ) : (
            <CircleIcon
              style={styles.renderIcon}
              name="circle-o"
              size={20}
              color={AppColors.Black}
            />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.textInputView}>
        <PrimaryTextInput
          placeholder="Search Country"
          value={props.countrySearchValue}
          onChangeText={props.countryOnChangeText}
        />
      </View>
      <View style={styles.titleView}>
        <SecondaryTitle text="Country or Region" />
      </View>
      <View style={styles.flatlistView}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={SelectCountryData}
          renderItem={renderSelectCountry}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </ScrollView>
  );
};

export default SelectCountry;

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
  renderCountryText: {
    paddingLeft: 15,
    fontSize: 17,
    color: AppColors.Black,
    fontFamily: AppFonts.Medium,
  },
  renderSelectedCountryText: {
    color: AppColors.White,
  },
  renderIconView: {},
  renderIcon: {},
  container: {
    paddingHorizontal: 10,
    backgroundColor: AppColors.White,
    paddingTop: 15,
  },
  textInputView: {
    paddingVertical: 20,
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
