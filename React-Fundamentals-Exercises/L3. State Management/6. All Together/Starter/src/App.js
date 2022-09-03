import "./App.css";
import AddNewUser from "./AddNewUser.js";
import UserList from "./UserList.js";
import {useState} from 'react';

const App = () => {
  const [users, setUsers] = useState([{
      first_name: "Ayana",
      last_name: "Hendricks",
      username: "ayanarocks",
      games_played: 6,
    },{
      first_name: "Callum",
      last_name: "Haynes",
      username: "haynes12",
      games_played: 0,
    },{
      first_name: "Katrina",
      last_name: "Nixon",
      username: "knix",
      games_played: 2,
    },{
      first_name: "Ibrahim",
      last_name: "Roman",
      username: "gam3r",
      games_played: 12,
    }]);

  const usernames = users.map((user) => (user.username));
  const handleAddNewUser = (firstName, lastName, username, gamesPlayed) => {
    setUsers([...users, {
      first_name: firstName,
      last_name: lastName,
      username: username,
      games_played: gamesPlayed,
    }]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Games Played Leaderboard</h1>
      </header>
      <AddNewUser usernames={usernames} handleAddNewUser={handleAddNewUser}/>
      <UserList users={users}/>
    </div>
  );
};

export default App;
