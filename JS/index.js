const moviesAverageRatingsData = [
    { title: "Movie 1", ratings: [8, 7, 9] },
    { title: "Movie 2", ratings: [6, 8, 7] },
    { title: "Movie 3", ratings: [9, 9, 10] },
  ];

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
  

