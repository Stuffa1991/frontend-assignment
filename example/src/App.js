import './App.css';
import users from './data.json';
import { UserProfiles } from "./UserProfiles";

function App() {
  return (
    <div className="container">
      <h1>Users</h1>
      <UserProfiles users={users} />
    </div>
  )
}

export default App;
