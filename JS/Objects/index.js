const movieDatabase = {
    movies: [],
  
    addMovie: function(title) {
      const newMovie = {
        title: title,
        ratings: [],
        averageRating: 0
      };
  
      this.movies.push(newMovie);
    },
  
    removeMovie: function(title) {
      const index = this.movies.findIndex(movie => movie.title === title);
  
      if (index !== -1) {
        this.movies.splice(index, 1);
      }
    },
  
    addRating: function(title, rating) {
      const movie = this.movies.find(movie => movie.title === title);
  
      if (movie) {
        movie.ratings.push(rating);
        this.calculateAverageRating(movie);
      }
    },
  
    removeRating: function(title, rating) {
      const movie = this.movies.find(movie => movie.title === title);
  
      if (movie) {
        const index = movie.ratings.indexOf(rating);
        if (index !== -1) {
          movie.ratings.splice(index, 1);
          this.calculateAverageRating(movie);
        }
      }
    },
  
    // 2. Method to calculate the average rating for a movie
    calculateAverageRating: function(movie) {
      const totalRatings = movie.ratings.length;
      const sumRatings = movie.ratings.reduce((acc, rating) => acc + rating, 0);
      movie.averageRating = totalRatings > 0 ? sumRatings / totalRatings : 0;
    },
  
    // 3. Method to search for movies by title
    searchMovie: function(query) {
      query = query.toLowerCase();
      return this.movies.filter(movie => movie.title.toLowerCase().includes(query));
    },
  
    // 4. Method to sort movies by average rating in descending order
    sortMoviesByRating: function() {
      this.movies.sort((movieA, movieB) => {
        if (movieA.averageRating === movieB.averageRating) {
          // If two movies have the same average rating, sort alphabetically by title
          return movieA.title.localeCompare(movieB.title);
        } else {
          // Sort by average rating in descending order
          return movieB.averageRating - movieA.averageRating;
        }
      });
    },
  
    // 5. Method to sort movies by title in alphabetical order
    sortMoviesByTitle: function() {
      this.movies.sort((movieA, movieB) => movieA.title.localeCompare(movieB.title));
    }
  
  };
  

// Add movies to the database
movieDatabase.addMovie("The Lord of the Rings");
movieDatabase.addMovie("The Matrix");
movieDatabase.addMovie("Inception");
movieDatabase.addMovie("Interstellar");

// Add ratings to the movies
movieDatabase.addRating("The Lord of the Rings", 4);
movieDatabase.addRating("The Lord of the Rings", 5);
movieDatabase.addRating("The Matrix", 3);
movieDatabase.addRating("Inception", 5);
movieDatabase.addRating("Inception", 4);
movieDatabase.addRating("Interstellar", 4);

// Print all movies in the database
// console.log("All Movies:", movieDatabase.movies);

// // Search for movies containing the word "the"
// const searchResults = movieDatabase.searchMovie("The");
// console.log("Search Results:", searchResults);

// Sort movies by average rating in descending order
movieDatabase.sortMoviesByRating();
console.log("Sorted by Rating:", movieDatabase.movies);

// // Sort movies by title in alphabetical order
// movieDatabase.sortMoviesByTitle();
// console.log("Sorted by Title:", movieDatabase.movies);
