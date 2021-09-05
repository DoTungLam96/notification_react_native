/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState, useCallback, useEffect} from 'react';
import {View, Text, TouchableOpacity, TextInput,ToastAndroid} from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const handleLogin = useCallback(() =>{
      if (email === '' || password === '')
      {
        ToastAndroid.show('Email or password is empty', ToastAndroid.SHORT);
        return;
      }
      auth().signInWithEmailAndPassword(email, password).then((data) =>{
        navigation.navigate('Home', data.user);
        console.log('success:', data.user);
      })
      .catch((err) => {
        ToastAndroid.show('Email or password is incorrect !', ToastAndroid.SHORT);
        console.log('error', err);
      });
  }, [email, navigation, password]);

  return (
    <View
      style={{
        padding: 16,
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
      }}>
      <Text
        style={{
          flex: 1,
          fontSize: 20,
          marginTop: 50,
          color: 'black',
          fontWeight: 'bold',
        }}>
        Login Firebase
      </Text>
      <View style={{flex: 3, width: '100%'}}>
        <View
          style={{
            width: '100%',
            borderRadius: 25,
            borderWidth: 1,
            height: 55,
            padding: 8,
            marginBottom: 16,
          }}>
          <TextInput
           onChangeText={(text) => setEmail(text)}
            placeholder="Email"
            style={{
              flex: 1,
              fontSize: 14,
              height: 40,
              color: 'black',
              paddingLeft: 5,
            }}
          />
        </View>

        <View
          style={{
            width: '100%',
            borderRadius: 25,
            borderWidth: 1,
            height: 55,
            padding: 8,
          }}>
          <TextInput
             onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            placeholder="Password"
            style={{
              flex: 1,
              fontSize: 14,
              height: 40,
              color: 'black',
              paddingLeft: 5,
            }}
          />
        </View>
        <TouchableOpacity
        onPress={() => handleLogin()}
          style={{
            marginTop: 38,
            borderRadius: 16,
            borderWidth: 1,
            height: 50,
            alignItems: 'center',
            backgroundColor: 'black',
            width: '100%',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white'}}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
