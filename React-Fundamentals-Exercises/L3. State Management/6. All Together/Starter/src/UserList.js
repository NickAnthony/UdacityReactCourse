import { useState } from "react";
import PropTypes from "prop-types";
import User from "./User.js";

/* Used to display a list of all users in the list.
 */
const UserList = ({ users }) => {
  const [showGamesPlayed, setShowGamesPlayed] = useState(true);

  const handleShowGamesPlayChange = () => {
    setShowGamesPlayed(!showGamesPlayed);
  }

  const buttonValue = showGamesPlayed ? "Hide games played" : "Show games played";

  return (
    <div className="user-list-container">
    <button className="button-6 diplay-games-button" role="button"
        onClick={handleShowGamesPlayChange}>
          {buttonValue}
      </button>
      <div className="user-list">
        {users.map((user) => (
          <User
            key={user.username}
            user={user}
            showGamesPlayed={showGamesPlayed}/>
        ))
        }
      </div>
    </div>
  );
}

UserList.propTypes = {
  users: PropTypes.array.isRequired
};

export default UserList;
