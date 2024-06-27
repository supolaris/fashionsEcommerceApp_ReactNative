import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {AppColors} from '../../constants/AppColors';
import PrimaryHeader from '../common/Headers/PrimaryHeader';
import SecondaryTitle from '../common/Titles/SecondaryTitle';
import PrimaryTitle from '../common/Titles/PrimaryTitle';
import TertiaryTextInput from '../common/TextInputs/TertiaryTextInput';
import SecondaryButton from '../common/Buttons/SecondaryButton';
import TertiaryButton from '../common/Buttons/TertiaryButton';

const CardDetail = props => {
  return (
    <View style={styles.container}>
      <View style={styles.detailsView}>
        <View style={styles.headerView}>
          <PrimaryHeader
            showSearchIcon={false}
            onPress={props.onBackArrowPressed}
          />
        </View>

        <View style={styles.titleView}>
          <PrimaryTitle text="Payment" />
        </View>
        <View style={styles.cardImageView}>
          <Image
            resizeMode="stretch"
            style={styles.cardImage}
            source={require('../../assets/images/cardImage.png')}
          />
        </View>
        <SecondaryTitle text="Card Detail" />
        <View style={styles.textInputsView}>
          <View style={styles.textInputItemView}>
            <TertiaryTextInput placeholder="Card Number" />
          </View>
          <View style={styles.textInputItemView}>
            <TertiaryTextInput placeholder="Exp Date" />
          </View>
          <View style={styles.textInputItemView}>
            <TertiaryTextInput placeholder="CVV" />
          </View>
        </View>
      </View>

      <View style={styles.buttonsView}>
        <View style={styles.cancelButtonView}>
          <TertiaryButton text="Cancel" />
        </View>
        <View style={styles.confirmButtonView}>
          <SecondaryButton text="Confirm" />
        </View>
      </View>
    </View>
  );
};

export default CardDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.White,
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: 'space-between',
  },
  detailsView: {},
  headerView: {
    paddingBottom: 10,
  },
  titleView: {
    marginBottom: -10,
  },
  cardImageView: {},
  cardImage: {
    height: 230,
    width: '100%',
  },
  textInputsView: {
    paddingBottom: 20,
  },
  textInputItemView: {
    marginVertical: 10,
  },
  buttonsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButtonView: {},
  confirmButtonView: {
    width: '40%',
  },
});
