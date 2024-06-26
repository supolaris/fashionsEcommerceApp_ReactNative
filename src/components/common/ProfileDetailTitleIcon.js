import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {AppColors} from '../../constants/AppColors';
import {AppFonts} from '../../constants/AppFonts';

import PrimaryTitle from './Titles/PrimaryTitle';

import ArrowIcon from 'react-native-vector-icons/MaterialIcons';
import SecondaryTitle from './Titles/SecondaryTitle';

const ProfileDetailTitleIcon = props => {
  return (
    <View style={styles.container}>
      <SecondaryTitle text={props.text} />

      <ArrowIcon
        name="keyboard-arrow-right"
        size={25}
        color={AppColors.Black}
      />
    </View>
  );
};

export default ProfileDetailTitleIcon;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
