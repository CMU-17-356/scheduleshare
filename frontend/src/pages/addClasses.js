import {setState, useState, useRef, useCallback} from 'react';
import useClasses from "../hooks/useClasses";
import ScrollableList from '../components/ScrollableList';
import Schedule from '../components/Schedule';
function App() {
  const [pageNumber, setPageNumber] = setState(1)
  const {loading, error, classes, hasMore} = useClasses(pageNumber)

  return (
    <div className="App">
        <ScrollableList loading = {loading} error = {error} contents = {classes} hasMore = {hasMore} isClass ={True} setPageNumber = {setPageNumber}/>
        <Schedule scheduleList = "smth"/>
    </div>
  );
}

export default App;