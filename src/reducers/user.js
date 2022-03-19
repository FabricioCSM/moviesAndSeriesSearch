import { SIGN_INFO } from "../actions";

const INITIAL_STATE = {
  email: '',
  userName: '',
}

const signUser = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_INFO:
      return {
        ...state,
        email: action.email,
        userName: action.userName,
      };
      default:
        return state;
  }
}

export default signUser;