export const ADD_CLICK_COUNT_REQUEST = 'other/ADD_CLICK_COUNT_REQUEST'
export const ADD_CLICK_COUNT_SUCCESS = 'other/ADD_CLICK_COUNT_SUCCESS'

export const otherActionTypes = {
  ADD_CLICK_COUNT_REQUEST,
  ADD_CLICK_COUNT_SUCCESS,
}

export const initialState = {
  clickCount: 0,
}

export const otherReducer = ( state = initialState, action ) => {
  switch(action.type) {
    case ADD_CLICK_COUNT_REQUEST:
      return {
        ...state
      }
    case ADD_CLICK_COUNT_SUCCESS:
      return {
        ...state,
        clickCount: state.clickCount + 1
      }
  }
}

export const addClickCountRequest = () => ({
  type: ADD_CLICK_COUNT_REQUEST
})

export const addClickCountSuccess = () => ({
  type: ADD_CLICK_COUNT_SUCCESS
})
