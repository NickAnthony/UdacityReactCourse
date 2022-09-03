import { useState } from 'react';
import PropTypes from 'prop-types';


const AddNewUser = ({ handleAddNewUser, usernames, }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [gamesPlayed, setGamesPlayed] = useState(0);

  const handleFirstNameChange = (event) => {
    console.log(`${firstName} ${lastName} ${username}`)
    setFirstName(event.target.value);
  }
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  }
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    console.log(username);
    console.log(username === "");
  }
  const handleGamesPlayedChange = (event) => {
    var newGamesPlayed = event.target.value.trim();
    if (newGamesPlayed < 0) {
      newGamesPlayed = 0;
    }
    setGamesPlayed(newGamesPlayed);
  }

  // Used to determine if the "Add" butt should be enabled/disabled
  const isAddButtonEnabled = (
      firstName.trim().length
      && lastName.trim().length
      && username.trim().length);

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
    if (firstName === "") {
      alert("First name cannot be empty");
      return;
    }
    if (lastName === "") {
      alert("Last name cannot be empty");
      return;
    }
    if (!validateUsername(username)) {
      return;
    }
    if (gamesPlayed < 0) {
      alert("Games played cannot be less than 0");
      return;
    }
    handleAddNewUser(firstName, lastName, username, gamesPlayed);
    setFirstName("");
    setLastName("");
    setUsername("");
    setGamesPlayed(0);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <p>First name</p>
          <input
            type="text"
            value={firstName}
            onChange={handleFirstNameChange} />
        </label>
        <label>
          <p>Last name</p>
          <input
            type="text"
            value={lastName}
            onChange={handleLastNameChange} />
        </label>
        <label>
          <p>Username</p>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange} />
        </label>
        <label>
          <p>Games played</p>
          <input
            type="number"
            value={gamesPlayed}
            onChange={handleGamesPlayedChange} />
        </label>
        <p></p>
        <input type="submit" value="Add" disabled={!isAddButtonEnabled}/>
      </form>
    </div>
  );
}

AddNewUser.propTypes = {
  handleAddNewUser: PropTypes.func.isRequired,
  usernames: PropTypes.array.isRequired,
};

export default AddNewUser;
