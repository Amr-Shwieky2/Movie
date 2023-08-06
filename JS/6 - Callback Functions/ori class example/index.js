
const movie1 = {
  id: 2,
  title: "Movie title 1",
  genres: ["Genre1", "Genre2"],
  ratings: [8, 7, 10]
};

const movie2 = {
  id: 3,
  title: "Movie title 2",
  genres: ["Genre1", "Genre2"],
  ratings: [8, 7, 10]
};

const movie3 = {
  id: 5,
  title: "Movie title 3",
  genres: ["Genre1", "Genre2"],
  ratings: [8, 7, 10]
};

const movie4 = {
  id: 5,
  title: "Movie title 4",
  genres: ["Genre1", "Genre2"],
  ratings: [8, 7, 10]
};
const movie = {
  id: 2,
  title: "Movie title 1",
  genres: ["Genre1", "Genre2"],
  ratings: [8, 7, 10]
};
const moviesArr = [movie1, movie2, movie3, movie4]

function processMovies(movies, cb) {
  if (!Array.isArray(movies)) {
    throw new Error('Expected an array');
  }

  const newMovies = JSON.parse(JSON.stringify(movies));

  for (let i = 0; i < newMovies.length; i++) {
    if (newMovies[i].hasOwnProperty('title') && newMovies[i].hasOwnProperty('genres') && newMovies[i].hasOwnProperty('ratings')) {

      newMovies[i] = cb(newMovies[i]);
    } else {
      throw new Error('Movie is not in the right structure');
    }
  }

  return newMovies;
}

const newMovies = processMovies(moviesArr, (movie) => {
  return {
    ...movie,
    title: movie.title.toUpperCase(),
    reviews: []
  }
})

console.log(moviesArr)
console.log('---------------------------')
console.log(newMovies)

function processMovie(movie, cb) {
  if (typeof movie !== "object") {
    throw new Error('Expected a movie object');
  }

  if (movie.hasOwnProperty('title') && movie.hasOwnProperty('genres') && movie.hasOwnProperty('ratings')) {
    const newMovie = JSON.parse(JSON.stringify(movie));

    return cb(newMovie);
  } else {
    throw new Error('Movie is not in the right structure');
  }
}

function addReviewsArr(movie) {
  return {
    ...movie,
    reviews: []
  };
}

const processedMovie = processMovie(movie, addReviewsArr);
