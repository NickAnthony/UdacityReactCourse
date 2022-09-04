import PropTypes from 'prop-types';


/* Used to display one specifc user in the user list.
 */
const User = ({ user, showGamesPlayed }) => {
  const gamesPlayed = showGamesPlayed ? user.gamesPlayed : "*";
  return (
        <li key={user.username} className="user">
          <p>{user.firstName} {user.lastName}</p>
          <p>{user.username}</p>
          <p>{user.username} played {gamesPlayed} games.</p>
        </li>
  );
}

User.propTypes = {
  user: PropTypes.object.isRequired,
  showGamesPlayed: PropTypes.func.isRequired,
};

export default User;
