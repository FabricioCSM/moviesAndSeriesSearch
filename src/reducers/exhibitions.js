import { GET_MOVIES_BY_SEARCH, GET_MOVIES_BY_NAME, GET_ALL_MOVIES } from "../actions";

const INITIAL_STATE = {
  movies: [],
  name: '',
  search: '',
  actor: '',
}

const movies = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_MOVIES:
      return {
        ...state,
        movies: [action.movies],
      };
    case GET_MOVIES_BY_SEARCH:
      return {
        ...state,
        movies: [action.movies],
        actor: action.actor
      };
      case GET_MOVIES_BY_NAME:
        return {
          ...state,
          movies: [action.movies],
          search: action.search,
        };
    default:
      return state;
  }
}

export default movies;