export const ADD_COUNTER = 'counter/ADD_COUNTER'
export const REDUCER_COUNTER = 'counter/REDUCER_COUNTER'

export const initialState = {
  counter: 0,
}

export const counterReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      }

    case REDUCER_COUNTER:
      return {
        ...state,
        counter: state.counter - 1,
      }
    default:
      return state
  }
}

export const incrementCounter = () => {
  return { type: ADD_COUNTER }
}

export const decrementCounter = () => {
  return { type: REDUCER_COUNTER }
}