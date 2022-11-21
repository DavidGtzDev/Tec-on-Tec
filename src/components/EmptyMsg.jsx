import React from 'react'
import "../styles/emptyMsg.css"

export default function Topbar(props) {
  
  if(!props.show){return;}

  return (
    <div className="text-center pt-5">
        <i className="bi bi-journal-check msgIcon text-muted"></i>
        <p className="fs-4 text-muted msgText">Nada por hoy</p>
    </div>
  )
}
