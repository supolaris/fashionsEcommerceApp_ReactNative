import React from 'react';
import {View, StyleSheet} from 'react-native';

import StarIcon from 'react-native-vector-icons/AntDesign';

const Star = () => {
  return (
    <View style={styles.container}>
      <StarIcon style={styles.icon} name="star" size={25} color="orange" />
    </View>
  );
};

export default Star;

const styles = StyleSheet.create({
  container: {},
  icon: {},
});
