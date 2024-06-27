import React from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';

import {AppColors} from '../../constants/AppColors';
import {AppFonts} from '../../constants/AppFonts';

import SecondaryTitle from '../common/Titles/SecondaryTitle';
import PrimaryHeader from '../common/Headers/PrimaryHeader';
import {PaymentMethodsData} from '../../constants/FlatlistData';

const PaymentMethod = () => {
  const renderPaymentMethod = ({item}) => {
    return (
      <View style={styles.renderPaymentMethodContainer}>
        <View style={styles.renderImageNameView}>
          <View st={styles.renderPaymentImageView}>
            <Image
              resizeMode="contain"
              style={styles.renderPaymentImage}
              source={item.PaymentTypeImage}
            />
          </View>
          <Text style={styles.paymentMethodNameText}>
            {item.PaymentTypeName}
          </Text>
        </View>
        <View></View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <PrimaryHeader />
      </View>
      <View style={styles.headingView}>
        <SecondaryTitle text="Payment" />
      </View>
      <View style={styles.paymentFlatlistView}>
        <FlatList
          data={PaymentMethodsData}
          renderItem={renderPaymentMethod}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default PaymentMethod;

const styles = StyleSheet.create({
  renderPaymentMethodContainer: {
    flexDirection: 'row',
  },
  renderImageNameView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  renderPaymentImageView: {
    borderRadius: 100,
    padding: 100,
    backgroundColor: 'red',
  },
  renderPaymentImage: {
    height: 50,
    width: 50,
  },
  PaymentTypeImage: {},
  paymentMethodNameText: {},

  container: {
    flex: 1,
    backgroundColor: AppColors.White,
    paddingHorizontal: 15,
  },

  paymentFlatlistView: {},
});
