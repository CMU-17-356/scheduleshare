import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import Header from "../components/Header";
import SearchBar from "material-ui-search-bar";
import {MuiThemeProvider} from "@material-ui/core/styles";
import useUsers from "../hooks/useUsers";
import ScrollableList from "../components/ScrollableList"
import UserInfo from "../components/UserInfo"
// import { useState } from "react";

function AddFriendsPage() {
  //id should be this user's id
  let [expandedID, setExpandedID] = useState(-1)
  //const users = useUsers()
  const users = []
  console.log(typeof users)

  const show = (id) => {
    setExpandedID(id)
  }

  return (
    <div className='addFriendsPage'>
      <Header />
      <h2>Friend Search</h2>
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <ScrollableList myContents = {users} isClass ={false} show = {show}/>
      <UserInfo id = {expandedID}/>
    </div>
  );
}

export default AddFriendsPage