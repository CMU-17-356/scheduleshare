import { Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Link to="/addFriends">Add Friends</Link>
        </p>
        <p>
          <Link to="/addClasses">Add Classes</Link>
        </p>
      </header>
    </div>
  );
}

export default App;
