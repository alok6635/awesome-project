import React, { useContext, useState } from 'react';
import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { AuthContext } from '../../context/AuthContext';

const LoginScreen = ({ navigation }) => {
 const{userLoggedUiHandler} = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const LoginHandler = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }

    try {
      await auth().signInWithEmailAndPassword(email, password)
      .then((userCredential)=>{
        var uid = userCredential?.user.uid;
        userLoggedUiHandler(uid)
        Alert.alert('Success', 'You have successfully logged in!');
        console.log("userId", uid);
      })
    } catch (error) {
      console.error(error);
      } 
    }



  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FF3F00" barStyle="light-content" />

      <View style={{ paddingVertical: 12, width: '95%', alignSelf: 'center', marginBottom: 10 }}>
        <Text style={{ alignSelf: 'center', fontSize: 25, fontWeight: '700' }}>Login</Text>
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

      <TouchableOpacity style={styles.loginbutton} onPress={LoginHandler}>
        <Text style={styles.loginbuttonTxt}>Login</Text>
      </TouchableOpacity>

      <View style={styles.haveAccount}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity
          style={styles.signupButton}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

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
  haveAccount: {
    marginTop: 15,
    width: '95%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  signupButton: {
    backgroundColor: '#FF3F00',
    borderRadius: 25,
    padding: 10,
    elevation: 2,
  },
  signupButtonText: {
    fontSize: 17,
    fontWeight: '600',
    color: 'white',
    alignSelf: 'center',
  },
});



