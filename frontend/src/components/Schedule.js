import ScrollableList from "./ScrollableList"

function schedule(scheduleList) {

  return (
    <div>{
        <ScrollableList contents = {scheduleList} isClass = {true}/>
    }</div>
  )
}

export default schedule