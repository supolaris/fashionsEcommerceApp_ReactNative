import React from 'react';
import {View, StyleSheet, Image, StatusBar} from 'react-native';

import PrimaryTitle from '../common/Texts/PrimaryTitle';
import PrimaryDescription from '../common/Texts/PrimaryDescription';
import StartupButton from '../common/Buttons/StartupButton';

import {AppColors} from '../../constants/AppColors';

const Startup = props => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View style={styles.container}>
        <View style={styles.imageView}>
          <Image
            style={styles.image}
            resizeMode="stretch"
            source={require('../../assets/images/startupImage.jpg')}
          />
        </View>
        <View style={styles.titleDescriptionView}>
          <View style={styles.titleView}>
            <PrimaryTitle text="Your Ultimate Destination for Quality Shopping" />
          </View>
          <View style={styles.descriptionView}>
            <PrimaryDescription text="Explore a wide variety of products, tailored to your preferences" />
          </View>
        </View>

        <View style={styles.buttonView}>
          <StartupButton onPress={props.onGetStartedPressed} />
        </View>
      </View>
    </>
  );
};

export default Startup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.White,
    padding: 15,
  },
  imageView: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 400,
    width: '100%',
    borderRadius: 20,
  },
  titleDescriptionView: {
    paddingVertical: 30,
  },
  titleView: {},
  descriptionView: {
    paddingTop: 10,
  },
  buttonView: {
    alignItems: 'flex-end',
  },
});
