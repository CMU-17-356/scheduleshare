import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import Header from "../components/Header";
import SearchBar from "material-ui-search-bar";
import {MuiThemeProvider} from "@material-ui/core/styles";
import useClasses from "../hooks/useClasses";
import ScrollableList from "../components/ScrollableList"
import Schedule from "../components/Schedule"
import DetailedCard from "../components/DetailedCard"
// import {useState} from "react"

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
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <ScrollableList myContents = {courses} isClass ={true} show = {show}/>
      {!expanded && <Schedule scheduleList = {[]}/>}
      {expanded && <DetailedCard id = {expandedID}/>}
    </div>
  );
}

export default AddClassesPage
