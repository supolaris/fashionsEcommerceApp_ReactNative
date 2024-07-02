import React, {FC} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {AppColors} from '../../../constants/AppColors';
import {AppFonts} from '../../../constants/AppFonts';

import PlusIcon from 'react-native-vector-icons/AntDesign';

interface Iprops {
  onPress: () => void;
  text: string;
}

const DottedBorderButton: FC<Iprops> = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View style={styles.iconView}>
        <PlusIcon
          style={styles.icon}
          name="plus"
          size={20}
          color={AppColors.Black}
        />
      </View>
      <View style={styles.textView}>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DottedBorderButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 20,
    paddingVertical: 10,
  },
  iconView: {
    borderWidth: 0.5,
    borderRadius: 100,
    padding: 10,
  },
  icon: {},
  textView: {},
  text: {
    textAlign: 'center',
    paddingLeft: 15,
    paddingTop: 3,
    fontSize: 16,
    color: AppColors.Black,
    fontFamily: AppFonts.Medium,
  },
});
