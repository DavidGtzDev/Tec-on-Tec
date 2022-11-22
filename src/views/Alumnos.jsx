import React from 'react'
import { useState , useEffect} from 'react';
import CardStudents from '../components/CardStudents';
import  FormControl  from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function Alumnos(props) {
  const [students, setStudents] = useState([])
  const [crns, setCRNS] = useState([props.crn[0]["CRN"]])
  const [select, setSelect] = useState("")
  const [cards, setCards] = useState(<></>)
  let options

  useEffect(() => {
    for(let i = 1; i < props.crn.length; i++){
      let c_temp = crns
      c_temp.push(props.crn[i]["CRN"])
      setCRNS(c_temp)
    }

    APIcrn(crns[0])

    if(students != []){
      try{
        setCards(
          students.map((val) =>
          <CardStudents key={Math.floor(Math.random() * 10000)} obj={val}></CardStudents>
        )
        )
      }catch(error){
        console.log(error)
      }
      
    }

  },[])

  const APIcrn = async(crn) => {
    let url = "https://tec-on-tec.herokuapp.com/api/v2/tmp-users-courses/by-crn?course_crn=" + crn
    const response = await fetch(url)
    const json = await response.json()
    setStudents(json)
  }

  

  if(crns != []){
    options = crns.map((val) => 
      <MenuItem value={val}>{props.crn.find(o => o.CRN === val)["CODE"]} || {val} || {props.crn.find(o => o.CRN === val)["NAME"]}</MenuItem>
    )
  }
  

  const handleChange = async(e) => {
    setSelect(e.target.value)
    let url = "https://tec-on-tec.herokuapp.com/api/v2/tmp-users-courses/by-crn?course_crn=" + e.target.value
    const response = await fetch(url)
    const json = await response.json()

    if(json != []){
      try{
        setCards(
          json.map((val) =>
          <CardStudents key={Math.floor(Math.random() * 10000)} obj={val}></CardStudents>
        )
        )
      }catch(error){
        console.log(error)
      }
      
    }
  }

  return (
    <div>
      <FormControl fullWidth style={{marginTop:"20px"}}>
        <InputLabel id="demo-simple-select-label">Mis Cursos</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={select}
          label="Mis Cursos"
          onChange={e => handleChange(e)}
        >
          {options}
        </Select>
      </FormControl>
        {cards}
    </div>
  )
}
