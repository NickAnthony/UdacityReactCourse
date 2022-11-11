import todos from "./todos";
import goals from "./goals";
import loading from "./shared";

// Used to combine all reducers
const reducers = {
  todos: todos,
  goals: goals,
  loading: loading,
};
export default reducers;
