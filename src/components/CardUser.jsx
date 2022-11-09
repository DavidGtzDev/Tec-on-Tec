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
   let images = ["https:payload.cargocollective.com/1/6/222271/10585229/pattern-c_800.jpg","https:i.pinimg.com/originals/b0/27/db/b027dbf5efb3e939bcd03e46b5d39afc.jpg","https:i.etsystatic.com/13787576/r/il/92f95d/3261081855/il_fullxfull.3261081855_i5ht.jpg","https:media.graphassets.com/JBvG8dAPR7yNGL1dB4QX","https:media.graphassets.com/V9q4iS88TaiiBDDkmPkE","https:d30g5rxy3ee0r1.cloudfront.net/wp-content/uploads/2018/03/8708207_by_LAYLA95353_9e5515ebbecc7c7b7df1078a42b7c9fb-nautical-design-pretty-patterns-450x450.jpg","https:susanbranch.com/wp-content/uploads/2018/04/Print2-500x334.jpg"]

  return (
    //<div class="card mb-3">
      //<div class="card-body">
        //<h5 class="card-title">{props.obj["NAME"]}</h5>
        //<h6 class="card-subtitle text-muted">{props.obj["CODE"]}</h6>
        //{props.obj["START_TIME"]} - {props.obj["END_TIME"]}
        //<br></br>
        //Aula {props.obj["CLASSROOM"]}
        //<br></br>
        //Profesor {props.obj["PROFESSOR_LIST"][0]}
      //</div>
    //</div>
     <Card sx={{ maxWidth: 700 }} style={{marginBottom: 20}}>
       <CardMedia
         component="img"
         alt="green iguana"
         height="140"
         image= {images[Math.floor(Math.random()*images.length)]}
       >
       </CardMedia>
       <CardContent>
         <Typography gutterBottom variant="h5" component="div">
           {props.obj["NAME"]}
         </Typography>
         <Typography variant="body2" color="text.secondary">
           {props.obj["START_TIME"]} - {props.obj["END_TIME"]}
         </Typography>
       </CardContent>
       <Accordion>
       <AccordionSummary
           expandIcon={<ExpandMoreIcon />}
           aria-controls="panel1a-content"
           id="panel1a-header"
       >
         <Typography>Detalles</Typography>
         </AccordionSummary>
         <AccordionDetails>
           <Typography>
             Clave: {props.obj["CODE"]} <br></br>
             Salón: {props.obj["CLASSROOM"]} <br></br>
             Profesor: {props.obj["PROFESSOR_LIST"][0]} <br></br>
           </Typography>
         </AccordionDetails>
       </Accordion>
     </Card>
  )
}
