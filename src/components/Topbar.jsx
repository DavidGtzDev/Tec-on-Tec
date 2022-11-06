import React from 'react'
import "../styles/topbar.css"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import { Toolbar } from '@mui/material';


export default function Topbar(props) {
  
  return (
  /* 
    <div className='topbar'>
        <div>
        <img src={props.url} className='profile_picture' onClick={e => signInWithPopup(props.auth, new GoogleAuthProvider())}></img>
        </div>
        <div></div>
    </div>
  */
    <Box sx={{ flexGrow: 1 }} style={{width: "100vw"}}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton onClick={e => signInWithPopup(props.auth, new GoogleAuthProvider())} sx={{ p: 0 }}>
            <Avatar alt="pfp" src={props.url} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
