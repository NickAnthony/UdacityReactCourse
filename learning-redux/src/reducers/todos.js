import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../actions/todos";
import { RECEIVE_DATA } from "../actions/shared";

// -- REDUCERS -- //

export default function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat([action.todo]);
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.id) {
          return Object.assign({}, todo, { complete: !todo.complete });
        } else {
          return todo;
        }
      });
    case RECEIVE_DATA:
      return action.todos;
    default:
      return state;
  }
}
