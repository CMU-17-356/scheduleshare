import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useClass } from '../hooks/useClasses';

const DetailedCard = ({ content }) => {
  console.log(content)
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {content.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {(content.course_id) + " " + (content.units) + " units"}
        </Typography>
        <Typography variant="text.primary">
          {content.desc.substring(0,300) + "..."}
        </Typography>
        <Typography variant="body1">
          {content.prereqs && "Prerequisites: " + content.prereqs}
          {!content.prereqs && "No Prerequisties"}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default DetailedCard