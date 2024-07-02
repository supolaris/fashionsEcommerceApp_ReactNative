import React, {FC} from 'react';
import {View, StyleSheet, Image, StatusBar} from 'react-native';

import PrimaryTitle from '../common/Titles/PrimaryTitle';
import PrimaryDescription from '../common/Descriptions/PrimaryDescription';
import StartupButton from '../common/Buttons/StartupButton';

import {AppColors} from '../../constants/AppColors';

interface Iprops {
  onGetStartedPressed: () => void;
}

const Startup3 = (props: Iprops) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image
          style={styles.image}
          resizeMode="stretch"
          source={require('../../assets/images/startupImage3.jpg')}
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
  );
};

export default Startup3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.White,
    padding: 15,
    paddingTop: 50,
  },
  imageView: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    borderBottomRightRadius: 250,
    height: 450,
    width: '100%',
    borderRadius: 20,
  },
  titleDescriptionView: {
    paddingTop: 30,
  },
  titleView: {},
  descriptionView: {
    paddingTop: 10,
  },
  buttonView: {
    paddingTop: 5,
    alignItems: 'flex-end',
  },
});
