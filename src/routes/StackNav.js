import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import BottomNav from './BottomNav';
import StartupScreen from '../screens/StartupScreen';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ProductDescriptonScreen from '../screens/ProductDescriptonScreen';

const Stack = createStackNavigator();

function StackNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login_Screen" component={LoginScreen} />
        <Stack.Screen
          name="ProductDescripton_Screen"
          component={ProductDescriptonScreen}
        />
        <Stack.Screen name="Profile_Screen" component={ProfileScreen} />

        <Stack.Screen name="BottomNav" component={BottomNav} />
        <Stack.Screen name="Startup_Screen" component={StartupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNav;
