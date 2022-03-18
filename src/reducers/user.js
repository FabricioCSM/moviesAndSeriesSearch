import { SIGN_INFO } from "../actions";

const INITIAL_STATE = {
  email: '',
  name: '',
}

const signUser = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_INFO:
      return {
        ...state,
        email: action.email,
        name: action.name,
      };
      default:
        return state;
  }
}

export default signUser;