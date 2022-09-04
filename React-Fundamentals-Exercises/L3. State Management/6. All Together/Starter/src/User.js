import PropTypes from 'prop-types';
import UserProfile from "./user-profile-icon.png";


/* Used to display one specifc user in the user list.
 */
const User = ({ user, showGamesPlayed }) => {
  const gamesPlayed = showGamesPlayed ? user.gamesPlayed : "*";
  return (
        <div key={user.username} className="user">
          <div className="user-profile-photo-container">
            <img  src={UserProfile} alt="user profile photo" className="user-profile-photo"/>
          </div>
          <div className="user-details">
            <p className="user-title">{user.firstName} {user.lastName}</p>
            <p>{user.username}</p>
            <p>{user.username} played {gamesPlayed} games.</p>
          </div>
        </div>
  );
}

User.propTypes = {
  user: PropTypes.object.isRequired,
  showGamesPlayed: PropTypes.func.isRequired,
};

export default User;
