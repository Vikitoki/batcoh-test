import { FETCH_FAILURE, FETCH_LOADING } from "./action-variables";

const initialState = {
  loading: false,
  error: false,
};

const loadingAndErrorReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOADING:
      return {
        ...state,
        loading: !state.loading,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default loadingAndErrorReducer;
