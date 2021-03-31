import {
  CREATE_NEW_TEST_FORM,
  DELETE_SELECT_TEST_FORM,
  MODIFIED_SELECT_TEST_FORM,
} from "./action-variables";

const createNewTestForm = () => ({
  type: CREATE_NEW_TEST_FORM,
});

const deleteSelectTestForm = (id) => ({
  type: DELETE_SELECT_TEST_FORM,
  payload: id,
});

const modifiedSelectTestForm = (index, location, enviroment, hintValue) => ({
  type: MODIFIED_SELECT_TEST_FORM,
  payload: {
    index: index,
    location: location,
    enviroment: enviroment,
    hintValue: hintValue,
  },
});

export { createNewTestForm, deleteSelectTestForm, modifiedSelectTestForm };
