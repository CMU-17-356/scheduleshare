// import React from 'react';
import Header from "../components/Header";
import SearchBar from "material-ui-search-bar";
import {MuiThemeProvider} from "@material-ui/core/styles";
import useClasses from "../hooks/useClasses";
import ScrollableList from "../components/ScrollableList"
import Schedule from "../components/Schedule"

function AddClasses() {
  const {classes} = useClasses()
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
      <ScrollableList contents = {classes} isClass ={true}/>
      <Schedule scheduleList = "smth"/>
    </div>
  );
}

export default AddClasses;