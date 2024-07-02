import React, {FC} from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';

import {AppColors} from '../../../../constants/AppColors';
import {AppFonts} from '../../../../constants/AppFonts';

import AppleIcon from 'react-native-vector-icons/AntDesign';

interface Iprops {
  onPress: () => void;
}

const AppleButton: FC<Iprops> = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View style={styles.iconView}>
        <AppleIcon
          style={styles.icon}
          name="apple1"
          size={22}
          color={AppColors.Black}
        />
      </View>
      <Text style={styles.text}>
        Continue with <Text style={styles.brandText}>Apple</Text>
      </Text>
    </TouchableOpacity>
  );
};

export default AppleButton;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#1876F0',
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
