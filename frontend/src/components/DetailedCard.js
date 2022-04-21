import React, { useEffect, useState } from 'react'

const DetailedCard = ({id}) => {

  const [course, setCourse] = useState({})

  useEffect(() => {
    axios({
      method: "GET",
      url: "something",
      body: {id: id}
    }).then(res => {
      setClasses(res.data)
    }).catch(e => {
    })
  }, [])
  
  return (
    <div>detailedCard</div>
  )
}

export default DetailedCard