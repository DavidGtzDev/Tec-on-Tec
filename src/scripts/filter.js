export default function filter(arr,date){
    let newArr = []
    let temp = []
    const months = [
        {
            "month": "Jan",
            "number": 1
        },
        {
            "month": "Feb",
            "number": 2
        },
        {
            "month": "Mar",
            "number": 3
        },
        {
            "month": "Apr",
            "number": 4
        },
        {
            "month": "May",
            "number": 5
        },
        {
            "month": "Jun",
            "number": 6
        },
        {
            "month": "Jul",
            "number": 7
        },
        {
            "month": "Aug",
            "number": 8
        },
        {
            "month": "Sep",
            "number": 9
        },
        {
            "month": "Oct",
            "number": 10
        },
        {
            "month": "Nov",
            "number": 11
        },
        {
            "month": "Dec",
            "number": 12
        }
    ]

    //Agarrar todas las materias que toquen ese día de la semana (Lunes, Martes, Miercoles...)
    for(let i = 0; i< arr.length; i++){
        for(let j = 0; j< arr[i]["DAY_LIST"].length; j++){
            if(date.toString().includes(arr[i]["DAY_LIST"][j])){
                newArr.push(arr[i])
                break
            }
        }
    }
    //Quedarte solo con las materias que estén en el rango de meses (asignar cada mes a un numero y ver que esté entre el rango)

    
    let monthNum = months.find(o => o.month === date.toString().split(" ")[1])["number"]
    for(let j = 0; j< newArr.length; j++){
        let monthStart = months.find(o => o.month === newArr[j]["START_DATE"].split(" ")[0])["number"]
        let monthEnd = months.find(o => o.month === newArr[j]["END_DATE"].split(" ")[0])["number"]
       
        if(monthNum >= monthStart && monthNum <= monthEnd ){
            temp.push(newArr[j])
        }
    }
    newArr = temp
    temp = []
    
    
    //Quedarte solo con las materias que estén en el rango de días (dentro del mes seleccionado, ver si la materia termina ese mes)
    //SE PASA POR UNA SEMANA
    for(let k = 0; k< newArr.length; k++){
        let monthStart = months.find(o => o.month === newArr[k]["START_DATE"].split(" ")[0])["number"]
        let monthEnd = months.find(o => o.month === newArr[k]["END_DATE"].split(" ")[0])["number"]
        let startDay = newArr[k]["START_DATE"].split(" ")[1]
        let endDay = newArr[k]["END_DATE"].split(" ")[1]

        if(monthNum == monthStart){
            if(parseInt(date.toString().split(" ")[2]) >= startDay){
                temp.push(newArr[k])
            }
        }else if(monthNum == monthEnd){
            if(parseInt(date.toString().split(" ")[2]) <= endDay){
                temp.push(newArr[k])
            }
        }else{
            temp.push(newArr[k])
        }

    }
    newArr = temp
    temp = []

    return newArr
}