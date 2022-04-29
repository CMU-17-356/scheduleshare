import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import Header from "../components/Header";
import SearchBar from "material-ui-search-bar";
import {MuiThemeProvider} from "@material-ui/core/styles";
import useClasses from "../hooks/useClasses";
import ScrollableList from "../components/ScrollableList"
import Schedule from "../components/Schedule"
import DetailedCard from "../components/DetailedCard"
import Grid from '@mui/material/Grid';

function AddClassesPage() {
  //id should be this user's id
  let [expandedID, setExpandedID] = useState(-1)
  let [expanded, setExpanded] = useState(false)

  const courses = ['a']
  console.log(typeof courses)

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
            <ScrollableList myContents = {courses} isClass ={true} show = {show}/>
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
