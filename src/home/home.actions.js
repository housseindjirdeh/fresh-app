import { GET_HOME_DETAILS } from 'home';

export const fetchHomeInfo = () => {
  return {
    type: GET_HOME_DETAILS,
    payload: 'Milcreek Avenue'
  };
};
