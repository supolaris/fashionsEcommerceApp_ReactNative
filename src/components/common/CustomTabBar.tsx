import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';

import {AppColors} from '../../constants/AppColors';
import {AppFonts} from '../../constants/AppFonts';

import HomeIcon from 'react-native-vector-icons/Entypo';
import CartIcon from 'react-native-vector-icons/Entypo';
import BellIcon from 'react-native-vector-icons/FontAwesome';
import UserIcon from 'react-native-vector-icons/FontAwesome';

function CustomTabBar({
  state,
  descriptors,
  navigation,
}: {
  state: any;
  descriptors: any;
  navigation: any;
}) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={styles.iconTexttouchable}>
            {index == 0 ? (
              <>
                {isFocused ? (
                  <View style={styles.focusedIconTextView}>
                    <HomeIcon
                      style={[
                        styles.icon,
                        isFocused ? styles.focusedStyles : null,
                      ]}
                      name="home"
                      size={isFocused ? 20 : 25}
                      color={isFocused ? AppColors.White : AppColors.Black}
                    />
                    <Text style={styles.focusedScreenTitleText}>Home</Text>
                  </View>
                ) : (
                  <View style={styles.iconTextView}>
                    <HomeIcon
                      style={[
                        styles.icon,
                        isFocused ? styles.focusedStyles : null,
                      ]}
                      name="home"
                      size={isFocused ? 20 : 25}
                      color={isFocused ? AppColors.White : AppColors.Black}
                    />
                  </View>
                )}
              </>
            ) : index == 1 ? (
              <>
                {isFocused ? (
                  <View style={styles.focusedIconTextView}>
                    <CartIcon
                      style={[
                        styles.icon,
                        isFocused == true ? styles.focusedStyles : null,
                      ]}
                      name="shopping-cart"
                      size={isFocused ? 20 : 25}
                      color={isFocused ? AppColors.White : AppColors.Black}
                    />
                    <Text style={styles.focusedScreenTitleText}>Cart</Text>
                  </View>
                ) : (
                  <View style={styles.iconTextView}>
                    <CartIcon
                      style={[
                        styles.icon,
                        isFocused ? styles.focusedStyles : null,
                      ]}
                      name="shopping-cart"
                      size={isFocused ? 20 : 25}
                      color={isFocused ? AppColors.White : AppColors.Black}
                    />
                  </View>
                )}
              </>
            ) : index == 2 ? (
              <>
                {isFocused ? (
                  <View style={styles.focusedIconTextView}>
                    <BellIcon
                      style={[
                        styles.icon,
                        isFocused ? styles.focusedStyles : null,
                      ]}
                      name="bell"
                      size={isFocused ? 20 : 25}
                      color={isFocused ? AppColors.White : AppColors.Black}
                    />
                    <Text style={styles.focusedScreenTitleText}>
                      Notification
                    </Text>
                  </View>
                ) : (
                  <View style={styles.iconTextView}>
                    <BellIcon
                      style={[
                        styles.icon,
                        isFocused ? styles.focusedStyles : null,
                      ]}
                      name="bell"
                      size={isFocused ? 20 : 25}
                      color={isFocused ? AppColors.White : AppColors.Black}
                    />
                  </View>
                )}
              </>
            ) : index == 3 ? (
              <>
                {isFocused ? (
                  <View style={styles.focusedIconTextView}>
                    <UserIcon
                      style={[
                        styles.icon,
                        isFocused ? styles.focusedStyles : null,
                      ]}
                      name="user"
                      size={isFocused ? 20 : 25}
                      color={isFocused ? AppColors.White : AppColors.Black}
                    />
                    <Text style={styles.focusedScreenTitleText}>Profile</Text>
                  </View>
                ) : (
                  <View style={styles.iconTextView}>
                    <UserIcon
                      style={[
                        styles.icon,
                        isFocused ? styles.focusedStyles : null,
                      ]}
                      name="user"
                      size={isFocused ? 20 : 25}
                      color={isFocused ? AppColors.White : AppColors.Black}
                    />
                  </View>
                )}
              </>
            ) : null}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
export default CustomTabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 65,
    borderWidth: 1,
    width: '100%',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: '#ffffff',
    position: 'absolute',
    bottom: 0,
    shadowColor: '#000000',
  },
  iconTexttouchable: {
    flex: 1,
    alignItems: 'center',
  },
  focusedIconTextView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: AppColors.LightGray2,
  },
  focusedScreenTitleText: {
    paddingLeft: 3,
    paddingRight: 6,
    fontSize: 13,
    color: AppColors.Black,
    fontFamily: AppFonts.Bold,
  },
  iconTextView: {
    alignItems: 'center',
  },
  icon: {},
  focusedStyles: {
    backgroundColor: AppColors.Black,
    padding: 8,
    borderRadius: 100,
  },
  text: {
    fontSize: 16,
  },
});
