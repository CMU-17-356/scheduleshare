// import React from 'react';
import Header from "../components/Header";
import SearchBar from "material-ui-search-bar";
import {MuiThemeProvider} from "@material-ui/core/styles";
import useClasses from "../hooks/useClasses";
import ScrollableList from "../components/ScrollableList"
import Schedule from "../components/Schedule"
import DetailedCard from "../components/DetailedCard"

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

function addClassesPage() {
  return (
    <div>
      <Header />
      <MuiThemeProvider>
        <div>
          <SearchBar
            style={{
              margin: "0 auto",
              maxWidth: 800
            }}
          />
        </div>
      </MuiThemeProvider>
      Add Classes Page!
      <ScrollableList myContents = {classes} isClass ={true} show = {show}/>
      {!expanded && <Schedule scheduleList = {"smth"}/>}
      {expanded && <DetailedCard id = {expandedID}/>}
    </div>
  );
}

export default AddClassesPage;
