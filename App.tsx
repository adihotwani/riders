/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import SplashScreen from './src/screens/SplashScreen';
import Login from './src/screens/Login';
import OTP from './src/screens/OTP';
import Home from './src/screens/Home';
import Settings from './src/screens/Settings';
import BookRide from './src/screens/BookRide';
import Notifications from './src/screens/Notifications';
import MyProfile from './src/screens/MyProfile';
import MyRides from './src/screens/MyRides';
import ReferEarn from './src/screens/ReferEarn';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PlaceProvider} from './src/components/PlacesManager';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <PlaceProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {/* <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="OTP" component={OTP} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="MyProfile" component={MyProfile} />
          <Stack.Screen name="ReferEarn" component={ReferEarn} />
          <Stack.Screen name="MyRides" component={MyRides} />
          <Stack.Screen name="Notifications" component={Notifications} /> */}
          <Stack.Screen
            name="BookRide"
            component={BookRide}
            options={() => ({
              headerTitle: 'Taxi App',
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PlaceProvider>
  );
};

export default App;
