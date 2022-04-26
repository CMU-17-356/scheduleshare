import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DetailedCard = ({id}) => {

  const [course, setCourse] = useState({})

  useEffect(() => {
    axios({
      method: "GET",
      url: "something",
      body: {id: id}
    }).then(res => {
      setCourse(res.data)
    }).catch(e => {
    })
  }, [])
  
  return (
    <div>detailedCard</div>
  )
}

export default DetailedCard