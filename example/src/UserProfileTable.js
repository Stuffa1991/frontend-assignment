import React, {useState, useEffect, useCallback} from 'react';
import { UserProfile } from "./UserProfile";

// List User profiles
export function UserProfileTable() {
  const [users, setArray] = useState([]);

  const fetchUsers = useCallback(async () => {
    const usersUrl = 'https://jsonplaceholder.typicode.com/users';
    const fetchedUsers = await fetch(usersUrl);
    return fetchedUsers.json()
  }, []);

  useEffect(() => {
    fetchUsers().then((fetchedUsers) => {
      setArray([...fetchedUsers]);
    })
  }, [fetchUsers]);

  return (
    <div className="user-profiles">
      {users.map((user, index) => (
        <UserProfile key={index} user={user} />
      ))}
    </div>
  )
}
