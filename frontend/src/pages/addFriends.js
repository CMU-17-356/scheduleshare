// import React from 'react';
import Header from "../components/Header";
import SearchBar from "material-ui-search-bar";
import {MuiThemeProvider} from "@material-ui/core/styles";
import useUsers from "../hooks/useUsers";
import ScrollableList from "../components/ScrollableList"
import UserInfo from "../components/UserInfo"
import { useState } from "react";

function AddFriendsPage() {
  //id should be this user's id
  let expandedID, setExpandedID = useState(-1)
  //const users = useUsers()
  const users = []
  console.log(typeof users)

  const show = (id) => {
    setExpandedID(id)
  }


function AddFriendsPage() {
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
      Add Friends Page!
      <ScrollableList myContents = {users} isClass ={false} show = {show}/>
      <UserInfo id = {expandedID}/>
    </div>
  );
}

export default AddFriendsPage;