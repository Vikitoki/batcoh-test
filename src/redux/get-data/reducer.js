import { GET_DATA_FROM_SERVER_SUCCESS } from "./action-variables";

const initialState = {
  locations: [],
  envs: [],
  servers: [],
};

const getDataFromServerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_FROM_SERVER_SUCCESS:
      return {
        ...state,
        locations: [...action.payload.locations],
        envs: [...action.payload.envs],
        servers: [...action.payload.servers],
      };

    default:
      return state;
  }
};

export default getDataFromServerReducer;
