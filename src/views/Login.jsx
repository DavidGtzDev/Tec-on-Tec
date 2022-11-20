import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Fab } from '@mui/material';


export default function Login(props) {
  return (
    <div style={{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center", height: "100vh"}}>
        <h1>Consulta tu horario</h1>
        <p>Este proyecto tiene el propósito de agilizar la consulta de los horarios de los alumnos del Teecnológico de Monterrey</p>
        <img src='/Logo_del_ITESM.svg' style={{height:60,marginBottom:20}}></img>
        <Fab variant="extended" onClick={e => signInWithPopup(props.auth, new GoogleAuthProvider())}style={{width:"30vw"}} >
        <img src='/2000px-Google_G_Logo.svg_.png' style={{height:30, marginRight:20}}></img>
          Sign in with Google
        </Fab>
    </div>
  )
}

/*
<h1>Login</h1>
<button onClick={e => signInWithPopup(props.auth, new GoogleAuthProvider())}>With Google</button>
*/
