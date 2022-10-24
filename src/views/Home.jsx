import React, { useState , useEffect} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Card from '../components/Card';
import Topbar from '../components/Topbar';
import materias from "../data/materias.json" 
import alumnos from "../data/alumnos.json"
import filter from '../scripts/filter';

export default function Home(props) {
  const alumnoSesion = alumnos.find(o => o.MATRICULA === props.user["email"].split("@")[0])
  let alumnoMaterias = []
  for(let i = 0; i < alumnoSesion["MATERIAS"].length; i++){
    alumnoMaterias.push(materias.find(o => o["CLAVE MATERIA"] === alumnoSesion["MATERIAS"][i]))
  }
  const [value, onChange] = useState(new Date());
  const [vals, setVals] = useState(filter(alumnoMaterias,value))

  function handleCalendarChange(e){
    onChange(e)
    setVals(filter(alumnoMaterias,e))
  }
  
  
  const cards = vals.map((val) =>
    <Card materia={val["NOMBRE"]} clave={val["CLAVE MATERIA"]} grupo={val["GRUPO"]} aula={val["AULA"]}></Card>
  );


  return (
    <div className='home'>
      <Topbar url={props.url} auth={props.auth}></Topbar>
      <h1>Bienvenido {props.user["displayName"].split(" ")[0]}</h1>
      <Calendar onChange={handleCalendarChange} value={value} />
      {cards}
    </div>
  )
}

//Agarrar todas las materias del alumno
//Agarrar todas las materias que toquen ese día de la semana (Lunes, Martes, Miercoles...)
//Quedarte solo con las mateerias en las que el año sea igual
//Quedarte solo con las materias que estén en el rango de meses (asignar cada mes a un numero y ver que esté entre el rango)
//Quedarte solo con las materias que estén en el rango de días (dentro del mes seleccionado, ver si la materia termina ese mes)
//Si la materia termina ese mes, tomar el rango de dias como desde el inicio del mes hasta el ultimo dia de la materia


//Mon Oct 17 2022 00:00:00 GMT-0600 (hora de verano del Pacífico de México)
//Tue Oct 18 2022 00:00:00 GMT-0600 (hora de verano del Pacífico de México)
//Wed Oct 19 2022 00:00:00 GMT-0600 (hora de verano del Pacífico de México)
//Thu Oct 20 2022 00:00:00 GMT-0600 (hora de verano del Pacífico de México)
//Fri Oct 21 2022 00:00:00 GMT-0600 (hora de verano del Pacífico de México)