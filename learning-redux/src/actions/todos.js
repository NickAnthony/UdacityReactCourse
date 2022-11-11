import API from "goals-todos-api";

// -- CONSTANTS -- //

export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

// -- ACTION CREATORS -- //

export function addTodo(id, name, complete = false) {
  return {
    type: ADD_TODO,
    todo: {
      id: id,
      name: name,
      complete: complete,
    },
  };
}

export function handleAddTodo(name, callback) {
  return (dispatch) => {
    return API.saveTodo(name)
      .then((result) => {
        dispatch(addTodo(result.id, result.name, result.complete));
        callback();
      })
      .catch(() => {
        alert(`Failed to save ${name}.  Please try again.`);
      });
  };
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id: id,
  };
}

// Action creator, because it creates an action
// We can't invoke here because these are pure functions
export function handleDeleteTodo(todo) {
  return (dispatch) => {
    dispatch(removeTodo(todo.id));

    return API.deleteTodo(todo.id).catch(() => {
      dispatch(addTodo(todo.id, todo.name, todo.complete));
      alert(`Failed to remove ${todo.name}.  Please try again.`);
    });
  };
}
export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id: id,
  };
}
export function handleToggleTodo(todo) {
  return (dispatch) => {
    dispatch(toggleTodo(todo.id));

    return API.saveTodoToggle(todo.id).catch(() => {
      dispatch(toggleTodo(todo.id));
      alert(
        `Failed to mark ${todo.name} as ${
          !todo.complete ? "completed." : "incomplete."
        }.  Please try again.`
      );
    });
  };
}
