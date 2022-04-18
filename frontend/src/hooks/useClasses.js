import {useEffect, useState} from 'react'
import axios from 'axios'

export default function useClasses() {

  const [classes, setClasses] = useState([])


  useEffect(() => {
    axios({
      method: "GET",
      url: "something",
    }).then(res => {
      setClasses( prevClasses => {
        return [...prevClasses, res.data.smth] //change this
      })

    }).catch(e => {
      
    })
  }, [])

  return {classes}
}
