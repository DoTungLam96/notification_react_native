/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '../screens/loginScreen';
import {Home} from '../screens/homeScreen';
import {fcmService} from '../notification/FCMService';
import {localNotificationService} from '../notification/LocalNotificationService';
import { useEffect } from 'react';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  useEffect(() => {
    fcmService.registerAppWithFCM();
    fcmService.register(onRegister, onNotification, onOpenNotification);
    localNotificationService.configure(onOpenNotification);

    function onRegister(token) {
      console.log('[App] onRegister: ', token);
    }

    function onNotification(notify) {
      console.log('[App] onNotification: ', notify);
      localNotificationService.showNotificationLocal('channel_1', notify.title, notify.body);
    }

    function onOpenNotification(notify) {
      console.log('[App] onOpenNotification: ', notify);
      // localNotificationService.showNotificationLocal('demo.mp3');
      // alert('Open Notification: ' + notify.body);
    }

    return () => {
      console.log('[App] unRegister');
      fcmService.unRegister();
      localNotificationService.unregister();
    };

  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Login}
       screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
