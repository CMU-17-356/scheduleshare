import useUsers from '../hooks/useUsers'
import ScrollableList from '../components/ScrollableList';
import UserInfo from '../components/UserInfo';
function AddFriendsPage() {
  const {users} = useUsers()
  return (
    <div className="App">
        <ScrollableList contents = {users} isClass ={false} />
        <UserInfo/>
    </div>
  );
}

export default AddFriendsPage;