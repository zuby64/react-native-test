import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {showMessage} from 'react-native-flash-message';
import AsyncStorage from '@react-native-community/async-storage';
import CustomButton from '../../components/CustomButton';
import {InputBorBotmColr, validateEmail} from '../../util';
import {AuthContext} from '../../context/AuthContext';

export default function Login({navigation}: {navigation: any}) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const {signIn} = useContext(AuthContext);

  const login = async () => {
    if (email.length == 0 || !validateEmail(email)) {
      showMessage({
        message: 'Info',
        description: `Enter valid email address`,
        type: 'info',
      });
    } else if (password.length == 0 || password !== 'password') {
      showMessage({
        message: 'Info',
        description: `Enter valid password`,
        type: 'info',
      });
    } else {
      //storing token in local storage  so next time user,opens app (if user is logged in)
      //it will lead to Home instead of auth flow
      await AsyncStorage.setItem('token', 'sometoken');
      await AsyncStorage.setItem('userData', email);
      signIn('sometoken');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          placeholder="Email"
          onChangeText={setEmail}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <CustomButton onPress={login} toggle>
        Sign In
      </CustomButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: hp(5),
    paddingHorizontal: wp(8),
  },

  formContainer: {
    flex: 0,
    paddingVertical: hp(2),
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: InputBorBotmColr,
  },
});
