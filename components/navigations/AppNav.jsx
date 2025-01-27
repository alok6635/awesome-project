import React, { useContext, useEffect } from 'react';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import { AuthContext } from '../../context/AuthContext';

const AppNav = () => {
  // const {userLoggedUid,checkIsLogged} = useContext(AuthContext);
  // console.log('AppNav (UID)', userLoggedUid)

    // useEffect(()=>{
    //   checkIsLogged()
    // })
    
  return (
    <>
      {/* {
        userLoggedUid ? 
        <AppStack/> : <AuthStack/>
      } */}

      <AppStack/>
    </>
  )
}
export default AppNav;

