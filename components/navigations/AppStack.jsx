import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../mainScreens/HomeScreen';
import Profile from '../mainScreens/Profile';
import Icon from 'react-native-vector-icons/AntDesign';
import ProductScreen from '../mainScreens/ProductScreen';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen  name='ProductScreen' component={ProductScreen}  options={{headerShown: false}}/>
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: styles.tabBar,
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home'; 
            } else if (route.name === 'Profile') {
              iconName = 'user'; 
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
        <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};


const styles = {
  tabBar: {
    backgroundColor: '#fff',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
};

export default App;
