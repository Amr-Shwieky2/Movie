const createMovieWithDetails = (moviesTitle, directorsName, releaseYear) => {
  return {
    movie: {
      title: moviesTitle,
      director: directorsName,
      year: releaseYear,
      ratings: [],
    },
    getDetails: function () {
      return {
        title: this.movie.title,
        director: this.movie.director,
        year: this.movie.year,
        ratings: this.movie.ratings,
      };
    },
    addRating: function (rating) {
      rating >= 1 && rating <= 15
        ? this.movie.ratings.length < 10
          ? this.movie.ratings.push(rating)
          : "Maximum number of ratings reached!"
        : "";
    },
    getAverageRating: function () {
      return this.movie.ratings.length > 0
        ? this.movie.ratings.reduce(
            (accumulator, rating) => accumulator + rating,
            0
          ) / this.movie.ratings.length
        : 0;
    },
  };
};

let titanic = createMovieWithDetails("Titanic", "James Cameron", 1997);
// console.log(titanic.getDetails());

titanic.addRating(8);
titanic.addRating(9);
titanic.addRating(7);

// console.log(titanic.getAverageRating());

for (let i = 0; i < 11; i++) {
  titanic.addRating(7);
}
//   console.log(titanic.getDetails());
//   console.log(titanic.getAverageRating());

const createMovieDatabase = () => {
  return {
    movies : [],
    addMovie: function (movieName,directorName,year) {
    let movie = createMovieWithDetails(movieName,directorName,year) ;
      this.movies.push(movie);
    },
    findMovieByTitle: function (movieTitle) {
      return this.movies.filter(movie => movie.movie.title === movieTitle)[0]
    },
    getAverageRatingOfAllMovies: function () {
        return this.movies.length > 0
        ? this.movies.reduce(
            (accumulator, movie) => accumulator + movie.getAverageRating(),
            0
          ) / this.movies.length
        : 0;
    },
  };
};

let myDatabase = createMovieDatabase();
myDatabase.addMovie("Titanic", "James Cameron", 1997);
myDatabase.addMovie("Inception", "Christopher Nolan", 2010);

let foundMovie = myDatabase.findMovieByTitle("Titanic");
// console.log("DB  ", myDatabase);
// console.log("DB  ", myDatabase.movies.map((movie)=>movie));
// console.log("FM   ",foundMovie.getDetails());
// foundMovie.addRating(5)
// console.log(myDatabase.getAverageRatingOfAllMovies());
