import PropTypes from "prop-types";
import User from "./User.js";

const UserList = ({ users }) => {
  return (
    <ul className="user-list">
      {users.map((user) => (
        <User key={user.username} user={user} />
      ))
      }
    </ul>
  );
}

UserList.propTypes = {
  users: PropTypes.array.isRequired
};

export default UserList;
