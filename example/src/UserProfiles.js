import React, { useState, useEffect } from 'react';
import { UserProfile } from "./UserProfile";

// List User profiles
export function UserProfiles() {
  const [users, setArray] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const usersUrl = 'https://jsonplaceholder.typicode.com/users';
      const fetchedUsers = await fetch(usersUrl);
      return fetchedUsers.json()
    }

    fetchUsers().then((fetchedUsers) => {
      setArray([...fetchedUsers, []]);
    })
  }, []);

  return (
    <div className="user-profiles">
      {users.map((user, index) => (
        <UserProfile key={index} user={user} />
      ))}
    </div>
  )
}
