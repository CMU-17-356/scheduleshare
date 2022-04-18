import PreviewCard from "./PreviewCard"
import ReactScrollableList from 'react-scrollable-list'

const ScrollableList = (contents, isClass) => {

  const listContents = contents.map(content => ({ id: content.id, content: <PreviewCard key={content.id} content={content} isClass={isClass} /> }))
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