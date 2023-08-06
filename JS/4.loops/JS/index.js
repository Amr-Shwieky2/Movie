function clacAvg(arr) {
  let avgs = [];
  for (let i = 0; i < arr.length; i++) {
    const row = arr[i];
    let sum = 0;
    for (let j = 0; j < row.ratings.length; j++) {
      sum += row.ratings[j];
    }
    avgs[i] = sum / row.ratings.length;
  }
  return avgs;
}
// console.log(
//   clacAvg([
//     { title: "Movie 1", ratings: [8, 7, 9] },
//     { title: "Movie 2", ratings: [6, 8, 7] },
//     { title: "Movie 3", ratings: [9, 9, 10] },
//   ])
// );

function topRatedMovie(arr) {
  let top = [];
  let tr = 0;
  let movie = "";
  for (let i = 0; i < arr.length; i++) {
    arr[i].rating > tr ? ((tr = arr[i].rating), (movie = arr[i].title)) : "";
  }
  top.push(movie);
  return top;
}
// console.log(
//     topRatedMovie([
//     { title: "Movie 1", rating: 6 },
//     { title: "Movie 2", rating: 8},
//     { title: "Movie 3", rating: 7},
//   ])
// );

function ratingMatrix(arr) {
  let mat = [];
  for (let i = 0; i < arr.length; i++) {
    const movie = arr[i];
    //   let sum = 0;
    //   console.log(movie)
    mat[i] = movie.ratings;
    // mat[movie.title]= movie.ratings
    //   for (let j = 0; j < movie.ratings.length; j++) {
    //   //  sum += movie.ratings[j];
    //   console.log(movie.ratings[j])
    //   }
    // mat[i] = sum / row.ratings.length;
  }
  return mat;
}
//   console.log(
//     ratingMatrix([
//       { title: "Movie 1", ratings: [8, 7, 9] },
//       { title: "Movie 2", ratings: [6, 8, 7] },
//       { title: "Movie 3", ratings: [9, 9, 10] },
//     ])
//   );

const countMoivesWithARatingAboveTreshold = (moviesArr, trashold) => {
  let count = 0;
  moviesArr.map((movie) => {
    return (count += movie.rating >= trashold ? 1 : 0);
  });
  return count;
};
//   console.log(countMoivesWithARatingAboveTreshold([{ title: "Movie 1", rating: 8 }, { title: "Movie 2", rating: 7
// }, { title: "Movie 3", rating: 9 }],8));

const findFirstMovieWithASpecificGenre = (moviesArr, genres) => {
  for (movie of moviesArr) {
    for (gen of movie.genres) {
      if (gen === genres) {
        return movie;
      }
    }
  }
  return "";
};
// console.log(
//   findFirstMovieWithASpecificGenre([
//     { title: "Movie 1", genres: ["Action", "Drama"] },
//     { title: "Movie 2", genres: ["Drama", "Romance"] },
//     { title: "Movie 3", genres: ["Action", "Thriller"] },
//   ], "Romance")
// );

const drawMovieRatingChart = (moviesArr) => {
  for (const movie of moviesArr) {
    console.log(`${movie.title}: ${"*".repeat(movie.rating)}`);
  }
};
// drawMovieRatingChart([
//   { title: "Movie 1", rating: 8 },
//   { title: "Movie 2", rating: 7 },
//   { title: "Movie 3", rating: 9 },
// ]);

function clacAvgRatingForEachMovie(moviesArr) {
  let avgs = [];
  for (let i = 0; i < moviesArr.length; i++) {
    const movie = moviesArr[i];
    let sum = 0;
    for (let j = 0; j < movie.ratings.length; j++) {
      sum += movie.ratings[j];
    }
    avgs[i] = Math.round(sum / movie.ratings.length);
  }
  return avgs;
}
//   console.log(
//     clacAvgRatingForEachMovie([
//       { title: "Movie 1", ratings: [8, 7, 9] },
//       { title: "Movie 2", ratings: [6, 8, 7] },
//       { title: "Movie 3", ratings: [9, 9, 10] },
//     ])
//   );

function topRatedMovies(arr) {
  let top = [];
  let tr = 0;
  for (mov of arr) {
    let max = mov.ratings.reduce((max, current) => {
      return current > max ? current : max;
    }, 0);
    tr < max ? ((tr = max), top.push(mov.title)) : tr;
  }
  return top;
}
// console.log(
//   topRatedMovies([
//     { title: "Movie 1", ratings: [8, 7, 9] },
//     { title: "Movie 2", ratings: [6, 8, 7] },
//     { title: "Movie 3", ratings: [9, 9, 10] },
//   ])
// );
