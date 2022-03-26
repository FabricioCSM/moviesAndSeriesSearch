// import React, { useContext, useEffect, useState } from 'react';
// import { useDispatch, connect, shallowEqual, useSelector } from "react-redux";
// import AppContext from "../context/AppContext";
// import { Pagination } from '';


// function PaginationRender() {
  
//   const { moviesLoaded } = useContext(AppContext)
//   const pagesNumber = [];

//   useEffect(() => {
//     getPages()    
//   }, [moviesLoaded])

//   function getPages() {
//     for(let page=1; page <= moviesLoaded[0].total_pages; page++ ) {
//       pagesNumber.push(

//       )
//     }
//   }
  
//   const paginationBasic = (
//     <div>
//       <Pagination count={10} variant="outlined" color="primary" />
//       <br />
//     </div>
//   );
  
//   function handleClickPage({target}) {
//     console.log(target.value)
//   }
  
//   return (
//     <div>
//       {paginationBasic}
//     </div>
//   );
// }

// const mapStateToProps = (state) => ({
//   movies: state.exhibitions.movies,
// })

// export default connect(mapStateToProps)(PaginationRender);
