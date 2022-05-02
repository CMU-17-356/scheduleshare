import React from 'react'
import { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios'

function UserInfo({id}) {

  const [user, setUser] = useState({})

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
        <CardActionArea onClick={() => show(id)}>
          <CardContent>
            <Typography variant="h5" component="div">
              {user.full_name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {user.major + ", " + user.year}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardContent>
          <Typography variant="body2">
            {user.school}
          </Typography>
        </CardContent>
        <CardActions>
          {user.isFriend && 
          <Button size="small" onClick={() => addFriend()}>Add Friend</Button>
          }
        </CardActions>
      </Card>
  )
}

export default UserInfo