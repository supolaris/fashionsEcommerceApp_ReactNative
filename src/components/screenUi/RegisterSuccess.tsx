import React, {FC} from 'react';
import {View, Text, StyleSheet, Image, StatusBar} from 'react-native';

import {AppColors} from '../../constants/AppColors';
import {AppFonts} from '../../constants/AppFonts';

import LoginButton1 from '../common/Buttons/LoginButton1';
import PrimaryTitle from '../common/Titles/PrimaryTitle';

interface Iprops {
  onStartShoppingPressed: () => void;
}

const RegisterSuccess: FC<Iprops> = props => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <View style={styles.emptyView}></View>
      <View style={styles.successDetailView}>
        <Image
          style={styles.image}
          resizeMode="stretch"
          source={require('../../assets/images/doneImage.png')}
        />
        <View style={styles.titleDescriptionView}>
          <PrimaryTitle text="Successful!" />
          <Text style={styles.descriptionText}>
            You have successfully registered in our app, start shopping in it
          </Text>
        </View>
      </View>
      <View style={styles.buttonView}>
        <LoginButton1
          text="Start Shopping"
          onPress={props.onStartShoppingPressed}
        />
      </View>
    </View>
  );
};

export default RegisterSuccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.White,
    paddingHorizontal: 15,
    paddingVertical: 25,
    justifyContent: 'space-between',
  },
  emptyView: {},
  successDetailView: {
    alignItems: 'center',
  },
  image: {},
  titleDescriptionView: {
    width: '90%',
    alignItems: 'center',
    paddingTop: 30,
  },
  descriptionText: {
    textAlign: 'center',
    fontSize: 18,
    color: AppColors.GrayDescriptonText,
    fontFamily: AppFonts.Regular,
  },
  buttonView: {},
});
