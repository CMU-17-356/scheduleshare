import {useEffect, useState} from 'react'
import axios from 'axios'

export default function useUsers() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    axios({
      method: "GET",
      url: "something",
    }).then(res => {
        setUsers( prevUsers => {
        return [...prevUsers, res.data.smth] //change this
      })

    }).catch(e => {

    })
  }, [])

  return {users}
}
