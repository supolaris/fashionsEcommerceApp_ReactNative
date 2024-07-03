import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {AppColors} from '../../constants/AppColors';
import {AppFonts} from '../../constants/AppFonts';

import PrimaryTitle from '../common/Titles/PrimaryTitle';
import PrimaryHeader from '../common/Headers/PrimaryHeader';
import PrimaryDescription from '../common/Descriptions/PrimaryDescription';
import SecondaryTitle from '../common/Titles/SecondaryTitle';

import SendIcon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Iprops {
  onHeaderBackArrowPressed: () => void;
}

const ProductTracking = (props: Iprops) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerView}>
        <PrimaryHeader
          onHeaderBackArrowPressed={props.onHeaderBackArrowPressed}
          showSearchIcon={false}
        />
      </View>
      <View style={styles.productCodeTitleView}>
        <PrimaryTitle text="US 2343445668" />
        <View style={styles.descriptonView}>
          <PrimaryDescription text="Washington - Georgia" />
        </View>
      </View>
      <View style={styles.mapImageView}>
        <Image
          style={styles.mapImage}
          source={require('../../assets/images/mapImage.jpg')}
        />
      </View>
      <View style={styles.colloctionPointView}>
        <View style={styles.collectionPointTitleView}>
          <SecondaryTitle text="Collection Point" />
        </View>
        <View style={styles.timeLocationIconView}>
          <View style={styles.timeLocationView}>
            <PrimaryDescription text="10:00 - 11:00 - 25 June, 2024" />
            <PrimaryDescription text="3512 Nagercoil, India" />
          </View>
          <View>
            <SendIcon name="send-circle" size={45} color={AppColors.Black} />
          </View>
        </View>

        {/* Pick up time view */}
        <View style={styles.pickupMessageButtonView}>
          <View style={styles.pickupMessageView}>
            <PrimaryDescription text="You can change pickup time for your order by 10:00, 24 June" />
          </View>
          <TouchableOpacity style={styles.pickupButtonTouchable}>
            <Text style={styles.picktupButtonText}>Change</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* History */}
      <View style={styles.historyView}>
        <View style={styles.historyTitleView}>
          <SecondaryTitle text="History" />
        </View>
        <View style={styles.dateHistoryView}>
          <View style={styles.dateDescriptionView}>
            <SecondaryTitle text="June 26" />
            <PrimaryDescription text="11:00" />
          </View>
          <View style={styles.messageDescriptionView}>
            <SecondaryTitle text="Package has been received" />
            <PrimaryDescription text="Tamil Nadu" />
          </View>
        </View>
        <View style={styles.dateHistoryView}>
          <View style={styles.dateDescriptionView}>
            <SecondaryTitle text="June 25" />
            <PrimaryDescription text="20:30" />
          </View>
          <View style={styles.messageDescriptionView}>
            <SecondaryTitle text="Arrived at destination area" />
            <PrimaryDescription text="End of tracking delivery tomorrow" />
          </View>
        </View>
        <View style={styles.dateHistoryView}>
          <View style={styles.dateDescriptionView}>
            <SecondaryTitle text="June 24" />
            <PrimaryDescription text="9:45" />
          </View>
          <View style={styles.messageDescriptionView}>
            <SecondaryTitle text="Accepted by GHL" />
            <PrimaryDescription text="Delhi - India" />
          </View>
        </View>
        <View style={styles.dateHistoryView}>
          <View style={styles.dateDescriptionView}>
            <SecondaryTitle text="June 22" />
            <PrimaryDescription text="13:5" />
          </View>
          <View style={styles.messageDescriptionView}>
            <SecondaryTitle text="Arrived at destination" />
            <PrimaryDescription text="Washington - llinois" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductTracking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingBottom: 20,
    backgroundColor: AppColors.White,
  },
  headerView: {},
  productCodeTitleView: {},
  descriptonView: {
    marginTop: -10,
  },
  mapImageView: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  mapImage: {
    height: 150,
    width: '99%',
    borderRadius: 10,
  },
  colloctionPointView: {},
  collectionPointTitleView: {
    paddingTop: 10,
  },
  timeLocationIconView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 0.5,
  },
  timeLocationView: {},
  pickupMessageButtonView: {
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  pickupMessageView: {
    width: '70%',
  },

  pickupButtonTouchable: {
    height: 35,
    backgroundColor: AppColors.Black,
    borderRadius: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  picktupButtonText: {
    color: AppColors.White,
    fontSize: 13,
    fontFamily: AppFonts.Regular,
  },
  historyView: {
    paddingBottom: 30,
  },
  historyTitleView: {
    paddingTop: 20,
    paddingBottom: 10,
  },
  dateHistoryView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  dateDescriptionView: {
    width: '30%',
  },
  messageDescriptionView: {
    width: '70%',
  },
});
