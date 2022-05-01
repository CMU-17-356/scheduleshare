import PreviewCard from "./PreviewCard"
import ReactScrollableList from 'react-scrollable-list'
import { useState } from "react"

const ScrollableList = ({myContents, isCourse, show}) => {

  const listContents = myContents.map(myContent => ({ id: myContent.id, content: <PreviewCard content={myContent} isCourse={isCourse} show = {show} /> }))
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