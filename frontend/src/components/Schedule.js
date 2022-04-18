import ScrollableList from "./ScrollableList"

function Schedule(scheduleList) {

  return (
    <div>{
        <ScrollableList contents = {scheduleList} isClass = {true}/>
    }</div>
  )
}

export default Schedule