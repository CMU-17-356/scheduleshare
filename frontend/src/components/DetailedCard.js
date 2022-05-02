import React, { useEffect, useRef, useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useClass } from '../hooks/useClasses';
import ShowMoreText from "react-show-more-text";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { useContainerDimensions } from '../hooks/useContainerDimensions';


const DetailedCard = ({ content, friends }) => {
  const [expand, setExpand] = useState(false);
  const ref = useRef();
  const { width, height } = useContainerDimensions(ref)


  const onClick = () => {
    setExpand(!expand);
  };

  useEffect(() => {
    console.log('width', ref.current ? ref.current.offsetWidth : 0);
  }, [ref.current]);

  return (
    <div ref={ref}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {content.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {(content.course_id) + " " + (content.units) + " units"}
          </Typography>
          <Typography variant="text.primary">
            <ShowMoreText
              lines={4}
              more={<ExpandMore />}
              less={<ExpandLess />}
              onClick={onClick}
              expanded={expand}
              width={width-40}
            >
              {content.desc}
            </ShowMoreText>
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body1">
            {content.prereqs && "Prerequisites: " + content.prereqs}
            {!content.prereqs && "No Prerequisties"}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body1">
            {friends && "Friends in this Course: " + friends}
            {!friends && "No friends in this class"}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default DetailedCard