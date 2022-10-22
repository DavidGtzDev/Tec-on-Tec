import React from 'react'
import "../styles/topbar.css"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function Topbar(props) {
  
  return (
    <div className='topbar'>
        <div>
        <img src={props.url} className='profile_picture' onClick={e => signInWithPopup(props.auth, new GoogleAuthProvider())}></img>
        </div>
        <div></div>
    </div>
  )
}
