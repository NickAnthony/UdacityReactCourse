import "./App.css";
import {useState} from 'react';
import AddNewUser from "./AddNewUser.js";
import UserList from "./UserList.js";

const App = () => {
  const [users, setUsers] = useState([{
      firstName: "Ayana",
      lastName: "Hendricks",
      username: "ayanarocks",
      gamesPlayed: 6,
    },{
      firstName: "Callum",
      lastName: "Haynes",
      username: "haynes12",
      gamesPlayed: 0,
    },{
      firstName: "Katrina",
      lastName: "Nixon",
      username: "knix",
      gamesPlayed: 2,
    },{
      firstName: "Ibrahim",
      lastName: "Roman",
      username: "gam3r",
      gamesPlayed: 12,
    }]);

  const usernames = users.map((user) => (user.username));
  const handleAddNewUser = (newUser) => {
    console.log(newUser);
    setUsers([...users, newUser]);
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
