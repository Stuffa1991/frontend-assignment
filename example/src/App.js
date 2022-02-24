import './App.css';


function UserProfile(props) {
  return <img src="https://placekitten.com/150/150" alt="User image"/>
}

function App() {
  return (
    <div className="container">
      <UserProfile />
    </div>
  );
}

export default App;
