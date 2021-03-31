import {
  createNewTestForm,
  deleteSelectTestForm,
  modifiedSelectTestForm,
} from "../redux/forms/action-creators";

const formCreate = () => {
  return (dispatch) => {
    dispatch(createNewTestForm());
  };
};

const formDelete = (id) => {
  return (dispatch) => {
    dispatch(deleteSelectTestForm(id));
  };
};

const formModified = (index, location, enviroment, hintValue) => {
  return (dispatch) => {
    dispatch(modifiedSelectTestForm(index, location, enviroment, hintValue));
  };
};

export { formCreate, formDelete, formModified };
