import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../loginSignupScreen/LoginScreen';
import SignupScreen from '../loginSignupScreen/SignupScreen';
// import SignupNextScreen from '../loginSignupScreen/SignupNextScreen';
const Stack = createNativeStackNavigator();


const AuthStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
        {/* <Stack.Screen name="SignupNextScreen" component={SignupNextScreen} options={{ title: 'Signup' }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default AuthStack;