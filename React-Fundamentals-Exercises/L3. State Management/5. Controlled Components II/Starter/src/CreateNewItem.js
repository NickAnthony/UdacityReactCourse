import PropTypes from 'prop-types';
import { useState } from "react";

const CreateNewItem = ({onAddItem}) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const inputIsEmpty = () => value === "";

  const submitNewItem = (event) => {
    event.preventDefault();
    onAddItem(value);
    setValue("");
  }

  return (
    <div>
      <form onSubmit={submitNewItem}>
        <input
          type="text"
          placeholder="Enter New Item"
          value={value}
          onChange={handleChange}
        />
        <button disabled={inputIsEmpty()}>Add</button>
      </form>
    </div>
  );
}

CreateNewItem.propTypes = {
  onAddItem: PropTypes.func.isRequired,
};

export default CreateNewItem;
