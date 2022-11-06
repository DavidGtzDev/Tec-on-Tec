import React, { useState } from 'react';
import Home from './views/Home';
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Login from './views/Login';



const firebaseConfig = {
  apiKey: "AIzaSyDPLFR9IrJObMp8ltBsqjatf2g5LO7fPsw",
  authDomain: "tec-on-tec.firebaseapp.com",
  projectId: "tec-on-tec",
  storageBucket: "tec-on-tec.appspot.com",
  messagingSenderId: "1090174315433",
  appId: "1:1090174315433:web:ac12162d42468c055472b8",
  measurementId: "G-T8VPLW4J4Z"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


function App() {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, u =>{
    setUser(u)
  })

  if(user != null){
    if(user["email"].split("@")[1] == "tec.mx"){
      return (
        <Home url={user["photoURL"]} auth={auth} user={user}></Home>
      );
    }else{
      return(
        <Login auth={auth}></Login>
      );
    }
    
  }else{
    return(
      <Login auth={auth}></Login>
    );
  }
  
}

export default App

