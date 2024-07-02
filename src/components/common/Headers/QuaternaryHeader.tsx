import React, {FC} from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';

import {AppColors} from '../../../constants/AppColors';

import ArrowIcon from 'react-native-vector-icons/FontAwesome';

interface Iprops {
  onHeaderBackArrowPressed: () => void;
  showUserImage: boolean;
  onUserImagePressed: () => void;
}

const QuaternaryHeader: FC<Iprops> = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.arrowView}
        onPress={props.onHeaderBackArrowPressed}>
        <ArrowIcon
          style={styles.icon}
          name="arrow-left"
          size={20}
          color={AppColors.White}
        />
      </TouchableOpacity>
      {props.showUserImage == true ? (
        <TouchableOpacity
          onPress={props.onUserImagePressed}
          style={styles.imageView}>
          <Image
            style={styles.userImage}
            source={require('../../../assets/images/userImage.jpg')}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default QuaternaryHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 30,
    paddingTop: 50,
  },
  arrowView: {
    borderRadius: 100,
    backgroundColor: 'black',
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {},
  imageView: {},
  userImage: {
    height: 50,
    width: 50,
    borderRadius: 100,
  },
});
