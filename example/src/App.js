import './App.css';
import users from './data.json';
import React from 'react';

function UserProfile({ user }) {
  return (
    <div className="user_profile">
      <img className={ `user_profile__image` } src="https://placekitten.com/150/150" alt="User image"/>
      <div className="user_profile__content">
        <div className="user_profile__username">
          {user.website
            ? <a href={ `${user.website}` }>{ user.username }</a>
            : user.username
          }
        </div>
        {user.company &&
          <div className="user_profile__company_name">
            ({ user.company.name})
          </div>
        }
      </div>
    </div>
  )
}

function UserProfiles({ users }) {
  return (
    <div className="user_profiles">
      {users.map((user, index) => (
        <UserProfile key={index} user={user} />
      ))}
    </div>
  )
}

function App() {
  return (
    <div className="container">
      <UserProfiles users={users} />
    </div>
  )
}

export default App;
