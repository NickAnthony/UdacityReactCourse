import API from "goals-todos-api";

// -- CONSTANTS -- //

export const ADD_GOAL = "ADD_GOAL";
export const REMOVE_GOAL = "REMOVE_GOAL";

// -- ACTION CREATORS -- //

function addGoal(id, name) {
  return {
    type: ADD_GOAL,
    goal: {
      id: id,
      name: name,
    },
  };
}
export function handleAddGoal(name, callback) {
  return (dispatch) => {
    return API.saveGoal(name)
      .then((result) => {
        dispatch(addGoal(result.id, result.name));
        callback();
      })
      .catch(() => {
        alert(`Failed to save ${name}.  Please try again.`);
      });
  };
}
function removeGoal(id) {
  return {
    type: REMOVE_GOAL,
    id: id,
  };
}
export function handleDeleteGoal(goal) {
  return (dispatch) => {
    dispatch(removeGoal(goal.id));

    return API.deleteGoal(goal.id).catch(() => {
      dispatch(addGoal(goal.id, goal.name));
      alert(`Failed to remove ${goal.name}.  Please try again.`);
    });
  };
}
