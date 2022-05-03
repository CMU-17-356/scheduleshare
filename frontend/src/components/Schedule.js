import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';


function Schedule({ scheduleList }) {

  const show = (id) => { }

  return (

    <div><h2>My Schedule</h2>{
      scheduleList &&
      scheduleList.map((id) => {
        
        return (<div key = {id}>
          <Card sx={{ minWidth: 275, boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
      backgroundColor: "#edfbff",}}>
          <Typography variant="h5" component="div" align="center">
            {id}
          </Typography>
        </Card>
        </div>)
      })
    }
    {scheduleList.length === 0 && "Schedule is Empty!"}</div>
  )
}

export default Schedule