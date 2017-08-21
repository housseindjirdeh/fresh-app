import { GET_HOME_DETAILS } from 'home';

const initialState = {
  homeTitle: 'Mississauga',
  homeDetails: ''
};

export const homeReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_HOME_DETAILS:
      return {
        ...state,
        homeDetails: action.payload
      };
    default:
      return state;
  }
};
