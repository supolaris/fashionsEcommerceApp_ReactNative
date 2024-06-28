import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import BottomNav from './BottomNav';
import RegisterSuccessScreen from '../screens/RegisterSuccessScreen';

import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ProductDescriptonScreen from '../screens/ProductDescriptonScreen';
import PersonalDetailScreen from '../screens/PersonalDetailScreen';
import SelectLanguageScreen from '../screens/SelectLanguageScreen';
import ProductsScreen from '../screens/ProductsScreen';
import SelectCountryScreen from '../screens/SelectCountryScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CardDetailScreen from '../screens/CardDetailScreen';
import ProductsFilterScreen from '../screens/ProductsFilterScreen';

import FirstScreen from '../screens/FirstScreen';
import SecondScreen from '../screens/SecondScreen';

import StartupScreen from '../screens/StartupScreen';
import StartupScreen2 from '../screens/StartupScreen2';
import StartupScreen3 from '../screens/StartupScreen3';

import ReviewScreen from '../screens/ReviewScreen';
import PaymentMethodScreen from '../screens/PaymentMethodScreen';
import ProductTrackingScreen from '../screens/ProductTrackingScreen';
import CartScreen from '../screens/CartScreen';

import HomeScreen from '../screens/HomeScreen';
import CatagoriesScreen from '../screens/CatagoriesScreen';

const Stack = createStackNavigator();

function StackNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="First_Screen" component={FirstScreen} />
        <Stack.Screen name="Second_Screen" component={SecondScreen} />

        <Stack.Screen name="Startup_Screen" component={StartupScreen} />
        <Stack.Screen name="Startup_Screen2" component={StartupScreen2} />
        <Stack.Screen name="Startup_Screen3" component={StartupScreen3} />

        <Stack.Screen name="SignUp_Screen" component={SignUpScreen} />
        <Stack.Screen name="Login_Screen" component={LoginScreen} />
        <Stack.Screen
          name="RegisterSuccess_Screen"
          component={RegisterSuccessScreen}
        />
        <Stack.Screen name="Products_Screen" component={ProductsScreen} />
        <Stack.Screen name="Cart_Screen" component={CartScreen} />
        <Stack.Screen name="Home_Screen" component={HomeScreen} />

        <Stack.Screen
          name="ProductTracking_Screen"
          component={ProductTrackingScreen}
        />
        <Stack.Screen
          name="PaymentMethod_Screen"
          component={PaymentMethodScreen}
        />
        <Stack.Screen name="Catagories_Screen" component={CatagoriesScreen} />
        <Stack.Screen name="Review_Screen" component={ReviewScreen} />

        <Stack.Screen name="BottomNav" component={BottomNav} />

        <Stack.Screen name="Profile_Screen" component={ProfileScreen} />
        <Stack.Screen
          name="PersonalDetail_Screen"
          component={PersonalDetailScreen}
        />

        <Stack.Screen name="CardDetail_Screen" component={CardDetailScreen} />

        <Stack.Screen
          name="ProductsFilter_Screen"
          component={ProductsFilterScreen}
        />
        <Stack.Screen
          name="SelectLanguage_Screen"
          component={SelectLanguageScreen}
        />

        <Stack.Screen
          name="SelectCountry_Screen"
          component={SelectCountryScreen}
        />

        <Stack.Screen
          name="ProductDescripton_Screen"
          component={ProductDescriptonScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNav;
