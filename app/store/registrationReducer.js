import { UPDATE_REGISTRATION_DATA } from "./action";

const initialState = {
  registrationData: {},
};

const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_REGISTRATION_DATA:
      return {
        ...state,
        registrationData: {
          ...state.registrationData,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export default registrationReducer;
