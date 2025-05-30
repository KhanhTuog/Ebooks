import * as actionTypes from '../actions';

const initialState = {
  loading: false,
  error: null,
  loggedInUserSGK: null,
  loadingResetPass: false,
  registerInfo: null,
  modalOpen: 'NONE'
};

const loginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.POST_LOGIN_REQUEST:
      return { ...state, loading: true };

    case actionTypes.POST_LOGIN_SUCCESS:

      return {
        ...state,
        loading: false,
        loggedInUserSGK: payload,
        error: null,
      };

    case actionTypes.POST_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        loggedInUserSGK: null,
        error: payload.error,
      };

      case actionTypes.POST_CODE_LOGIN_REQUEST:
        return { ...state, loading: true };
  
      case actionTypes.POST_CODE_LOGIN_SUCCESS:
  
        return {
          ...state,
          loading: false,
          loggedInUserSGK: payload,
          error: null,
        };
  
      case actionTypes.POST_CODE_LOGIN__FAILURE:
        return {
          ...state,
          loading: false,
          loggedInUserSGK: null,
          error: payload.error,
        };
  

    case actionTypes.POST_LOGOUT:
      return {
        ...state,
        loading: false,
        error: null,
        loggedInUserSGK: null,
      };

    default:
      return state;
  }
};

export default loginReducer;
