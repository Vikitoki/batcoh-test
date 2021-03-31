import {
  CREATE_NEW_TEST_FORM,
  DELETE_SELECT_TEST_FORM,
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

      console.log(currentItemId);

      console.log(newFormsInformation);

      return {
        ...state,
        currentAmount: state.currentAmount - 1,
        formsInformation: [...newFormsInformation],
      };
    default:
      return state;
  }
};

export { formsReducer };
