import API from "goals-todos-api";

// -- CONSTANTS -- //

export const RECEIVE_DATA = "RECEIVE_DATA";

// -- ACTION CREATORS -- //

export function handleReceiveData() {
  return (dispatch) => {
    Promise.all([API.fetchTodos(), API.fetchGoals()]).then(([todos, goals]) => {
      dispatch(receiveData(todos, goals));
    });
  };
}
function receiveData(todos, goals) {
  return {
    type: RECEIVE_DATA,
    todos: todos,
    goals: goals,
  };
}
