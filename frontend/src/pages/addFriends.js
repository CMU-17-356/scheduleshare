import {setState, useState} from 'react';
import useUsers from 'hooks/useUsers'
import ScrollableList from '../components/ScrollableList';
import UserInfo from '../components/UserInfo';
function App() {
  const [pageNumber, setPageNumber] = setState(1)
  const {loading, error, users, hasMore} = useUsers(pageNumber)
  return (
    <div className="App">
        <ScrollableList loading = {loading} error = {error} contents = {users} hasMore = {hasMore} isClass ={False} setPageNumber = {setPageNumber}/>
        <UserInfo/>
    </div>
  );
}

export default App;