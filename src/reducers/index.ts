import { combineReducers } from "redux";
import todos from "./todos";
import { Todo } from "../constants/Todo";
import { Action } from "../actions/constants";

const rootReducer: (state: Todo[], action: Action) => {} = combineReducers({
  todos
});

export default rootReducer;
