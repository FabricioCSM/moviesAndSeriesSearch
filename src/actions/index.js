export const SIGN_INFO = "SIGN_INFO";
export const GET_MOVIES_BY_SEARCH = "GET_MOVIES_BY_SEARCH";
export const GET_MOVIES_BY_NAME = "GET_MOVIES_BY_NAME";

export function signUser(email, password) {
  return {
    type: SIGN_INFO,
    email,
    password,
  };
};

export function getMovies(movies) {
  return {
    type: GET_MOVIES_BY_SEARCH,
    movies,
  };
}

export function getMoviesByName(movies, name) {
  return {
    type: GET_MOVIES_BY_NAME,
    movies,
    name,
  }
}

export const getMoviesBySearchThunk = (search) => (dispatch) => (
  fetch(`https://imdb-data-searching.p.rapidapi.com/om?s=${search}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "imdb-data-searching.p.rapidapi.com",
      "x-rapidapi-key": "b19a964cafmsh62a3c8356170df6p12d7fdjsn0bf25e356dd6"
  }
}).then((response) => (
  response.json()
    .then((json) => dispatch(getMovies(json)))
))
  .catch(err => {
    console.error(err);
  })
)

export const getMoviesByNameThunk = (name) => (dispatch) => (
  fetch("https://imdb-data-searching.p.rapidapi.com/om?t=Game%20of%20Thrones", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "imdb-data-searching.p.rapidapi.com",
		"x-rapidapi-key": "b19a964cafmsh62a3c8356170df6p12d7fdjsn0bf25e356dd6"
	}
}).then((response) => (
  response.json()
    .then((json) => dispatch(getMoviesByName(json, name)))
))
  .catch(err => {
    console.error(err);
  })
)
