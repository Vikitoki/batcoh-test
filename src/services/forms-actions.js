import {
  createNewTestForm,
  deleteSelectTestFrom,
} from "../redux/forms/action-creators";

const formCreate = () => {
  return (dispatch) => {
    dispatch(createNewTestForm());
  };
};

const formDelete = (id) => {
  return (dispatch) => {
    dispatch(deleteSelectTestFrom(id));
  };
};

export { formCreate, formDelete };
