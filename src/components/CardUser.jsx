import { Card, CardMedia } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
 import "../styles/card.css"

export default function CardUser(props) {
  return (
    /*
    <div class="card mb-3">
      <div class="card-body">
        <h5 class="card-title">{props.obj["NAME"]}</h5>
        <h6 class="card-subtitle text-muted">{props.obj["CODE"]}</h6>
        {props.obj["START_TIME"]} - {props.obj["END_TIME"]}
        <br></br>
        Aula {props.obj["CLASSROOM"]}
        <br></br>
        Profesor {props.obj["PROFESSOR_LIST"][0]}
      </div>
    </div>
    */
     <Card sx={{ maxWidth: 700 }} style={{marginBottom: 20}}>
      {/*
       <CardMedia
         component="img"
         alt="green iguana"
         height="140"
         image= {images[Math.floor(Math.random()*images.length)]}
       >
       </CardMedia>
       */}
       <CardContent>
         <Typography gutterBottom variant="h5" component="div">
           {props.obj["NAME"]}
         </Typography>
         <Typography variant="body2" color="text.secondary">
           {props.obj["START_TIME"]} - {props.obj["END_TIME"]}
         </Typography>
         <Typography variant="body2" color="text.secondary">
          Salón: {props.obj["CLASSROOM"]}
         </Typography>
         <Typography variant="body2" color="text.secondary">
         Clave: {props.obj["CODE"]} <br></br>
         </Typography>
         <Typography variant="body2" color="text.secondary">
         Profesor: {props.obj["PROFESSOR_LIST"][0]} <br></br>
         </Typography>
       </CardContent>
     </Card>
    
  )
}
