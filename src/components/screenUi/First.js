import React from 'react';
import {View, StyleSheet, ImageBackground, StatusBar} from 'react-native';

import {AppColors} from '../../constants/AppColors';

const First = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={AppColors.Black} />
      <ImageBackground
        source={require('../../assets/images/backgroundImage2.jpg')}
        style={styles.backgroundImage}
      />
    </View>
  );
};

export default First;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
});
