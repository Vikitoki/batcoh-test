import { combineReducers } from "redux";
import { formsReducer } from "./forms/reducer";
import getDataFromServerReducer from "./get-data/reducer";
import loadingAndErrorReducer from "./loading-error/reducer";

const rootReducer = combineReducers({
  loadingAndError: loadingAndErrorReducer,
  getDataFromServer: getDataFromServerReducer,
  forms: formsReducer,
});

export default rootReducer;
