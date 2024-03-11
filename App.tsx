import React, {useEffect} from 'react';
import {View} from 'react-native';
import SignUp from './src/components/SignUp';
import SignIn from './src/components/SignIn';
import {initializeApp} from 'firebase/app';
import {firebaseConfig} from './src/data/firebaseConfig';

function App(): React.JSX.Element {
  useEffect(() => {
    initializeApp(firebaseConfig);
  }, []);
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <SignUp />
      <SignIn />
    </View>
  );
}

export default App;
