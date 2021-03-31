import {
  CREATE_NEW_TEST_FORM,
  DELETE_SELECT_TEST_FORM,
} from "./action-variables";

const createNewTestForm = () => ({
  type: CREATE_NEW_TEST_FORM,
});

const deleteSelectTestFrom = (id) => ({
  type: DELETE_SELECT_TEST_FORM,
  payload: id,
});

export { createNewTestForm, deleteSelectTestFrom };
