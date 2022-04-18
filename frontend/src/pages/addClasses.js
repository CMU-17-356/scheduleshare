// import React from 'react';
import Header from "../components/Header";
import SearchBar from "material-ui-search-bar";
import {MuiThemeProvider} from "@material-ui/core/styles";

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
    </div>
  );
}

export default addClassesPage;