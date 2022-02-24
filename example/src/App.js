import './App.css';
import users from './data.json';

function UserProfile({ user }) {
  return (
    <div className="user-profile">
      <img className={ `user-profile__image` } src="https://placekitten.com/150/150" alt="User"/>
      <div className="user-profile__content">
        <div className="user-profile__username">
          {user.website
            ? <a className="user-profile__username-link" href={ `${user.website}` }>{ user.username }</a>
            : user.username
          }
        </div>
        {user.company &&
          <div className="user-profile__company-name">
            ({ user.company.name})
          </div>
        }
      </div>
    </div>
  )
}

function UserProfiles({ users }) {
  return (
    <div className="user-profiles">
      {users.map((user, index) => (
        <UserProfile key={index} user={user} />
      ))}
    </div>
  )
}

function App() {
  return (
    <div className="container">
      <h1>Users</h1>
      <UserProfiles users={users} />
    </div>
  )
}

export default App;
