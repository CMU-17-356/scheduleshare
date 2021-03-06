import { React, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Header from "../components/Header";
import ScrollableList from "../components/ScrollableList"
import Schedule from "../components/Schedule"
import DetailedCard from "../components/DetailedCard"
import Grid from '@mui/material/Grid';
import useClasses, { useSchedule } from "../hooks/useClasses";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function AddClassesPage() {
  //id should be this user's id
  let [expanded, setExpanded] = useState(false)
  let [expandedContent, setExpandedContent] = useState({})
  const [friends, setFriends] = useState([])


  const show = (content) => {
    if (content.course_id === expandedContent.course_id) {
      setExpanded(false)
      setExpandedContent({})
    }
    else {
      setExpanded(true)
      setExpandedContent(content)
    }
  }

  const addClass = (content) => {
    axios({
      method: "PUT",
      url: `http://localhost:3000/schedule/626f21bdf3743ba6b3ebf4d4/course/${content.course_id}`
    }).then(res => {
      toast.success(`${content.name} added to schedule!`);
    }).catch(e => {
      toast.error(`Sorry, there was a problem`);
    })
  }


  const getFriends = async (course_id) => {
    const { data } = await axios(`http://localhost:3000/schedule/course/${course_id}/users`)

    return data.map(async (id) => {
      return axios(`http://localhost:3000/user/${id}`).then(response => {
        return response.data[0].full_name
      })
    })

  }

  useEffect(() => {
    if (expanded) {

      if (Math.random() < 0.5) {
        setFriends(["Ruitao Li", " Max Sobkov"])
      }
      else {
        setFriends(["Michael Wright", " Hyrum Hilton"])
      }


      // getFriends(expandedContent.course_id).then((names) => {
      //   Promise.all(names).then(response => {
      //     setFriends(response)
      //   })
      // })

    }
  }, [expandedContent])



  const courses = useClasses()
  const schedule = useSchedule()
  return (
    <div className='addClassesPage' style={{
      backgroundColor: '#e0f8ff',
    }} >
      <Header />
      <h2>Class Search</h2>

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
          <div className="list">
            <ScrollableList myContents={courses} isCourse={true} show={show} addContent={addClass} />
          </div>
        </Grid>
        <Grid item xs={6}>
          <ToastContainer
            position="top-right"
            autoClose={4999}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          {!expanded && <Schedule scheduleList={schedule} />}
          {expanded && <DetailedCard content={expandedContent} friends={friends} />}
        </Grid>
      </Grid>

    </div>
  );
}

export default AddClassesPage
