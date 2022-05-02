import {useEffect, useState} from 'react'
import axios from 'axios'

export default function useUsers() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:3000/user/",
    }).then(res => {
        setUsers(res.data)

    }).catch(e => {

    })
  }, [])

  return users
}