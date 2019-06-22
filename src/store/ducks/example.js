// TYPES
export const Types = {
  // api
  SHOW_EXAMPLE_REQUEST: 'example/SHOW_EXAMPLE_REQUEST',
  SHOW_EXAMPLE_SUCCESS: 'example/SHOW_EXAMPLE_SUCCESS',
  SHOW_EXAMPLE_FAILURE: 'example/SHOW_EXAMPLE_FAILURE'
}

// REDUCER
const INITIAL_STATE = {
  loading: false,
  error: false,
  errorMessage: '',
  example: null
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    // show
    case Types.SHOW_EXAMPLE_REQUEST:
      return { ...state, loading: true }
    case Types.SHOW_EXAMPLE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: '',
        example: action.payload
      }
    case Types.SHOW_EXAMPLE_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload.error
      }
    default:
      return state
  }
}

// ACTIONS
export const Creators = {
  // show
  showRequest: () => ({
    type: Types.SHOW_EXAMPLE_REQUEST
  }),
  showSuccess: data => ({
    type: Types.SHOW_EXAMPLE_SUCCESS,
    payload: data
  }),
  showFailure: () => ({
    type: Types.SHOW_EXAMPLE_FAILURE
  })
}
