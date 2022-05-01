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

  const [thisCourse, setThisCourse] = useState(content)

  const addClass = () => {
    axios({
      method: "POST",
      url: "something",
      body: { id: content.id }
    }).then(res => {
      console.log(content.id, "added")
    }).catch(e => {
      alert("Error Adding Course")
    })
  }

  const addFriend = () => {
    axios({
      method: "POST",
      url: "something",
      body: { id: content.id }
    }).then(res => {
      console.log(content.id, "added")
    }).catch(e => {
      alert("Error Adding Course")
    })
  }

  
  if (isCourse) {
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
  else {
    return (
      <Card sx={{ minWidth: 275 }}>
        <CardActionArea onClick={() => show(content.id)}>
          <CardContent>
            <Typography variant="h5" component="div">
              {content.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {content.major + ", " + content.year}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardContent>
          <Typography variant="body2">
            {content.description}
          </Typography>
        </CardContent>
        <CardActions>
          {content.isFriend && 
          <Button size="small" onClick={() => addFriend()}>Add Friend</Button>
          }
        </CardActions>
      </Card>
    )
  }

}

export default PreviewCard