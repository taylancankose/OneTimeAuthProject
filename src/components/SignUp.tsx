import {View, Text, TextInput, Pressable, Dimensions} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';

const SignUp = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const createUser: string = process.env.CREATE_USER_URL;
  const OTP: string = process.env.OTP_URL;
  const handleSubmit = async () => {
    try {
      await axios.post(createUser, {
        phoneNumber: phoneNumber,
      });
      console.log('first');
      const data = await axios.post(OTP, {
        phoneNumber: phoneNumber,
      });
      console.log(data);
    } catch (error) {
      console.log(error, 'error');
    }
  };

  return (
    <View
      style={{
        width: Dimensions.get('window').width * 0.85,
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
            Submit
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignUp;
