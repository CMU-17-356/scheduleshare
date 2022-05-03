import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';

const PreviewCard = ({ content, isCourse, show, addContent }) => {

  // const addClass = (courseName) => {

  //   axios({
  //     method: "PUT",
  //     url: `http://localhost:3000/schedule/626f21bdf3743ba6b3ebf4d4/course/${content.course_id}`
  //   }).then(res => {
  //     toast.success('🦄 Wow so easy!', {
  //       position: "top-right",
  //       autoClose: 2,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //     });
  //   }).catch(e => {
  //     console.log(e)
  //     alert("Error Adding Course")
  //   })
  // }

  // const addFriend = () => {
  //   axios({
  //     method: "POST",
  //     url: "http://localhost:3000/friend/",
  //     body: {
  //       friend_1: content.id,
  //       friend_2: content.id
  //     }
  //   }).then(res => {
  //     console.log(content.full_name, "added")
  //     alert(`${content.full_name} is your friend!`)
  //   }).catch(e => {
  //     alert("Error Adding Friend")
  //   })
  // }


  if (isCourse) {
    return (
      <div>
        <Card sx={{
          minWidth: 275, boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
          backgroundColor: "#edfbff",
        }}>
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
              {content.desc.substring(0, 90) + "..."}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => addContent(content)}>Add to schedule</Button>
          </CardActions>
        </Card>
      </div>

    )
  }
  else {
    return (
      <Card sx={{
        minWidth: 275, boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
        backgroundColor: "#edfbff",
      }}>
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
            <Button size="small" onClick={() => addContent(content)}>Add Friend</Button>
          }
        </CardActions>
      </Card>
    )
  }

}

export default PreviewCard