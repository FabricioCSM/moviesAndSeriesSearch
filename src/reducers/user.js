import { SIGN_INFO } from "../actions";

const INITIAL_STATE = {
  email: '',
  password: '',
}

const signUser = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_INFO:
      return {
        ...state,
        email: action.email,
        password: action.password,
      };
      default:
        return state;
  }
}

export default signUser;