import { GET_MOVIES_BY_SEARCH, GET_MOVIES_BY_NAME } from "../actions";

const INITIAL_STATE = {
  movies: [],
  name: '',
  search: '',
}

const movies = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_MOVIES_BY_SEARCH:
      return {
        ...state,
        movies: [action.movies],
        search: action.search
      };
      case GET_MOVIES_BY_NAME:
        return {
          ...state,
          movies: [action.movies],
          name: action.name,
        };
    default:
      return state;
  }
}

export default movies;