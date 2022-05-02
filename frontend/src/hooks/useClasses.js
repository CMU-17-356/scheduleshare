import {useEffect, useState} from 'react'
import axios from 'axios'

export default function useClasses() {

  const [classes, setClasses] = useState([])


  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:3000/course/first/10",
    }).then(res => {
      setClasses(res.data)

    }).catch(e => {
      
    })
  }, [])

  return classes
}

export function useSchedule() {

  const [schedule, setSchedule]  = useState([])
  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:3000/schedule/626f20a5a69e0d71a42696ef",
    }).then(res => {
      console.log(res.data)
      setSchedule(res.data[0].courses)

    }).catch(e => {
      
    })
  }, [])

  return schedule
}