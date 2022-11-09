import React from 'react'
import "../styles/topbar.css"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function Topbar(props) {
  
  return (
    <div class="container-fluid bg-primary">
        <div>
          <img src={props.url} className='profile_picture' onClick={e => signInWithPopup(props.auth, new GoogleAuthProvider())}></img>
        </div>
        <div></div>
    </div>

    // <Box sx={{ flexGrow: 1 }} style={{width: "100vw"}}>
    //   <AppBar position='static'>
    //     <Toolbar>
    //       <IconButton onClick={e => signInWithPopup(props.auth, new GoogleAuthProvider())} sx={{ p: 0 }}>
    //         <Avatar alt="pfp" src={props.url} />
    //       </IconButton>
    //     </Toolbar>
    //   </AppBar>
    // </Box>
  )
}
