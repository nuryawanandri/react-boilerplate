export const GET_USER_REQUEST = 'other/GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'other/GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'other/GET_USER_FAILURE';

export const otherActionTypes = {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE
};

export const getUser = () => ({
  type: GET_USER_REQUEST
});
