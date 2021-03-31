import { FETCH_FAILURE, FETCH_LOADING } from "./action-variables";

const fetchLoading = () => ({
  type: FETCH_LOADING,
});

const fetchFailure = () => ({
  type: FETCH_FAILURE,
});

export { fetchLoading, fetchFailure };
