import { getFetchData } from "../redux/get-data/action-creators";
import {
  fetchFailure,
  fetchLoading,
} from "../redux/loading-error/action-creators";

const getDataFromServer = () => {
  return async (dispatch) => {
    dispatch(fetchLoading());

    const responseServices = await fetch("http://localhost:3004/servers");
    const responseEnvs = await fetch("http://localhost:3004/envs");
    const responseLocations = await fetch("http://localhost:3004/locations");

    if (!responseServices.ok || !responseEnvs.ok || !responseLocations.ok) {
      dispatch(fetchFailure());
      throw new Error(
        `Couldn't fetch this url , status ${responseServices.status}`
      );
    }

    const dataServices = await responseServices.json();
    const dataEnvs = await responseEnvs.json();
    const dataLocations = await responseLocations.json();
		
    dispatch(getFetchData(dataLocations, dataEnvs, dataServices));
    dispatch(fetchLoading());
  };
};

export default getDataFromServer;
