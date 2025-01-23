import { createContext, useState } from "react";
import {AsyncStorage} from 'react-native';
const AuthContext = createContext();

const AuthProvider=({children})=>{
const [userLoggedUid,setUserLoggedUid]= useState(null);

 const userLoggedUiHandler=(userid)=>{
    setUserLoggedUid(userid)
    AsyncStorage.setItem('userLoggedUid',userid)
 } 
 console.log('AuthContext (UID)', userLoggedUid)


 const checkIsLogged = async()=>{
       try {
          const value = await AsyncStorage.getItem('userLoggedUid');
          if(value !==null){
               setUserLoggedUid(value)
          }
          else{
               console.log('user logged UID not found in asyncStorage',value);
          }
       } catch (error) {
            console.log('Error retrieving userloggeduid', error)
       }
 }


      return <AuthContext.Provider value={{userLoggedUid, userLoggedUiHandler, checkIsLogged}}>
           {children}
      </AuthContext.Provider>
}
export {AuthContext,AuthProvider};