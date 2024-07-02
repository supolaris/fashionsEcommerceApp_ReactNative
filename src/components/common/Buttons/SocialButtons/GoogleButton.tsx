import React, {FC} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {AppColors} from '../../../../constants/AppColors';
import {AppFonts} from '../../../../constants/AppFonts';

import GoogleIcon from 'react-native-vector-icons/AntDesign';

interface Iprops {
  onPress: () => void;
}

const GoogleButton: FC<Iprops> = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View style={styles.iconView}>
        <GoogleIcon
          style={styles.icon}
          name="google"
          size={22}
          color={AppColors.Black}
        />
      </View>
      <Text style={styles.text}>
        Continue with <Text style={styles.brandText}>Google</Text>
      </Text>
    </TouchableOpacity>
  );
};

export default GoogleButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    paddingVertical: 10,
    flexDirection: 'row',
    borderWidth: 0.5,
  },
  iconView: {
    paddingBottom: 5,
  },
  icon: {
    paddingRight: 10,
  },
  text: {
    fontSize: 20,
    color: AppColors.GrayDescriptonText,
    fontFamily: AppFonts.SemiBold,
  },
  brandText: {
    fontFamily: AppFonts.Bold,
  },
});
