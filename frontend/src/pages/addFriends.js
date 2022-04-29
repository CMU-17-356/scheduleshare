import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import Header from "../components/Header";
import ScrollableList from "../components/ScrollableList"
import UserInfo from "../components/UserInfo"
import Grid from '@mui/material/Grid';

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
          <ScrollableList myContents = {users} isClass ={false} show = {show}/>
        </Grid>
        <Grid item xs={6}>
          <UserInfo id = {expandedID}/>
        </Grid>
      </Grid>
    </div>
  );
}

export default AddFriendsPage