import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function Login(props) {
  return (
    <div>
        <h1>Login</h1>
        <button onClick={e => signInWithPopup(props.auth, new GoogleAuthProvider())}>With Google</button>
    </div>
  )
}
