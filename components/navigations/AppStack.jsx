import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import HomeScreen from '../mainScreens/HomeScreen';
import UserCartScreen from '../mainScreens/UserCartScreen';
import UserProfile from '../mainScreens/UserProfile';
import ProductDetails from '../mainScreens/ProductDetails';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {

  const HomeStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} options={{ title: 'Product Details' }} />
    </Stack.Navigator>
  );


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
            }  else if (route.name === 'Profile') {
              iconName = 'user';
            } 
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
        <Tab.Screen name="Cart" component={UserCartScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Profile" component={UserProfile} options={{ headerShown: false }} />
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
