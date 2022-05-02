import { React, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Header from "../components/Header";
import ScrollableList from "../components/ScrollableList"
import Schedule from "../components/Schedule"
import DetailedCard from "../components/DetailedCard"
import Grid from '@mui/material/Grid';
import useClasses, { useSchedule } from "../hooks/useClasses";
import axios from "axios";

function AddClassesPage() {
  //id should be this user's id
  let [expanded, setExpanded] = useState(false)
  let [expandedContent, setExpandedContent] = useState({})
  


  const show = (content) => {
    if(content.course_id === expandedContent.course_id){
      setExpanded(false)
      setExpandedContent({})
    }
    else{
      setExpanded(true)
      setExpandedContent(content)
    }
  }



  const courses = useClasses()
  const schedule = useSchedule()
  return (
    <div className='addClassesPage'>
      <Header />
      <h2>Class Search</h2>

      <Grid container spacing={4}>
        <Grid item xs={6}>
          <div className="search">
            <TextField
              id="outlined-basic"
              variant="outlined"
              fullWidth
              label="Search"
            />
          </div>
          <div className="list">
            <ScrollableList myContents = {courses} isClass ={true} show = {show}/>
          </div>
        </Grid>
        <Grid item xs={6}>
          {!expanded && <Schedule scheduleList = {schedule}/>}
          {expanded && <DetailedCard content = {expandedContent}/>}
        </Grid>
      </Grid>
      
    </div>
  );
}

export default AddClassesPage
