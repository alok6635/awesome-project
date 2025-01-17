import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import AppNav from './components/navigations/AppNav';
import { AuthProvider } from './context/AuthContext';


const App = () => {
     useEffect(() => {
          SplashScreen.hide();
     }, [])

     
return (
          <AuthProvider>
               <AppNav />
          </AuthProvider>
     );
};
export default App;
