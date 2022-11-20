import React from 'react'
import "../styles/topbar.css"
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

export default function Topbar(props) {
  let view
  let control = false

  function handleListaDeAlumnos(e){
    if(control == false){
      control = true
      props.setAlumnlist(true)
    }else{
      control = false
      props.setAlumnlist(false)
    }
  }
  
  if(typeof(props.role) != "undefined"){
    if(props.role == "Docente"){
      view = <button type="button" class="btn btn-dark rounded float-end" onClick={e => handleListaDeAlumnos(e)}>Mis Alumnos</button>
      //view = <></>
    }else if(props.role == "Estudante"){

    }
  }

  return(
    <div class="container-fluid bg-dark text-center">
    <button type="button" class="btn btn-dark rounded float-end" onClick={e => signOut(props.auth)}>
      <i class="bi bi-box-arrow-right fs-4"></i>
    </button>
    <button type="button" class="btn btn-dark rounded float-end">
      <img src={props.url} alt={"P"} height="35rem" class="rounded-circle profile_picture"></img>
    </button>
    <div>
    {view}
    </div>
    <div></div>
  </div>
  )
    // <Box sx={{ flexGrow: 1 }} style={{width: "100vw"}}>
    //   <AppBar position='static'>
    //     <Toolbar>
    //       <IconButton onClick={e => signInWithPopup(props.auth, new GoogleAuthProvider())} sx={{ p: 0 }}>
    //         <Avatar alt="pfp" src={props.url} />
    //       </IconButton>
    //     </Toolbar>
    //   </AppBar>
    // </Box>
  
}
