import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Fab } from '@mui/material';


export default function Login(props) {
  return (
    <div style={{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center", height: "100vh", backgroundColor: "#212529"}}>
        <img src="/TecOnTime.png" style={{height:150,marginBottom:20}}></img>
        <Fab variant="extended" onClick={e => signInWithPopup(props.auth, new GoogleAuthProvider())}style={{width:"30vw"}} >
        <img src='/2000px-Google_G_Logo.svg_.png' style={{height:30, marginRight:20}}></img>
          Consulta tu horario
        </Fab>
    </div>
  )
}

/*
<h1>Login</h1>
<button onClick={e => signInWithPopup(props.auth, new GoogleAuthProvider())}>With Google</button>
*/
