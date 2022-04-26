// import React from 'react';
import Header from "../components/Header";
import SearchBar from "material-ui-search-bar";
import {MuiThemeProvider} from "@material-ui/core/styles";
import useClasses from "../hooks/useClasses";
import ScrollableList from "../components/ScrollableList"
import Schedule from "../components/Schedule"
import DetailedCard from "../components/DetailedCard"
import {useState} from "react"

function AddClassesPage() {
  //id should be this user's id
  let expandedID, setExpandedID = useState(-1)
  let expanded, setExpanded = useState(false)

  const show = (id) => {
    setExpanded(true)
    setExpandedID(id)
  }
  //const {classes} = useClasses()
  const classes = []
  return (
    <div className='addClassesPage'>
      <Header />
      <p>Add Classes Page!</p>
      <ScrollableList myContents = {classes} isClass ={true} show = {show}/>
      {!expanded && <Schedule scheduleList = {"smth"}/>}
      {expanded && <DetailedCard id = {expandedID}/>}
    </div>
  );
}

export default AddClassesPage
