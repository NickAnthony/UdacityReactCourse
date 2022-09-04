import PropTypes from 'prop-types';

const Message = ({ message, username }) => {
  return(
    <li
      className={
        message.username === username
          ? "message sender"
          : "message recipient"
      }
    >
      <p>{`${message.username}: ${message.text}`}</p>
    </li>
  );
}

Message.propTypes = {
  message: PropTypes.object.isRequired,
  username: PropTypes.string.isRequired,
};

export default Message;
