import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import Header from "../components/Header";
import ScrollableList from "../components/ScrollableList"
import useUsers from "../hooks/useUsers";
import UserInfo from "../components/UserInfo"
import Grid from '@mui/material/Grid';

function AddFriendsPage() {
  //id should be this user's id
  let [expandedContent, setExpandedContent] = useState({})
  let [expanded, setExpanded] = useState(false)

  const users = useUsers()
  // const users = [{"username": "michaelh",  "password": "17356",
  //   "full_name": "Michael Hilton",
  //   "major": "Information Systems",
  //   "school": "Heinz College of Information Systems and Public Policy",
  //   "class": "2022",
  //   "desc": "Hi everyone! My name is Michael and I am so excited to meet new people at CMU. Some of my hobbies include biking, knitting, and rock climbing. Add me as a friend if you think we might have stuff in common! ",
  //   "isFriend": false,
  //   "schedule_id": 1
  // },
  // {"username": "hyrumw",  "password": "17356",
  // "full_name": "Hyrum Wright",
  // "major": "Computer Science",
  // "school": "School of Computer Science",
  // "class": "2022",
  // "desc": "Hi everyone! My name is Hyrum and I am so excited to meet new people at CMU. Some of my hobbies include biking, knitting, and rock climbing. Add me as a friend if you think we might have stuff in common!  ",
  // "isFriend": true,
  // "schedule_id": 1
  // },
  // {"username": "khushiw",  "password": "12345",
  // "full_name": "Khushi Wadhwa",
  // "major": "Business Administration",
  // "school": "Tepper School of Business",
  // "class": "2024",
  // "desc": "Hi everyone! My name is Khushi and I am so excited to meet new people at CMU. Some of my hobbies include biking, knitting, and rock climbing. Add me as a friend if you think we might have stuff in common! ",
  // "isFriend": false,
  // "schedule_id": 1
  // }]

  const show = (content) => {
    if(content.username === expandedContent.username){
      setExpanded(false)
      setExpandedContent({})
    }
    else{
      setExpanded(true)
      setExpandedContent(content)
    }
  }

  return (
    <div className='addFriendsPage' style={{
      backgroundColor: '#e0f8ff',
    }}>
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
          {expanded && <UserInfo content = {expandedContent}/> }
        </Grid>
      </Grid>
    </div>
  );
}

export default AddFriendsPage