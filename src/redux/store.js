import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  postReducer,
  fragmentReducer,
  specialityReducer,
  teacherReducer,
  courseReducer,
} from "./reducers";

export default createStore(
  combineReducers({
    postReducer,
    specialityReducer,
    teacherReducer,
    fragmentReducer,
    courseReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
