import React from 'react'
import { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios'

const UserInfo = ({ content }) => {
  console.log(content)

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {content.full_name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="body1">
          {(content.majors) + ", " + (content.class)}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {"Bio: " + content.bio}
        </Typography>

        <Typography variant="text.primary">
          {"Bio: " + (content.bio.substring(0,300)) + "..."}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {"No Schedule Yet!"}

        </Typography>
      </CardContent>
    </Card>
  )
}

export default UserInfo