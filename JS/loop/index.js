// Mock data for Exercise 1: Calculate Average Ratings
const moviesAverageRatingsData = [
    { title: "Movie 1", ratings: [8, 7, 9] },
    { title: "Movie 2", ratings: [6, 8, 7] },
    { title: "Movie 3", ratings: [9, 9, 10] },
  ];
  
  // Mock data for Exercise 2 and 5
  const moviesTopRatedData = [
    { title: "Movie 1", rating: 8 },
    { title: "Movie 2", rating: 7 },
    { title: "Movie 3", rating: 9 },
  ];
  
 // Mock data for Exercise 3: Create Rating Matrix
 const moviesRatingMatrixData = [
    { title: "Movie 1", ratings: [8, 7, 9] },
    { title: "Movie 2", ratings: [6, 8, 7] },
  ];
  
  

// =====================1=============================
function AverageRatings(movies)
{
    let counter = 0;
    let lst = [];
    for(let movie = 0; movie < movies.length; movie++)
    {
        for(let i = 0; i < movies[movie].ratings.length; i++)
        {
            counter += movies[movie].ratings[i];
        }
        lst.push(counter / movies[movie].ratings.length);
        counter = 0;
    }
    return lst;
}


// =======================2==========================
function TopRated(movies)
{
    let maxRatings = 0 
    for(let i = 1; i < movies.length; i++)
    {
        if (movies[i].rating > movies[maxRatings].rating)
        {
            maxRatings = i
        }
    }
    return movies[maxRatings].title
}

 
// ===================3============================= //qs
function RatingMatrix(movies) {
    let matrix = [];
    for (let i = 0; i < movies.length; i++) {
      let row = [];
      for (let j = 0; j < movies[i].ratings.length; j++) {
        row.push(movies[i].ratings[j]);
      }
      matrix.push(row);
    }
    return matrix;
  }
  
// ======================4=========================
function CountMovies(movies, threshold){
    let counter = 0; 
    for(let i = 0; i < movies.length; i++)
    {
        if (movies[i].rating >= threshold)
        {
            counter++;
        }
    }
    return counter 

}

// Mock data for Exercise 4: Find Common Genres
const moviesCommonGenresData = [
    { title: "Movie 1", genres: ["Action", "Drama"] },
    { title: "Movie 2", genres: ["Drama", "Romance"] },
    { title: "Movie 3", genres: ["Action", "Thriller"] },
  ];
// ====================5===========================
function SpecificGenre(movies, genre){
    let MovieArray = []
    for(let i = 0; i < movies.length; i++){
        for( let j = 0; j < movies[i].genres.length; j++){
            if (movies[i].genres[j] == genre){
                MovieArray.push(movies[i].title)
            }
        }
    }
    return MovieArray

}
console.log(SpecificGenre(moviesCommonGenresData, "Romance"));
