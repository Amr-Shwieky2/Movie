const movies = [
    { title: 'Inception', averageRating: 8.8, length: 148 },
    { title: 'Interstellar', averageRating: 8.6, length: 169 },
    { title: 'The Dark Knight', averageRating: 9.0, length: 152 },
    { title: 'Tenet', averageRating: 7.4, length: 150 },
    { title: 'The Prestige', averageRating: 8.5, length: 130 }
  ];
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
   