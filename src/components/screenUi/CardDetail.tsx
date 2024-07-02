import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

import {AppColors} from '../../constants/AppColors';
import {AppFonts} from '../../constants/AppFonts';

import PrimaryHeader from '../common/Headers/PrimaryHeader';
import SecondaryTitle from '../common/Titles/SecondaryTitle';
import PrimaryTitle from '../common/Titles/PrimaryTitle';
import TertiaryTextInput from '../common/TextInputs/TertiaryTextInput';
import SecondaryButton from '../common/Buttons/SecondaryButton';
import TertiaryButton from '../common/Buttons/TertiaryButton';

import PrimaryModal from '../common/PrimaryModal';

interface Iprops {
  onModalButtonPressed: () => void;
  modalVisible: boolean;
  onRequestClose: () => void;
  onBackArrowPressed: () => void;
  onCardSubmitConfirmPressed: () => void;
  cardValue: string;
  onCardChangeText: () => void;
  expValue: string;
  onExpChangeText: () => void;
  cvvValue: string;
  onCvvChangeText: () => void;
  onCancelButtonPressed: () => void;
}

const CardDetail = (props: Iprops) => {
  return (
    <View style={styles.container}>
      <View>
        <PrimaryModal
          title="Successful!"
          description="You have successfully send your payment"
          buttonText="Continue Shopping"
          animationType="Slide"
          onModalButtonPressed={props.onModalButtonPressed}
          transparent={true}
          visible={props.modalVisible}
          onRequestClose={props.onRequestClose}
        />
      </View>

      <View style={styles.detailsView}>
        <View style={styles.headerView}>
          <PrimaryHeader
            showSearchIcon={false}
            onHeaderBackArrowPressed={props.onBackArrowPressed}
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
            <TertiaryTextInput
              placeholder="Card Number"
              value={props.cardValue}
              onChangeText={props.onCardChangeText}
            />
          </View>
          <View style={styles.textInputItemView}>
            <TertiaryTextInput
              placeholder="Exp Date"
              value={props.expValue}
              onChangeText={props.onExpChangeText}
            />
          </View>
          <View style={styles.textInputItemView}>
            <TertiaryTextInput
              placeholder="CVV"
              value={props.cvvValue}
              onChangeText={props.onCvvChangeText}
            />
          </View>
        </View>
      </View>

      <View style={styles.buttonsView}>
        <View style={styles.cancelButtonView}>
          <TertiaryButton text="Cancel" onPress={props.onCancelButtonPressed} />
        </View>
        <View style={styles.confirmButtonView}>
          <SecondaryButton
            onPress={props.onCardSubmitConfirmPressed}
            text="Confirm"
          />
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
    paddingBottom: 20,
    justifyContent: 'space-between',
  },
  // Modal
  outerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.TransparentBlack,
  },
  innerView: {
    height: '55%',
    borderRadius: 20,
    backgroundColor: 'white',
    width: '90%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  iconView: {
    backgroundColor: AppColors.Black,
    padding: 20,
    borderRadius: 100,
  },
  icon: {},
  greenTickView: {
    position: 'absolute',
    left: 195,
  },
  greenTickImage: {
    height: 25,
    width: 25,
  },
  titleDescriptionView: {
    alignItems: 'center',
    width: '60%',
  },
  descriptionText: {
    textAlign: 'center',
    fontFamily: AppFonts.Regular,
    fontSize: 16,
    color: AppColors.GrayDescriptonText,
  },
  buttonView: {
    width: '70%',
  },
  // Details view
  detailsView: {},
  headerView: {},
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
