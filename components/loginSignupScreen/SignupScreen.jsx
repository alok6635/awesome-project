import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { AuthContext } from '../../context/AuthContext';

const SignupScreen = ({ navigation }) => {
 const{userLoggedUiHandler} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signupHandler = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }

    try {
      await auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential)=>{
        var uid = userCredential?.user.uid;
        userLoggedUiHandler(uid)
        Alert.alert('Success', ' account created! Success');
      navigation.navigate('Login');
      })
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('Error', 'That email address is already in use!');
      } else if (error.code === 'auth/invalid-email') {
        Alert.alert('Error', 'That email address is invalid!');
      } else if (error.code === 'auth/weak-password') {
        Alert.alert('Error', 'The password is too weak!');
      } else {
        Alert.alert('Error', 'Something went wrong. Please try again.');
      }
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FF3F00" />
      <View style={{ paddingVertical: 12, width: '95%', alignSelf: 'center', marginBottom: 10 }}>
        <Text style={{ alignSelf: 'center', fontSize: 25, fontWeight: '700' }}>Sign up</Text>
      </View>

      <View style={styles.inputCont}>
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputCont}>
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity style={styles.loginbutton} onPress={signupHandler}>
        <Text style={styles.loginbuttonTxt}>Sign up</Text>
      </TouchableOpacity>

      <View style={{ marginTop: 15, width: '95%', alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text>Already have an account?</Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#FF3F00',
            borderRadius: 25,
            alignSelf: 'center',
            padding: 10,
            elevation: 2,
          }}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={{ fontSize: 17, fontWeight: '600', color: 'white', alignSelf: 'center', paddingHorizontal: 10 }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  inputCont: {
    flexDirection: 'row',
    padding: 10,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 25,
    marginBottom: 10,
    width: '95%',
    alignSelf: 'center',
  },
  input: {
    paddingLeft: 5,
    width: '90%',
  },
  loginbutton: {
    backgroundColor: '#FF3F00',
    borderRadius: 25,
    width: '95%',
    alignSelf: 'center',
    padding: 10,
    elevation: 2,
  },
  loginbuttonTxt: {
    fontSize: 17,
    fontWeight: '600',
    color: 'white',
    alignSelf: 'center',
  },
});
