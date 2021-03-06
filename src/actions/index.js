export const SIGN_INFO = "SIGN_INFO";
export const GET_MOVIES_BY_ACTOR = "GET_MOVIES_BY_ACTOR";
export const GET_MOVIES_BY_SEARCH = "GET_MOVIES_BY_SEARCH";
export const GET_ALL_MOVIES = "GET_ALL_MOVIES";

export function signUser(email, userName) {
  return {
    type: SIGN_INFO,
    email,
    userName,
  };
};

export function getAllMovies(movies) {
  return {
    type: GET_ALL_MOVIES,
    movies,
  };
}

export function getMoviesByActor(movies, actor) {
  return {
    type: GET_MOVIES_BY_ACTOR,
    movies,
    actor,
  };
}

export function getMoviesBySearch(movies, search) {
  return {
    type: GET_MOVIES_BY_SEARCH,
    movies,
    search,
  }
}

export const getAllMoviesThunk = (page) => (dispatch) => (
  fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=076484b68a1717d75a2f3c8d13f5c019&language=pt-BR&page=${page}`).then((response) => (
  response.json()
    .then((json) => dispatch(getAllMovies(json)))
))
  .catch(err => {
    console.error(err);
  })
)

export const getMoviesByActorThunk = (actor) => (dispatch) => (
  fetch(`https://api.themoviedb.org/3/search/person?api_key=076484b68a1717d75a2f3c8d13f5c019&language=pt-BR&query=${actor}&page=1&include_adult=false`).then((response) => (
  response.json()
    .then((json) => {
      dispatch(getMoviesByActor(json))
    })
))
  .catch(err => {
    console.error(err);
  })
)

export const getMoviesBySearchThunk = (searchEncoded) => (dispatch) => (
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=076484b68a1717d75a2f3c8d13f5c019&language=pt-BR&query=${searchEncoded}&page=1&include_adult=false`).then((response) => (
  response.json()
    .then((json) => {
      dispatch(getMoviesBySearch(json))
    })
))
  .catch(err => {
    console.error(err);
  })
)

