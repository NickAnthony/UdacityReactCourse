import { useState } from 'react';
import PropTypes from 'prop-types';

const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  username: "",
  gamesPlayed: 0,
}

/* Add a new user to the list.  Validates the input and callback back to the
 * parent component.
 */
const AddNewUser = ({ handleAddNewUser, usernames, }) => {
  const [user, setUser] = useState(INITIAL_STATE);

  const handleInputChange = (event) => {
    var { name, value } = event.target;
    if (name === "gamesPlayed" && value < 0) {
      value = 0;
    }
    setUser({ ...user, [name]: value });
  };

  // Used to determine if the "Add" butt should be enabled/disabled
  const isAddButtonEnabled = (
      user.firstName.trim().length
      && user.lastName.trim().length
      && user.username.trim().length);

  // Validates the username
  const validateUsername = (username) => {
    if (username === "") {
      alert("username cannot be empty!");
      return false;
    }
    if (usernames.includes(username.trim())) {
      alert(`${username} is already taken!`);
      return false;
    }
    if (username.indexOf(' ') >= 0) {
      alert(`Your username cannot contain whitespaces`);
      return false;
    }
    return true;
  }

  // Called when the form is submitted
  const handleSubmit = (event) => {
    event.preventDefault();
    if (user.firstName === "") {
      alert("First name cannot be empty");
      return;
    }
    if (user.lastName === "") {
      alert("Last name cannot be empty");
      return;
    }
    if (!validateUsername(user.username)) {
      return;
    }
    if (user.gamesPlayed < 0) {
      alert("Games played cannot be less than 0");
      return;
    }
    handleAddNewUser(user);
    setUser(INITIAL_STATE);
  }
  return (
    <div>
      <form className="new-user-container" onSubmit={handleSubmit}>
        <label className="new-user-input">
          <p>First name</p>
          <input
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={handleInputChange} />
        </label>
        <label className="new-user-input">
          <p>Last name</p>
          <input
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={handleInputChange} />
        </label>
        <label className="new-user-input">
          <p>Username</p>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleInputChange} />
        </label>
        <label className="new-user-input">
          <p>Games played</p>
          <input
            type="number"
            name="gamesPlayed"
            value={user.gamesPlayed}
            onChange={handleInputChange} />
        </label>
        <button class="button-6" disabled={!isAddButtonEnabled}>
          Add
        </button>
      </form>
    </div>
  );
}

AddNewUser.propTypes = {
  handleAddNewUser: PropTypes.func.isRequired,
  usernames: PropTypes.array.isRequired,
};

export default AddNewUser;
