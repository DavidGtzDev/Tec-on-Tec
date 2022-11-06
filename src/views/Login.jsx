import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Fab } from '@mui/material';

export default function Login(props) {
  return (
    <div style={{display:"flex",flexDirection:"column", justifyContent:"center", height: "100vh"}}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/4/47/Logo_del_ITESM.svg' style={{height:60,marginBottom:20}}></img>
        <Fab variant="extended" onClick={e => signInWithPopup(props.auth, new GoogleAuthProvider())}>
        <img src='https://cdn-icons-png.flaticon.com/512/2991/2991148.png' style={{height:30, marginRight:20}}></img>
          Sign in with Google
        </Fab>
    </div>
  )
}

/*
<h1>Login</h1>
<button onClick={e => signInWithPopup(props.auth, new GoogleAuthProvider())}>With Google</button>
*/
