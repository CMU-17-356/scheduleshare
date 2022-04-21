// import React from 'react';
import Header from "../components/Header";
import SearchBar from "material-ui-search-bar";
import {MuiThemeProvider} from "@material-ui/core/styles";
import useUsers from "../hooks/useUsers";
import ScrollableList from "../components/ScrollableList"
import UserInfo from "../components/UserInfo"

function AddFriendsPage() {
  //const users = useUsers()
  const users = []
  console.log(typeof users)
  return (
    <div>
      <Header />
      <MuiThemeProvider>
        <div>
          <SearchBar
            style={{
              margin: "0 auto",
              maxWidth: 800
            }}
          />
        </div>
      </MuiThemeProvider>
      Add Friends Page!
      <ScrollableList myContents = {users} isClass ={false}/>
      <UserInfo/>
    </div>
  );
}

export default AddFriendsPage;