function convertToUpperCase(movie, callback) {
  if (!movie.genre) {
    console.log("This movie doesn't have a genre");
  } else {
    movie.genre = callback(movie.genre);
    console.log(movie);
  }
}
const movie1 = {
  title: "Movie 1",
  genre: "action",
  rating: 8,
  description: "An exciting action thriller",
  ratings: [7, 8, 9],
};
//   convertToUpperCase(movie1, genre => genre.toUpperCase())

function ratingIsNumber(movie, callBack) {
  return callBack(movie);
}

// console.log(
//     ratingIsNumber(movie1, (movie) => {
//       return typeof(movie.rating) === "number"
//         ? `${movie.title} has a numerical rating of ${movie.rating}`
//         : `${movie.title} doesn't have a numerical rating!`;
//     })
//   );

function addExclamationToMovieTitle(movie, callback) {
  movie.title = callback(movie);
  // console.log(movie);
}

addExclamationToMovieTitle(movie1, (movie) => {
  return movie.title + "!";
});

function ReverseWordsInMovieDescription(movie, callBack) {
  movie.description = callBack(movie);
  console.log(movie);
}
// ReverseWordsInMovieDescription(movie1, (movie) => {
//   return movie.description.split(" ").reverse().join(" ");
// });

const arr = [1, 2, 3, 4];

const mulByTwo = (num) => num * 2;

const newArr = arr.map(mulByTwo);

// console.log(newArr)

const movie2 = JSON.stringify(movie1);

const moviesArr = [
  {
    id: 1,
    title: "movie 1 ",
    genre: "action",
    rating: 8,
    description: "An exciting action thriller",
    ratings: [7, 8, 9],
  },
  {
    id: 1,
    title: "movie 1 ",
    genre: "action",
    rating: 8,
    description: "An exciting action thriller",
    ratings: [7, 8, 9],
  },
  {
    id: 2,
    title: "movie 2 ",
    genre: "action",
    rating: 8,
    description: "An exciting action thriller",
    ratings: [7, 8, 9],
  },
  {
    id: 3,
    title: "movie 3 ",
    genre: "action",
    rating: 8,
    description: "An exciting action thriller",
    ratings: [7, 8, 9],
  },
  {
    id: 4,
    title: "movie 4 ",
    genre: "action",
    rating: 8,
    description: "An exciting action thriller",
    ratings: [7, 8, 9],
  },
];

const processMovies = (movies, callBackFun) => {
  if (!Array.isArray(movies)) {
    throw new Error("expected an array");
  }
  const newMovies = JSON.parse(JSON.stringify(movies));

  for (movie of newMovies) {
    if (
      movie.hasOwnProperty("title") &&
      movie.hasOwnProperty("genre") &&
      movie.hasOwnProperty("ratings")
    ) {
      movie = callBackFun(movie);
    } else {
      throw new Error("movie is not the right structure");
    }
  }
  return newMovies ;
};
// const processMovie = (movie, callBackFun) => {
//   if (typeof movie != Object) {
//     // throw new Error("expected a movie object");
//   }
//   if (
//     movie.hasOwnProperty("title") &&
//     movie.hasOwnProperty("genre") &&
//     movie.hasOwnProperty("ratings")
//   ) {
//     const newMovie = JSON.parse(JSON.Stringify(movie1));
//     return callBackFun(newMovie);
//   } else {
//     throw new Error("movie is not the right structure");
//   }
// };

const getMovieName = (movie) => movie.title;
// const processedMovie = processMovie(movie1, getMovieName);


const addReviews = (movie) => {
  return { ...movie, reviews: [] };
};

const newMovies = processMovies(moviesArr, (movie) => {
  return {
    ...movie,
    title: movie.title.toUpperCase(),
    reviews: []
  }
})

console.log(moviesArr, newMovies)
/////////////////////// refernce type
// const movie3= movie1 ;
// movie3.title= "kariiiiin";
// console.log(movie1)

// const arr2 = arr ;
// arr2.push(5)
// console.log(arr,arr2) ;
