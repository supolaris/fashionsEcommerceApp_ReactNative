import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';

import {AppColors} from '../../constants/AppColors';

import ArrowIcon from 'react-native-vector-icons/MaterialIcons';
import SecondaryTitle from './Titles/SecondaryTitle';

interface Iprops {
  text: string;
}

const ProfileDetailTitleIcon: FC<Iprops> = props => {
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
