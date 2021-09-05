/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, TextInput, ToastAndroid} from 'react-native';
export const Home = ({route}) => {
  useEffect(() =>{
    ToastAndroid.show(`Hello, ${route.params.email}`, ToastAndroid.LONG);
  }, [route.params]);
  return (
    <View
      style={{
        padding: 16,
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          flex: 1,
          fontSize: 22,
          marginTop: 50,
          fontWeight: 'bold',
        }}>
       Welcome to Home!
      </Text>
    </View>
  );
};
