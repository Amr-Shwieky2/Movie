// =================1=================
const getMovies = movies =>  movies.map(movie => movie.title);

// ================2==================
const averageMovieRating = (rating) => 
    rating > 7 ?  "Good" : rating > 5 ? "Average" : "Bad";
    
// ================3================== 
const getTotalMovieLength = (movies) => movies.reduce((totalLength, movie) =>totalLength + movie.length ,0)

// ================4==================
const sortedMovies = (movies) => movies.sort((a, b) => b.averageRating - a.averageRating);

// ===============5===================
const getMovieTitles = (movies) => movies.map(movie => movie.title) 
   