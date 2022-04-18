import {useRef, useCallback} from 'react'
import PreviewCard from "./PreviewCard"
const ScrollableList = (loading, error, contents, hasMore, isClass, setPageNumber) => {
  
    const observer = useRef()
    const lastContentRef = useCallback((content) => {
        if (loading) return

        if (observer.current) observer.disconnect()

        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore){
                setPageNumber(prevPageNumber => {prevPageNumber + 1 })
            }
        })

        if (content) observer.current.observe(content)
    }, [loading, hasMore])
    
    return (
      <div>
          {!error &&
                    contents.map((content, index) => {
                        if (content.length === index + 1){
                            return <PreviewCard ref = {lastClassRef} key = {course.id} content = {content} isClass = {isClass}/>
                        }
                        <PreviewCard key = {course.id} content = {content} isClass = {isClass}/>
        
                    })
          }
          {hasMore && hasMore}
          {loading && loading}
          {error && error}
      </div>
  )
 }

export default ScrollableList