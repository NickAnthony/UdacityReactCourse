import PropTypes from 'prop-types';

const User = ({ user }) => {
  return (
        <li key={user.username} className="user">
          <p>{user.first_name} {user.last_name}</p>
          <p>{user.username}</p>
          <p>{user.username} played {user.games_played} games.</p>
        </li>
  );
}

User.propTypes = {
  user: PropTypes.object.isRequired
};

export default User;
