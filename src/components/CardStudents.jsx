import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

export default function CardStudents(props) {
  console.log(props.obj)
  return (
    <div style={{margin:"20px"}}>
        <Card>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <p>{props.obj["USER_NAME"]}</p>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <p>Matricula: {props.obj["USER_ID"]}</p>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <p>Rol: {props.obj["USER_ROLE"]}</p>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <p>Materia: {props.obj["NAME"]}</p>
            </Typography>
        </CardContent>
    </Card>
    </div>
  )
}
