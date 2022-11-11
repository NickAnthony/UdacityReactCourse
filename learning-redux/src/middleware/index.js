import thunk from "redux-thunk";
import checker from "./checker";
import logger from "./logger";

// -- MIDDLEWARE -- //
const middleware = [thunk, checker, logger];
export default middleware;
