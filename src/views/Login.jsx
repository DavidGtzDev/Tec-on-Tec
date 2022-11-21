import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Fab } from '@mui/material';
import '/src/styles/css/bootstrap.min.css'
import '/src/styles/css/all.min.css'
import '/src/styles/css/style.css'

export default function Login(props) {
  return (
    <div className="form-login-body">
      <div className="container">
                <div className="row">
                    <div className="col-lg-10 mx-auto login-desk">
                        <div className="row">
                            <div className="col-md-7 detail-box bg-dark text-light">
                                <img className="logo" src="/TecOnTime.png" alt=""></img>
                                <div className="detailsh">
                                    <img className="help" src="/ilustracion.png" alt="" style={{width: 300}}></img>
                                    <h3 className="text-light font-weight-bold">¡Consulta tu horario académico!</h3>
                                    <p>Aquí podrás encontrar información sobre las materias que llevas en el semestre.</p>
                                </div>
                            </div>
                            <div className="col-md-5 loginform align-middle">
                                <h4 className="mb-2 font-weight-bold">¡Bienvenido!</h4>
                                <p>Para iniciar sesión, ingresa con el boton inferior.</p>
                                <div className="login-det">
                                  <div id='root'></div>
                                  <button className="btn btn-sm btn-danger font-weight-bold mt-3 p-3" onClick={e => signInWithPopup(props.auth, new GoogleAuthProvider())}>
                                    <a className="mr-3">
                                    <img src="google-plus.svg" style={{width: 30}}></img>
                                    </a>  
                                    Ingresa con Google
                                  </button>
                                    <hr></hr>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

/*
<h1>Login</h1>
<button onClick={e => signInWithPopup(props.auth, new GoogleAuthProvider())}>With Google</button>
*/
