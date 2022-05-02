import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import Header from "../components/Header";
import ScrollableList from "../components/ScrollableList"
import UserInfo from "../components/UserInfo"
import Grid from '@mui/material/Grid';

function AddFriendsPage() {
  //id should be this user's id
  let [expandedUsername, setExpandedUsername] = useState("")
  let [expanded, setExpanded] = useState(false)
  //const users = useUsers()
  const users = [{"username": "michaelh",  "password": "17356",
    "full_name": "Michael Hilton",
    "major": "Information Systems",
    "school": "Heinz College of Information Systems and Public Policy",
    "class": "2022",
    "desc": "Hi everyone! My name is Michael and I am so excited to meet new people... ",
    "isFriend": false,
    "schedule_id": 1
  },
  {"username": "hyrumw",  "password": "17356",
  "full_name": "Hyrum Wright",
  "major": "Computer Science",
  "school": "School of Computer Science",
  "class": "2022",
  "desc": "Hi everyone! My name is Hyrum and I am so excited to meet new people... ",
  "isFriend": true,
  "schedule_id": 1
  },
  {"username": "khushiw",  "password": "12345",
  "full_name": "Khushi Wadhwa",
  "major": "Business Administration",
  "school": "Tepper School of Business",
  "class": "2024",
  "desc": "Hi everyone! My name is Khushi and I am so excited to meet new people... ",
  "isFriend": false,
  "schedule_id": 1
  }]

  const show = (id) => {
    setExpanded(true)
    setExpandedUsername(username)
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
          <ScrollableList myContents = {users} isCourse = {false} show = {show}/>
        </Grid>
        <Grid item xs={6}>
          {expanded && <UserInfo id = {expandedUsername}/> }
        </Grid>
      </Grid>
    </div>
  );
}

export default AddFriendsPage