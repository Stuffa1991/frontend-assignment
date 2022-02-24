import React, {useState, useEffect, useCallback} from 'react';
import { UserProfile } from "./UserProfile";

// List User profiles
export function UserProfileTable() {
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async () => {
    const usersUrl = 'https://jsonplaceholder.typicode.com/users';
    const fetchedUsers = await fetch(usersUrl);
    const userJson = await fetchedUsers.json()
    setUsers([...userJson]);
  }, [setUsers]);

  useEffect(() => {
    fetchUsers().catch(console.log);
  }, [fetchUsers]);

  return (
    <div className="user-profiles">
      {users.map((user, index) => (
        <UserProfile key={index} user={user} />
      ))}
    </div>
  )
}
