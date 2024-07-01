import React from 'react';
import {View, StyleSheet, ImageBackground, StatusBar} from 'react-native';

const First = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
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
