import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {AppColors} from '../../constants/AppColors';

const Profile = () => {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: AppColors.White,
    },
  });
