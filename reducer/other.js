export const GET_USER_REQUEST = 'other/GET_USER_REQUEST'
export const GET_USER_SUCCESS = 'other/GET_USER_SUCCESS'
export const GET_USER_FAILURE = 'other/GET_USER_FAILURE'

export const otherActionTypes = {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE
}

export const initialState = {
  clickCount: 0,
  error: '',
  data: [],
}

export const otherReducer = ( state = initialState, action ) => {
  switch(action.type) {
    case GET_USER_REQUEST:
      return {
        ...state
      }
    case GET_USER_SUCCESS:
      return {
        ...state,
        data: action.data
      }
    case GET_USER_FAILURE:
      return {
        ...state,
        error: action.error
      }
    default:
      return {
        ...state
      }
  }
}

export const getUser = () => ({
  type: GET_USER_REQUEST
})