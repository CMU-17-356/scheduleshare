import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import UserInfo from './UserInfo';


const PreviewCard = ({ content, isCourse, show }) => {

  const addClass = (courseName) => {

    axios({
      method: "PUT",
      url: `http://localhost:3000/schedule/626f21bdf3743ba6b3ebf4d4/course/${content.course_id}`
    }).then(res => {
      alert(`${courseName} added to schedule!`)
    }).catch(e => {
      console.log(e)
      alert("Error Adding Course")
    })
  }

  const addFriend = () => {
    axios({
      method: "POST",
      url: "http://localhost:3000/friend/",
      body: {
        friend_1: content.id,
        friend_2: content.id
        }        
    }).then(res => {
      console.log(content.full_name, "added")
    }).catch(e => {
      alert("Error Adding Friend")
    })
  }

  
  if (isCourse) {
    return (
      <Card sx={{ minWidth: 275 }}>
        <CardActionArea onClick={() => show(content)}>
          <CardContent>
            <Typography variant="h5" component="div">
              {content.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">

              {(content.course_id) + " " + (content.units) + " units"}

            </Typography>
          </CardContent>
        </CardActionArea>
        <CardContent>
          <Typography variant="text.primary">
            {content.desc.substring(0,90) + "..." }
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => addClass(content.name)}>Add to schedule</Button>
        </CardActions>
      </Card>
    )
  }
  else {
    return (
      <Card sx={{ minWidth: 275 }}>
        <CardActionArea onClick={() => show(content)}>
          <CardContent>
            <Typography variant="h5" component="div">
              {content.full_name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {content.majors + ", " + content.class}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardContent>
          <Typography variant="text.primary">
            {content.bio}
          </Typography>
        </CardContent>
        <CardActions>
          {(!content.isFriend) && 
          <Button size="small" onClick={() => addFriend()}>Add Friend</Button>
          }
        </CardActions>
      </Card>
    )
  }

}

export default PreviewCard