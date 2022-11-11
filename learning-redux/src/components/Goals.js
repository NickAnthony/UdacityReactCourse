import { connect } from "react-redux";
import { useRef } from "react";
import { handleAddGoal, handleDeleteGoal } from "../actions/goals";
import List from "./List";

const Goals = (props) => {
  const inputRef = useRef("");

  const addItem = (e) => {
    e.preventDefault();

    props.dispatch(
      handleAddGoal(inputRef.current.value, () => {
        inputRef.current.value = "";
      })
    );
  };

  const removeItem = (goal) => {
    props.dispatch(handleDeleteGoal(goal));
  };

  return (
    <div>
      <h1>Goals List</h1>
      <input type="text" placeholder="Add new goal" ref={inputRef} />
      <button onClick={addItem}>Add Goal</button>
      <List items={props.goals} removeItem={removeItem} />
    </div>
  );
};

export default connect((state) => ({
  goals: state.goals,
}))(Goals);
