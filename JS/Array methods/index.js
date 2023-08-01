const movies = [
    { title: "The Shawshank Redemption", rating: 9.3, votes: 2337890, genre: ["Drama"], year: 1994 },
    { title: "The Godfather", rating: 9.2, votes: 1603867, genre: ["Crime", "Drama"], year: 1972 },
    { title: "The Godfather: Part II", rating: 9.0, votes: 1123155, genre: ["Crime", "Drama"], year: 1974 },
    { title: "The Dark Knight", rating: 9.0, votes: 2273490, genre: ["Action", "Crime", "Drama"], year: 2008 },
    { title: "12 Angry Men", rating: 9.0, votes: 686888, genre: ["Crime", "Drama"], year: 1957 }
  ];
// ================1===============
function title_movies(movies)
{
    return movies.map(movie => movie.title);
}  

// ================2================
function RatedMovies(movies, rating)
{
    const moviesRating = movies.filter(movie => movie.rating >= rating)
    return moviesRating.map(movie => movie.title);
}
// ===============3================== //qs
function TotalVotes(movies)
{
    return movies.reduce((accumulator, movie)=> {
        return accumulator + movie.votes;
    }, 0)
}
// ==============4==================
function MovieTitlesRatings(movies)
{
    return movies.map(movie => `${movie.title} - ${movie.rating}`);
}

// ============5====================
function UpdateRatings(movies, movieTitle, NewRating)
{
    const movies_title = movies.filter(movie => movie.title == movieTitle)
    movies_title.rating = NewRating
    return movies_title.rating;
}
// =============6===================
function GenreFilter(movies, genre)
{
    const movies_genre = movies.filter(movie => movie.genre.includes(genre)  )
    return movies_genre.map(movie => movie.title)
}
// ============7====================
function YearlyMovie(movies, year)
{
    const moviesYear = movies.filter(movie => movie.year >= year)
    return moviesYear.map(movie => movie.title);
}

// ============8===================
function AverageRating(movies)
{
    return (movies.reduce((accumulator, movie)=> {
        return accumulator + movie.rating;
    }, 0)) /movies.length
}
// ===========9==================
function SortMovies(movies)
{
    movies_sorted = movies.sort((movie1, movie2) => movie1.votes - movie2.votes);
    return movies_sorted.map(movie => movie.title)
} 

