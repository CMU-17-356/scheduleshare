import PreviewCard from "./PreviewCard"
import ReactScrollableList from 'react-scrollable-list'
import { useState } from "react"

const ScrollableList = ({ myContents, isCourse, show, addContent }) => {

  const listContents = myContents.map(myContent => ({ id: myContent.id, content: <PreviewCard content={myContent} isCourse={isCourse} show={show} addContent={addContent}/> }))
  
  return (

    <div>
      <ReactScrollableList
        listItems={listContents}
        heightOfItem={30}
        maxItemsToRender={30}
      />
    </div>


  )
}

export default ScrollableList