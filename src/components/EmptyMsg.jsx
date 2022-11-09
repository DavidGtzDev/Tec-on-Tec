import React from 'react'
import "../styles/emptyMsg.css"

export default function Topbar(props) {
  
  if(!props.show){return;}

  return (
    <div class="text-center pt-5">
        <i class="bi bi-journal-check msgIcon text-muted"></i>
        <p class="fs-4 text-muted msgText">Nada por hoy</p>
    </div>
  )
}
