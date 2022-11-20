import React, { useState , useEffect} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import CardUser from '../components/CardUser';
import Topbar from '../components/Topbar';
import EmptyMsg from '../components/EmptyMsg'; 
import filter from '../scripts/filter';
import Alumnos from './Alumnos';
import dt from "../../data/demo.json"

export default function Home(props) {
  //const alumnoSesion = "j.ramirez@tec.mx"
  const alumnoSesion = props.user["email"]
  const [value, onChange] = useState(new Date());
  const [vals, setVals] = useState()
  const [data, setData] = useState()
  const [role, setRole] = useState()
  const [alumnlist, setAlumnlist] = useState(false)

  let cards
  let emptyMsg; 

  
  const consumeAPI = async() => {
    let url = "https://tec-on-tec.herokuapp.com/api/v2/tmp-courses/by-semester?user_email=" + alumnoSesion
    const response = await fetch(url)
    const json = await response.json()
    setRole(json["USER_ROLE"])
    setVals(filter(json["COURSES"],value))
    setData(json["COURSES"])
  }
  



  useEffect(() => {
    consumeAPI()
    //setRole(dt["USER_ROLE"])
    //setVals(filter(dt["COURSES"],value))
    //setData(dt["COURSES"])
  },[])


  function handleCalendarChange(e){
    onChange(e)
    try{
      setVals(filter(data,e))
    }catch(error){
      console.log(error)
    }
  }
  
  if(typeof(vals) != "undefined"){
    vals.sort(function(a, b) {
      return parseFloat(a.START_TIME.split(":")[0]) - parseFloat(b.START_TIME.split(":")[0]);
    });
  }
  
  if(typeof(vals) != "undefined"){
    cards = vals.map((val) =>
      <CardUser key={Math.floor(Math.random() * 10000)} obj={val}></CardUser>
    );

    emptyMsg = <EmptyMsg show={cards.length == 0}></EmptyMsg>
  }
  
  if(alumnlist == false){
    return (
      <div className='home'>
        <Topbar url={props.url} auth={props.auth} role={role} setAlumnlist={setAlumnlist}></Topbar>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-5 order-1 p-4">
              <h2>Bienvenido, {props.user["displayName"].split(" ")[0]}</h2>
            </div>
  
            <div className="col-12 col-md-7 order-3 order-md-2 pt-4">
              <h2>Tus cursos</h2>
            </div>
  
            <div className="col-12 col-md-5 order-2 order-md-3 p-4 pt-1">
              <Calendar onChange={handleCalendarChange} value={value} calendarType={"US"} minDetail={"month"} nextLabel={<i className="bi bi-arrow-right"></i>} prevLabel={<i className="bi bi-arrow-left"></i>} next2Label={null} prev2Label={null} />
            </div>
  
            <div className="col-12 col-md-7 order-4">
              {cards}
              {emptyMsg}
            </div>
          </div>
        </div>
      </div>
    )
  }else{
    return(
      <div className='home'>
        <Topbar url={props.url} auth={props.auth} role={role} setAlumnlist={setAlumnlist} alumnlist={alumnlist}></Topbar>
        <div className="container-fluid">
          <Alumnos crn={data}></Alumnos>
        </div>
      </div>
    )
  }


  
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

