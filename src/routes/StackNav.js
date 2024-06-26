import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import BottomNav from './BottomNav';
import RegisterSuccessScreen from '../screens/RegisterSuccessScreen';
import StartupScreen from '../screens/StartupScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import PersonalDetailScreen from '../screens/PersonalDetailScreen';
import ProductDescriptonScreen from '../screens/ProductDescriptonScreen';

import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();

function StackNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Profile_Screen" component={ProfileScreen} />
        <Stack.Screen name="Startup_Screen" component={StartupScreen} />
        <Stack.Screen
          name="RegisterSuccess_Screen"
          component={RegisterSuccessScreen}
        />
        <Stack.Screen name="SignUp_Screen" component={SignUpScreen} />
        <Stack.Screen name="Login_Screen" component={LoginScreen} />
        <Stack.Screen
          name="ProductDescripton_Screen"
          component={ProductDescriptonScreen}
        />
        <Stack.Screen
          name="PersonalDetail_Screen"
          component={PersonalDetailScreen}
        />

        <Stack.Screen name="BottomNav" component={BottomNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNav;
