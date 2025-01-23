import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../mainScreens/HomeScreen';
import Icon from 'react-native-vector-icons/AntDesign';
import ProductScreen from '../mainScreens/ProductScreen';
import UserCartScreen from '../mainScreens/UserCartScreen';
import TrackOrderScreen from '../mainScreens/TrackOrderScreen';
import UserProfile from '../mainScreens/UserProfile';
import AccountAndSettings from '../mainScreens/AccountAndSettings';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ProductScreen" component={ProductScreen} options={{ headerShown: false }} />
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
            } else if (route.name === 'Cart') {
              iconName = 'shoppingcart';
            } else if (route.name === 'TrackOrder') {
              iconName = 'profile'; 
            } else if (route.name === 'Profile') {
              iconName = 'user';
            } else if (route.name === 'Settings') {
              iconName = 'setting';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
        <Tab.Screen name="Cart" component={UserCartScreen} options={{ headerShown: false }} />
        <Tab.Screen name="TrackOrder" component={TrackOrderScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Profile" component={UserProfile} options={{ headerShown: false }} />
        <Tab.Screen name="Settings" component={AccountAndSettings} options={{ headerShown: false }} />
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
