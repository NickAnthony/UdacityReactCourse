import "./App.css";
import { useState } from "react";
import ChatWindow from "./ChatWindow.js";
import logo from "./logo.svg";

const INITIAL_MESSAGE_STATE = [
  { username: "Amy", text: "Hi, Jon!" },
  { username: "Amy", text: "How are you?" },
  { username: "John", text: "Hi, Amy! Good, you?" },
];

const App = () => {
  const [messages, setMessages] = useState(INITIAL_MESSAGE_STATE);
  const [users, setUsers] = useState([{ username: "Amy" }, { username: "John" }]);

  // What happens when user clicks send message!
  const onSendMessage = (newMessage) => {
    setMessages([...messages, newMessage])
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="container">
        <ChatWindow
          messages={messages}
          username={users[0].username}
          onSendMessage={onSendMessage}/>

        <ChatWindow
          messages={messages}
          username={users[1].username}
          onSendMessage={onSendMessage}/>

      </div>
    </div>
  );
};

export default App;
