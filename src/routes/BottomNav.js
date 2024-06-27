import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CatagoriesScreen from '../screens/CatagoriesScreen';
import CartScreen from '../screens/CartScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ProfileScreen from '../screens/ProfileScreen';

import CustomTabBar from '../components/common/CustomTabBar';

const Tab = createBottomTabNavigator();

function BottomNav() {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="CatagoriesScreen" component={CatagoriesScreen} />
      <Tab.Screen name="CartScreen" component={CartScreen} />
      <Tab.Screen name="NotificationScreen" component={NotificationScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default BottomNav;
