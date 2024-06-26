import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CatagoriesScreen from '../screens/CatagoriesScreen';
import CartScreen from '../screens/CartScreen';
import PersonalDetailScreen from '../screens/PersonalDetailScreen';

const Tab = createBottomTabNavigator();

function BottomNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="CatagoriesScreen" component={CatagoriesScreen} />
      <Tab.Screen name="CartScreen" component={CartScreen} />
      <Tab.Screen
        name="PersonalDetailScreen"
        component={PersonalDetailScreen}
      />
    </Tab.Navigator>
  );
}

export default BottomNav;
