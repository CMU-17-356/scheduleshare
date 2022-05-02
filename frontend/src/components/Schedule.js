import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';


function Schedule({ scheduleList }) {

  const show = (id) => { }

  return (
    <div>{
      scheduleList &&
      scheduleList.map((id) => {
        
        return (<div key = {id}>
          <Card sx={{ minWidth: 275 }}>
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