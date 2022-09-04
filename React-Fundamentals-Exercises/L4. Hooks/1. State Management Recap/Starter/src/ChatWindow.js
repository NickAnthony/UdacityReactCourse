import Message from "./Message.js";
import NewMessageBox from "./NewMessageBox.js";
import PropTypes from "prop-types";

const ChatWindow = ({ messages, username, onSendMessage }) => {
  return(
    <div className="chat-window">
      <h2>Super Awesome Chat</h2>
      <div className="name sender">{username}</div>

      <ul className="message-list">
        {messages.map((message, index) => (
          <Message
            key={index}
            message={message}
            username={username}
          />
        ))}
      </ul>

      <NewMessageBox
        onSendMessage={onSendMessage}
        username={username} />
    </div>
  );
}

ChatWindow.propTypes = {
  messages: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired,
  onSendMessage: PropTypes.func.isRequired,
};

export default ChatWindow;
