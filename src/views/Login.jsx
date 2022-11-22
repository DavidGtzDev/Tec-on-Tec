import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Fab } from '@mui/material';
import { Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import "../styles/login.css";


export default function Login(props) {
  return (
    // <div style={{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center", height: "100vh", backgroundColor: "#212529"}}>
    //     <img src="/TecOnTime.png" style={{height:150,marginBottom:20}}></img>
    //     <Fab variant="extended" onClick={e => signInWithPopup(props.auth, new GoogleAuthProvider())} >
    //     <img src='/2000px-Google_G_Logo.svg_.png' style={{height:30, marginRight:20}}></img>
    //       Consulta tu horario
    //     </Fab>
    // </div>

    <div class="overflow-hidden vh-100 bg-dark">
      <img src="/tec-instalaciones.jpg" class="img-fluid w-100 h-100 opacity-75 d-none d-md-inline position-absolute"></img>
      <div class="container-fluid container-md rounded my-0 my-md-5 mx-0 mx-md-auto overflow-hidden position-relative">
        <div class="row">
          <div class="col-sm-12 col-md-7 order-2 order-md-1 bg-blue-midgray pb-5">
            <img src='/TecOnTime.png' class="tec_logo d-none d-md-inline mt-3 mb-3 ms-3"></img> <br></br>
            <div class="text-center w-75 d-block mx-auto">
              <p class="fs-4 text-light mb-0">¡Consulta tu horario académico!</p>
              <img src='/calendar.png' class="w-75 mb-0 d-block m-auto"></img>
              <p class="fs-6 text-light mb-5 py-3 py-sm-0">Aquí podrás encontrar información sobre tus unidades de formación del semestre.</p>
            </div>
          </div>
          <div class="col-sm-12 col-md-5 order-1 order-md-2 text-center bg-blue-fullgray pb-5 pt-md-5">
            <img src='/TecOnTime.png' class="tec_logo d-inline d-md-none mt-3 mb-2 float-start"></img>
            <br></br>
            <div class="d-inline-block w-100">
              <h4 class="text-light pt-2 pb-1">¡Bienvenido!</h4>
              <p class="text-light fs-6 mb-4">Inicia sesión con tu cuenta institucional.</p>
              <Button variant='contained' startIcon={<GoogleIcon/>} size='large' onClick={e => signInWithPopup(props.auth, new GoogleAuthProvider())}>Ingresa con Google</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
