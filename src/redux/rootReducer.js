import { combineReducers } from "redux";
import getDataFromServerReducer from "./get-data/reducer";
import loadingAndErrorReducer from "./loading-error/reducer";

const rootReducer = combineReducers({
  loadingAndError: loadingAndErrorReducer,
  getDataFromServer: getDataFromServerReducer,
});

export default rootReducer;
