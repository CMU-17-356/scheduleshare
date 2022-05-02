import PreviewCard from "./PreviewCard"
import ReactScrollableList from 'react-scrollable-list'

const ScrollableList = ({myContents, isClass, show}) => {

  const listContents = myContents.map(myContent => ({ id: myContent.course_id, content: <PreviewCard key={myContent.id} content={myContent} isCourse={isClass} show = {show} /> }))
  return (

    <div>
      <ReactScrollableList
        listItems={listContents}
        heightOfItem={30}
      />
    </div>
  )
}

export default ScrollableList