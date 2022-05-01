import ScrollableList from "./ScrollableList"

function Schedule({scheduleList}) {

  const show = (id) =>  {}
  return (
    <div>{
      
        <ScrollableList myContents = {scheduleList} isClass = {true} show = {show}/>
    }</div>
  )
}

export default Schedule