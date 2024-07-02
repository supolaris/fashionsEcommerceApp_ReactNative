import React, {FC} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import {AppColors} from '../../../../constants/AppColors';
import {AppFonts} from '../../../../constants/AppFonts';

import FacebookIcon from 'react-native-vector-icons/AntDesign';

interface Iprops {
  onPress: () => void;
}

const FacebookButton: FC<Iprops> = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View style={styles.iconView}>
        <FacebookIcon
          style={styles.icon}
          name="facebook-square"
          size={22}
          color="white"
        />
      </View>
      <Text style={styles.text}>
        Continue with <Text style={styles.brandText}>Facebook</Text>
      </Text>
    </TouchableOpacity>
  );
};

export default FacebookButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1876F0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    paddingVertical: 10,
    flexDirection: 'row',
  },
  iconView: {
    paddingBottom: 5,
  },
  icon: {
    paddingRight: 10,
  },
  text: {
    fontSize: 20,
    color: AppColors.White,
    fontFamily: AppFonts.SemiBold,
  },
  brandText: {
    fontFamily: AppFonts.Bold,
  },
});
