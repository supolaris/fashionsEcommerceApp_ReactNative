import React from 'react';
import {View, StyleSheet, ImageBackground, StatusBar} from 'react-native';

import QuaternaryButtonWhite from '../common/Buttons/QuaternaryButtonWhite';
import QuaternaryButtonOutline from '../common/Buttons/QuaternaryButtonOutline';

interface Iprops {
  onLoginPressed: () => void;
  onSignupPressed: () => void;
}

const Second = (props: Iprops) => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <ImageBackground
        resizeMode="cover"
        source={require('../../assets/images/backgroundImage2.jpg')}
        style={styles.backgroundImage}>
        <QuaternaryButtonWhite onPress={props.onLoginPressed} text="Login" />
        <View style={styles.signupButtonView}>
          <QuaternaryButtonOutline
            onPress={props.onSignupPressed}
            text="Sign Up"
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Second;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 40,
    paddingHorizontal: 15,
  },
  signupButtonView: {
    marginVertical: 15,
  },
});
