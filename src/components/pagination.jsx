// import React, { useEffect, useState } from 'react';
// import { useDispatch, connect, shallowEqual, useSelector } from "react-redux";
// import { getMoviesBySearchThunk, getAllMoviesThunk } from '../actions';


// function Pagination({search}) {
//   let i = 1;
//   const dispatch = useDispatch();
//   const [moviesLoaded, setMovies] = useState([])

//   const { movies } = useSelector(state => ({
//     movies: state.exhibitions.movies,
//     actor: state.exhibitions.actor,
//     search: state.exhibitions.search,
//     }), shallowEqual);

//   const [page, setPage] = useState(1);

//   useEffect(() => {
//     setMovies(movies)
//   }, [movies])

//   const handleClick = ({ target }) => {
//     setPage(target.value);
//   };

//   const getPages = () => {
//     while (i < movies[0].totalPages) {
//       return (
//         <nav aria-label="Page navigation">
//           <ul class="pagination justify-content-center">
//             <li class="page-item"><button class="page-link" onClick={ (page) => console.log(page) }>{i}</button></li>
//           </ul>
//         </nav>
//       )
//     }
//   }

//   const handleSearch = (event) => {
//     event.preventDefault();
//     if(!search.typedValue){
//       dispatch(getAllMoviesThunk());
//     }
//     else dispatch(getMoviesBySearchThunk(encodeURIComponent(search), page));
//   };

//   return (
//     <div>
//         {
//           moviesLoaded.length && getPages()
//         }
//     </div>
//   );
// }

// const mapStateToProps = (state) => ({
//   movies: state.exhibitions.movies,
// })

// export default connect(mapStateToProps)(Pagination);
