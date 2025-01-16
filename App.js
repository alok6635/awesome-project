import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import AppNav from './components/navigations/AppNav';


const App = () => {
  useEffect(()=>{
       SplashScreen.hide();
  },[])

  return (
    <AppNav/>
     );
};

export default App;
