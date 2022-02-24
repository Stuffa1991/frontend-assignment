import { UserProfile } from "./UserProfile";

// List User profiles
export function UserProfiles({ users }) {
  return (
    <div className="user-profiles">
      {users.map((user, index) => (
        <UserProfile key={index} user={user} />
      ))}
    </div>
  )
}
