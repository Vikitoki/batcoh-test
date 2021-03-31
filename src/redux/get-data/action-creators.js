import { GET_DATA_FROM_SERVER_SUCCESS } from "./action-variables";

const getFetchData = (dataLocations, dataEnvs, dataServices) => ({
  type: GET_DATA_FROM_SERVER_SUCCESS,
  payload: {
    locations: dataLocations,
    envs: dataEnvs,
    servers: dataServices,
  },
});

export { getFetchData };
