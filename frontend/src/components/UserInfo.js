import React from 'react'
import { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios'

function UserInfo({content}) {

  const [user, setUser] = useState(content)

  // useEffect(() => {
  //   axios({
  //     method: "GET",
  //     url: "something",
  //     body: {id: id}
  //   }).then(res => {
  //     setUser(res.data)
  //   }).catch(e => {
  //   })
  // }, [])

  return (
    <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Michael Hilton
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Information Systems, 2022
            </Typography>
          </CardContent>
        <CardContent>
          <Typography variant="body2">
            Heinz College of Information Systems and Public Policy
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2">
            Bio: Hi everyone! My name is Michael and I am so excited to 
            meet new people at CMU. Some of my hobbies include biking, knitting, 
            and rock climbing. Add me as a friend if you think we might have stuff 
            in common! 
          </Typography>
        </CardContent>
      </Card>
  )
}

export default UserInfo