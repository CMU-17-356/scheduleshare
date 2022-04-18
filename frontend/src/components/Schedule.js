import PreviewCard from "./PreviewCard"

function Schedule(scheduleList) {
  return (
    <div>{
        scheduleList.map(course => {
            <PreviewCard content = {course} isCourse = {True}/>
        })
    }</div>
  )
}

export default Schedule