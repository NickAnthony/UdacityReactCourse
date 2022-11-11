import { connect } from "react-redux";
import { useEffect } from "react";
import ConnectedTodos from "./Todos";
import ConnectedGoals from "./Goals";
import { handleReceiveData } from "../actions/shared";

const App = ({ dispatch, loading }) => {
  useEffect(() => {
    dispatch(handleReceiveData());
  }, [dispatch]);

  if (loading === true) {
    return <img src="./loading.gif" alt="Loading Icon" />;
  }

  return (
    <div>
      <ConnectedTodos />
      <ConnectedGoals />
    </div>
  );
};

export default connect((state) => ({
  loading: state.loading,
}))(App);
