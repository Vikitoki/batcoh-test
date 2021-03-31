import {
  CREATE_NEW_TEST_FORM,
  DELETE_SELECT_TEST_FORM,
  MODIFIED_SELECT_TEST_FORM,
} from "./action-variables";

const initialState = {
  currentAmount: 0,
  formsInformation: [],
};

const formsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NEW_TEST_FORM:
      return {
        ...state,
        currentAmount: state.currentAmount + 1,
        formsInformation: [
          ...state.formsInformation,
          {
            unicIdForItems: Math.random(),
            locationID: "testenter.ru_01",
            envID: "Test_192.168.112.23",
            hint: "",
          },
        ],
      };

    case DELETE_SELECT_TEST_FORM:
      const currentItemId = action.payload;
      const newFormsInformation = state.formsInformation.filter((item) => {
        return item.unicIdForItems !== currentItemId;
      });

      return {
        ...state,
        currentAmount: state.currentAmount - 1,
        formsInformation: [...newFormsInformation],
      };
			
    case MODIFIED_SELECT_TEST_FORM:
      const { index, location, enviroment, hintValue } = action.payload;
      const unicId = state.formsInformation[index].unicIdForItems;
      const newInformation = [...state.formsInformation];
      newInformation[index] = {
        unicIdForItems: unicId,
        locationID: location,
        envID: enviroment,
        hint: hintValue,
      };

      return {
        ...state,
        formsInformation: [...newInformation],
      };
    default:
      return state;
  }
};

export { formsReducer };
