// const moviesAverageRatingsData = [
//     { title: "Movie 1", ratings: [8, 7, 9] },
//     { title: "Movie 2", ratings: [6, 8, 7] },
//     { title: "Movie 3", ratings: [9, 9, 10] },
//   ];

const averageRating = movies => {
    let averageRate=[]; 
    for(let i=0;i<movies.length;i++){
        let average=0; 
        for(let j=0;j<movies[i].ratings.length;j++)
            average+=movies[i].ratings[j]; 
        average/=movies[i].ratings.length;
        averageRate.push(average);  

    }
    return averageRate; 
}

// console.log(averageRating(moviesAverageRatingsData)); 

// Mock data for Exercise 2 and 5
const moviesTopRatedData = [
    { title: "Movie 1", rating: 8 },
    { title: "Movie 2", rating: 7 },
    { title: "Movie 3", rating: 9 },
  ];

const highestRatedTitle = movies => {
    let title=""; 
    let maxRating=0; 
    for(let i=0;i< movies.length; i++){
        if(movies[i].rating > maxRating){
            maxRating=movies[i].rating; 
            title=movies[i].title;
        }
    }
    let answer=[]; 
    answer.push(title);
    return answer; 
}
// console.log(highestRatedTitle(moviesTopRatedData));

// Mock data for Exercise 3: Create Rating Matrix
const moviesRatingMatrixData = [
    { title: "Movie 1", ratings: [8, 7, 9] },
    { title: "Movie 2", ratings: [6, 8, 7] },
  ];

const ratingMatrix = movies => { 
    let matrix=[]; 
    for(let i=0;i<movies.length;i++){
        matrix[i]=[]; 
        for(let j=0;j<movies[i].ratings.length;j++)
            matrix[i][j]= movies[i].ratings[j]; 
    }
    return matrix; 
}

  
// console.log(ratingMatrix(moviesRatingMatrixData));  
 
// Mock data for Exercise 4: Find Common Genres
const moviesCommonGenresData = [
    { title: "Movie 1", genres: ["Action", "Drama"] },
    { title: "Movie 2", genres: ["Drama", "Romance"] },
    { title: "Movie 3", genres: ["Action", "Thriller"] },
  ];


  const rateAboveThreshold = (movies,threshold) => { 
    let count =0;
    for(let i=0;i<movies.length;i++){ 
        if(movies [i].rating >= threshold)
        count++; 
    }
    return count; 
  }
//   console.log(rateAboveThreshold(moviesTopRatedData, 8))

const findGenre = (movies,genre) =>{ 
    for(let i=0;i<movies.length;i++){ 
        for(let j=0;j<movies[i].genres.length;j++)
        if(movies[i].genres[j] === genre )
        return movies[i]; 
    }
} 
console.log(findGenre(moviesCommonGenresData, "Romance")); 

const ratingChart = movies => { 
    let movieChart=[]; 
    for(let i=0;i<movies.length;i++){ 
        let chart="";
        for(let j=0;j<movies[i].rating;j++)
            chart+="*"; 
        movieChart.push(`${movies[i].title}: ${chart}`); 
    }
    return movieChart; 
}


console.log(ratingChart(moviesTopRatedData)); 

