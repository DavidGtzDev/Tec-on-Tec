import React from 'react'
// import "../styles/card.css"

export default function CardUser(props) {
  // let images = ["https://payload.cargocollective.com/1/6/222271/10585229/pattern-c_800.jpg","https://i.pinimg.com/originals/b0/27/db/b027dbf5efb3e939bcd03e46b5d39afc.jpg","https://i.etsystatic.com/13787576/r/il/92f95d/3261081855/il_fullxfull.3261081855_i5ht.jpg","https://media.graphassets.com/JBvG8dAPR7yNGL1dB4QX","https://media.graphassets.com/V9q4iS88TaiiBDDkmPkE","https://d30g5rxy3ee0r1.cloudfront.net/wp-content/uploads/2018/03/8708207_by_LAYLA95353_9e5515ebbecc7c7b7df1078a42b7c9fb-nautical-design-pretty-patterns-450x450.jpg","https://susanbranch.com/wp-content/uploads/2018/04/Print2-500x334.jpg"]

  return (
    <div class="card mb-3 me-3">
      <div class="card-body">
        <h5 class="card-title">{props.obj["NAME"]}</h5>
        <h6 class="card-subtitle text-muted">{props.obj["CODE"]}</h6>
        {props.obj["START_TIME"]} - {props.obj["END_TIME"]}
        <br></br>
        Salón: {props.obj["CLASSROOM"]}
        <br></br>
        Profesor: {props.obj["PROFESSOR_LIST"][0]}
      </div>
    </div>
  )
}