import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DetailedCard = ({id}) => {

  const [course, setCourse] = useState({})

  // useEffect(() => {
  //   axios({
  //     method: "GET",
  //     url: "something",
  //     body: {id: id}
  //   }).then(res => {
  //     setCourse(res.data)
  //   }).catch(e => {
  //   })
  // }, [])
  
  return (
    <Card sx={{ minWidth: 275 }}>
    <CardActionArea onClick={() => show(content.id)}>
      <CardContent>
        <Typography variant="h5" component="div">
          {thisCourse.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {thisCourse.id}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardContent>
      <Typography variant="body2">
        {thisCourse.desc}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" onClick={() => addClass(content.id)}>Add to schedule</Button>
    </CardActions>
  </Card>
  )
}

export default DetailedCard