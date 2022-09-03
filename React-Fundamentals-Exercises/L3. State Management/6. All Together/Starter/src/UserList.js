import PropTypes from "prop-types";
import User from "./User.js";
import { useState } from "react";

const UserList = ({ users }) => {
  const [showGamesPlayed, setShowGamesPlayed] = useState(true);

  const handleShowGamesPlayChange = () => {
    setShowGamesPlayed(!showGamesPlayed);
  }

  const buttonValue = showGamesPlayed ? "Hide games played" : "Show games played";

  return (
    <div>
      <button
        className="show-hide-games-played-button"
        onClick={handleShowGamesPlayChange}>
          {buttonValue}
      </button>
      <ul className="user-list">
        {users.map((user) => (
          <User
            key={user.username}
            user={user}
            showGamesPlayed={showGamesPlayed}/>
        ))
        }
      </ul>
    </div>
  );
}

UserList.propTypes = {
  users: PropTypes.array.isRequired
};

export default UserList;
