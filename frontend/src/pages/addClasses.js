import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import Header from "../components/Header";
import ScrollableList from "../components/ScrollableList"
import Schedule from "../components/Schedule"
import DetailedCard from "../components/DetailedCard"
import Grid from '@mui/material/Grid';

function AddClassesPage() {
  //id should be this user's id
  let [expandedID, setExpandedID] = useState(-1)
  let [expanded, setExpanded] = useState(false)

  const courses = [{"id": "15-122",  "name": "Principles of Imperative Computation",
  "department": "Computer Science",
  "units": 10.0,
  "desc": "For students with a basic understanding of programming..."
},
{"id": "17-356",  "name": "Software Engineering for Startups",
  "department": "Software Engineering",
  "units": 12.0,
  "desc": "For students who want to ship software well"
},
{"id": "17-214",  "name": "Principles of Software Construction",
  "department": "Software Engineering",
  "units": 12.0,
  "desc": "For students who want to write extensible code"
}]

  const show = (id) => {
    setExpanded(true)
    setExpandedID(id)
  }
  //const {classes} = useClasses()

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
            <ScrollableList myContents = {courses} isCourse ={true} show = {show}/>
          </div>
        </Grid>
        <Grid item xs={6}>
          {!expanded && <Schedule scheduleList = {[]}/>}
          {expanded && <DetailedCard id = {expandedID}/>}
        </Grid>
      </Grid>
      
    </div>
  );
}

export default AddClassesPage
