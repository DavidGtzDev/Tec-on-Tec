import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

export default function CardStudents(props) {
  return (
    <div style={{margin:"20px"}}>
        <Card>
        <CardContent>
            <Typography>
                <div style={{display:"flex",width:"100vw",justifyContent:"space-around", flexWrap: "wrap"}}>
                    <p>Matricula: {props.obj["USER_ID"]}</p>
                    <p>Nombre: {props.obj["USER_NAME"]}</p>
                    <p>CRN del Curso: {props.obj["COURSE_CRN"]}</p>
                </div>
            </Typography>
        </CardContent>
    </Card>
    </div>
  )
}
