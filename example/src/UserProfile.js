export function UserProfile({ user }) {
  return (
    <div className="user-profile">
      <img className={ `user-profile__image` } src="https://placekitten.com/150/150" alt="User"/>
      <div className="user-profile__content">
        <div className="user-profile__username">
          {user.website
            ? <a className="user-profile__username-link" target="_blank" rel="noreferrer" href={ `http://${user.website}` }>{ user.username }</a>
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
