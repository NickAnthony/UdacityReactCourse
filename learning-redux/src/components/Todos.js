import { connect } from "react-redux";
import { useRef } from "react";
import List from "./List";
import {
  handleAddTodo,
  handleDeleteTodo,
  handleToggleTodo,
} from "../actions/todos";

const Todos = (props) => {
  const inputRef = useRef("");

  const addItem = (e) => {
    e.preventDefault();
    props.dispatch(
      handleAddTodo(inputRef.current.value, () => {
        inputRef.current.value = "";
      })
    );
  };

  const removeItem = (todo) => {
    props.dispatch(handleDeleteTodo(todo));
  };

  const toggleItem = (todo) => {
    props.dispatch(handleToggleTodo(todo));
  };

  return (
    <div>
      <h1>Todos List</h1>
      <input type="text" placeholder="Add new todo" ref={inputRef} />
      <button onClick={addItem}>Add Todo</button>
      <List
        items={props.todos}
        removeItem={removeItem}
        toggleItem={toggleItem}
      />
    </div>
  );
};

export default connect((state) => ({
  todos: state.todos,
}))(Todos);
