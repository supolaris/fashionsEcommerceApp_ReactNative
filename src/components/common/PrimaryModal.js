import React, {useState} from 'react';
import {View, Text, Modal, StyleSheet, Image} from 'react-native';

import {AppColors} from '../../constants/AppColors';
import {AppFonts} from '../../constants/AppFonts';

import CardIcon from 'react-native-vector-icons/FontAwesome5';

import PrimaryTitle from './Titles/PrimaryTitle';
import QuaternaryButton from './Buttons/QuaternaryButton';

const PrimaryModal = props => {
  return (
    <Modal
      animationType={props.animationType}
      transparent={props.transparent}
      visible={props.visible}
      onRequestClose={props.onRequestClose}>
      <View style={styles.outerView}>
        <View style={styles.innerView}>
          <View style={styles.iconView}>
            <CardIcon name="address-card" size={35} color={AppColors.White} />
          </View>
          <View style={styles.greenTickView}>
            <Image
              style={styles.greenTickImage}
              source={require('../../assets/images/doneImage.png')}
            />
          </View>
          <View style={styles.titleDescriptionView}>
            <PrimaryTitle text={props.title} />
            <Text style={styles.descriptionText}>{props.description}</Text>
          </View>
          <View style={styles.buttonView}>
            <QuaternaryButton
              onPress={props.onModalButtonPressed}
              text={props.buttonText}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default PrimaryModal;

const styles = StyleSheet.create({
  // Modal
  outerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.TransparentBlack,
  },
  innerView: {
    height: '55%',
    borderRadius: 20,
    backgroundColor: 'white',
    width: '90%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  iconView: {
    backgroundColor: AppColors.Black,
    padding: 20,
    borderRadius: 100,
  },
  icon: {},
  greenTickView: {
    position: 'absolute',
    left: 195,
  },
  greenTickImage: {
    height: 25,
    width: 25,
  },
  titleDescriptionView: {
    alignItems: 'center',
    width: '60%',
  },
  descriptionText: {
    textAlign: 'center',
    fontFamily: AppFonts.Regular,
    fontSize: 16,
    color: AppColors.GrayDescriptonText,
  },
  buttonView: {
    width: '70%',
  },
});
