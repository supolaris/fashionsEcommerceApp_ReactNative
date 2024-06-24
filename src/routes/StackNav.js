import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import BottomNav from './BottomNav';
import StartupScreen from '../screens/StartupScreen';
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
        <Stack.Screen name="BottomNav" component={BottomNav} />
        <Stack.Screen name="Startup_Screen" component={StartupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNav;
