import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

import {AppColors} from '../../constants/AppColors';
import {AppFonts} from '../../constants/AppFonts';

import SecondaryTitle from '../common/Titles/SecondaryTitle';
import PrimaryHeader from '../common/Headers/PrimaryHeader';

import CircleIcon from 'react-native-vector-icons/Entypo';

import {PaymentMethodsData} from '../../constants/FlatlistData';

const PaymentMethod = props => {
  const renderPaymentMethod = ({item}) => {
    return (
      <TouchableOpacity
        style={[
          styles.renderPaymentMethodContainer,
          props.selectedPaymentMethod === item.id
            ? styles.renderSelectedPaymentMethodContainer
            : null,
        ]}
        onPress={() => props.onPaymentMethodPressed(item)}>
        <View style={styles.renderImageNameView}>
          <View st={styles.renderPaymentImageView}>
            <Image
              resizeMode="contain"
              style={styles.renderPaymentImage}
              source={item.PaymentTypeImage}
            />
          </View>
          <Text
            style={[
              styles.paymentMethodNameText,
              props.selectedPaymentMethod === item.id
                ? styles.selectedPaymentMethodNameText
                : null,
            ]}>
            {item.PaymentTypeName}
          </Text>
        </View>
        <View style={styles.iconView}>
          <CircleIcon
            style={styles.icon}
            name="circle"
            size={20}
            color={
              props.selectedPaymentMethod === item.id
                ? AppColors.White
                : AppColors.Black
            }
          />
        </View>
      </TouchableOpacity>
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
  // payment method flatlist
  renderPaymentMethodContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    elevation: 8,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    borderRadius: 20,
    paddingVertical: 10,
    backgroundColor: AppColors.White,
  },
  renderSelectedPaymentMethodContainer: {
    backgroundColor: AppColors.Black,
  },
  renderImageNameView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  renderPaymentImageView: {
    padding: 20,
    borderRadius: 100,
    backgroundColor: 'red',
  },
  renderPaymentImage: {
    height: 45,
    width: 45,
  },
  PaymentTypeImage: {},
  paymentMethodNameText: {
    paddingLeft: 10,
    fontSize: 16,
    color: AppColors.Black,
    fontFamily: AppFonts.Medium,
  },
  selectedPaymentMethodNameText: {
    color: AppColors.White,
  },

  //main
  container: {
    flex: 1,
    backgroundColor: AppColors.White,
    paddingHorizontal: 15,
  },
  headerView: {
    paddingVertical: 10,
  },
  headingView: {},

  paymentFlatlistView: {},
});
