import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {AppColors} from '../../constants/AppColors';
import {AppFonts} from '../../constants/AppFonts';

import SecondaryTitle from '../common/Titles/SecondaryTitle';
import PrimaryHeader from '../common/Headers/PrimaryHeader';
import DottedBorderButton from '../common/Buttons/DottedBorderButton';
import SendBadgeButton from '../common/Buttons/SendBadgeButton';

import CircleIcon from 'react-native-vector-icons/Entypo';

import {PaymentMethodsData} from '../../constants/FlatlistData';
import {ProductHistoryData} from '../../constants/FlatlistData';

import {InterfacePaymentMethodsData} from '../../@types/AppTyping';

interface Iprops {
  isDarkModeActive: boolean;
  selectedPaymentMethod: number;
  onPaymentMethodPressed: (item: InterfacePaymentMethodsData) => void;
  onHeaderBackArrowPressed: () => void;
  onAddCardPressed: () => void;
}

const PaymentMethod = (props: Iprops) => {
  const renderPaymentMethod = ({item}: {item: InterfacePaymentMethodsData}) => {
    return (
      <TouchableOpacity
        style={[
          {
            ...styles.renderPaymentMethodContainer,
            backgroundColor: props.isDarkModeActive
              ? AppColors.Black
              : AppColors.White,
            shadowColor: props.isDarkModeActive
              ? AppColors.White
              : AppColors.Black,
          },
          props.selectedPaymentMethod === item.id
            ? {
                ...styles.renderSelectedPaymentMethodContainer,
                backgroundColor: props.isDarkModeActive
                  ? AppColors.White
                  : AppColors.Black,
              }
            : null,
        ]}
        onPress={() => props.onPaymentMethodPressed(item)}>
        <View style={styles.renderImageNameView}>
          <View style={styles.renderPaymentImageView}>
            <Image
              resizeMode="contain"
              style={styles.renderPaymentImage}
              source={item.PaymentTypeImage}
            />
          </View>
          <Text
            style={[
              {
                ...styles.paymentMethodNameText,
                color: props.isDarkModeActive
                  ? AppColors.White
                  : AppColors.Black,
              },
              props.selectedPaymentMethod === item.id
                ? {
                    ...styles.selectedPaymentMethodNameText,
                    color: props.isDarkModeActive
                      ? AppColors.Black
                      : AppColors.White,
                  }
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
                ? AppColors.Black
                : AppColors.White
            }
          />
        </View>
      </TouchableOpacity>
    );
  };

  const renderProductHistory = ({item}: {item: any}) => {
    return (
      <View
        style={{
          ...styles.renderProductHistoryView,
          backgroundColor: props.isDarkModeActive
            ? AppColors.Black
            : AppColors.White,
          shadowColor: props.isDarkModeActive
            ? AppColors.White
            : AppColors.Black,
        }}>
        <View style={styles.renderImageNameDescriptionButtonView}>
          <View style={styles.renderProductImageHistoryView}>
            <Image
              style={styles.renderProductHistoryImage}
              source={item.ProductImage}
            />
          </View>
          <View style={styles.renderNameDescriptionButtonView}>
            <SecondaryTitle
              text={item.ProductName}
              isDarkMode={props.isDarkModeActive}
            />

            <Text style={styles.descriptionText}>
              {item.ProductDescription}
            </Text>
            <View style={styles.sendButtonView}>
              <SendBadgeButton text="Send" />
            </View>
          </View>
        </View>
        <View style={styles.priceView}>
          <Text style={styles.dollarSign}>$</Text>
          <SecondaryTitle
            text={item.ProductPrice}
            isDarkMode={props.isDarkModeActive}
          />
        </View>
      </View>
    );
  };

  return (
    <ScrollView
      style={{
        ...styles.container,
        backgroundColor: props.isDarkModeActive
          ? AppColors.Black
          : AppColors.White,
      }}>
      <View style={styles.headerView}>
        <PrimaryHeader
          isDarkMode={props.isDarkModeActive}
          showSearchIcon={false}
          onHeaderBackArrowPressed={props.onHeaderBackArrowPressed}
        />
      </View>
      <View style={styles.headingView}>
        <SecondaryTitle text="Payment" isDarkMode={props.isDarkModeActive} />
      </View>
      <View style={styles.paymentFlatlistView}>
        <FlatList
          data={PaymentMethodsData}
          renderItem={renderPaymentMethod}
          keyExtractor={item => item.id.toString()}
        />
      </View>
      <View style={styles.addCardButtonView}>
        <DottedBorderButton text="Add Card" onPress={props.onAddCardPressed} />
      </View>
      <View style={styles.historyView}>
        <View style={styles.historyTitleView}>
          <SecondaryTitle text="History" isDarkMode={props.isDarkModeActive} />
        </View>
        <View style={styles.historyFlatlistView}>
          <FlatList
            data={ProductHistoryData}
            renderItem={renderProductHistory}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      </View>
    </ScrollView>
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
    padding: 5,
    borderRadius: 100,
    backgroundColor: AppColors.LightGray2,
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
  iconView: {},
  icon: {},

  //Product History Flatlist
  renderProductHistoryView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: AppColors.White,
    borderRadius: 10,
    padding: 10,
    elevation: 10,
    marginHorizontal: 5,
    paddingRight: 15,
  },
  renderImageNameDescriptionButtonView: {
    flexDirection: 'row',
  },
  renderProductImageHistoryView: {},
  renderProductHistoryImage: {
    height: 90,
    width: 85,
    borderRadius: 15,
  },
  renderNameDescriptionButtonView: {
    paddingLeft: 15,
    width: '53%',
  },
  descriptionText: {
    //width: '100%',
    fontSize: 14,
    color: AppColors.GrayDescriptonText,
    marginTop: -5,
    paddingBottom: 5,
    fontFamily: AppFonts.Regular,
  },
  sendButtonView: {
    width: '60%',
  },
  priceView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dollarSign: {
    paddingRight: 2,
    fontSize: 20,
    color: AppColors.Black,
    fontFamily: AppFonts.Bold,
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
  addCardButtonView: {
    paddingHorizontal: 5,
    paddingTop: 10,
  },
  historyView: {
    paddingBottom: 20,
  },
  historyTitleView: {
    paddingTop: 20,
    paddingLeft: 5,
  },
  historyFlatlistView: {
    //paddingBottom: 20,
  },
});
