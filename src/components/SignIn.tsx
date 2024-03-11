import {View, Text, TextInput, Pressable, Dimensions} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
import firebase from 'firebase/compat/app';

const SignIn = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');
  const verifyOTP: string = process.env.REACT_APP_VERIFY_OTP_URL;
  const handleSubmit = async () => {
    try {
      const response = await axios.post(verifyOTP, {
        phoneNumber: phoneNumber,
        code: code,
      });
      firebase.auth().signInWithCustomToken(response.data.token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View
      style={{
        width: Dimensions.get('window').width * 0.85,
        marginTop: 40,
      }}>
      <View>
        <Text
          style={{
            color: 'black',
            marginBottom: 10,
          }}>
          Enter Phone Number
        </Text>
        <TextInput
          placeholder="0534"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          style={{
            backgroundColor: '#ececec',
            borderRadius: 10,
            paddingLeft: 10,
            marginBottom: 10,
          }}
        />
        <Text
          style={{
            color: 'black',
            marginBottom: 10,
          }}>
          Enter Code
        </Text>
        <TextInput
          placeholder="0534"
          value={code}
          onChangeText={setCode}
          style={{
            backgroundColor: '#ececec',
            borderRadius: 10,
            paddingLeft: 10,
            marginBottom: 10,
          }}
        />
        <Pressable
          onPress={handleSubmit}
          style={{
            backgroundColor: 'cornflowerblue',
            paddingVertical: 12,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text
            style={{
              color: 'white',
              fontWeight: '600',
              fontSize: 16,
            }}>
            Sign In
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignIn;
