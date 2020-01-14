import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserInfo from './components/UserInfo';
import UserLogin from './components/UserLogin';
import UserPage from './components/UserPage';
import UserProvider from './provider/UserProvider';
import PrivateProvider from './provider/PrivateProvider';

import PrivateInfo from './components/PrivateInfo';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <UserInfo></UserInfo>
        <UserLogin></UserLogin>
        <UserPage></UserPage>
        
      </UserProvider>


      <UserProvider>
        <PrivateProvider>
          <PrivateInfo></PrivateInfo>
        </PrivateProvider>        
      </UserProvider>
      
    </div>
  );
}

export default App;
