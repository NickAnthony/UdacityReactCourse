import { useState } from "react";
import PropTypes from 'prop-types';

const NewMessageBox = ({ onSendMessage, username }) => {
  const [newMessageText, setNewMessageText] = useState("");

  // If the user did not type anything, he/she should not be allowed to submit.
  const isDisabled = (newMessageText === "");

  // New Messages need to propagate all the way up so both users can display
  // the message.
  const handleMessageInput = (event) => {
    setNewMessageText(event.target.value);
  }

  const handleMessageSend = (event) => {
    event.preventDefault();
    onSendMessage({username: username, text: newMessageText});
    setNewMessageText("");
  }

  return(
    <div>
      <form className="input-group" onSubmit={handleMessageSend}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your message..."
          value={newMessageText}
          onChange={handleMessageInput}
        />
        <div className="input-group-append">
          <button
            className="btn submit-button"
            disabled={isDisabled}
            onClick={handleMessageSend}>
            SEND
          </button>
        </div>
      </form>
    </div>
  );
}

NewMessageBox.propTypes = {
  onSendMessage: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
};

export default NewMessageBox;
