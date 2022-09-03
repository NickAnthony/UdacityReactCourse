import PropTypes from 'prop-types';

const User = ({ user, showGamesPlayed }) => {
  const gamesPlayed = showGamesPlayed ? user.games_played : 0;
  return (
        <li key={user.username} className="user">
          <p>{user.first_name} {user.last_name}</p>
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
