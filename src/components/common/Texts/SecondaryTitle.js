import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SecondaryTitle = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

export default SecondaryTitle;

const styles = StyleSheet.create({
  container: {},
  text: {},
});
