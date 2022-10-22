import React from 'react'
import "../styles/card.css"

export default function Card(props) {
  return (
    <div className='card'>
        <h1>{props.materia}</h1>
        <p>{props.clave}</p>
        <p>{props.grupo}</p>
        <p>{props.aula}</p>
    </div>
  )
}
