const createMovieWithDetails = (moviesTitle, directorsName, year) => {
    let ratings = []
    const getDetails = () => {
        return {"title": moviesTitle, "director": directorsName, "year": year};
    };

    const addRating = (rating) => {
        if (ratings.length <= 10){
            ratings.push(rating);
        } else{
           console.log("Maximum number of ratings reached!"); 
        }
    };

    const getAverageRating = () => {
        sum = 0;
        for(let rat = 0; rat < ratings.length; rat++){
            sum += ratings[rat];
        }
        if(sum == 0){
            return 0
        }
        return sum / ratings.length;
    };
    
    const getMovieTitle = () => {
        return moviesTitle;
    };
    // const getRatings = () => {
    //     return ratings;
    // } 

    return {getDetails, addRating, getAverageRating, getMovieTitle};
}


const createMovieDatabase = () => {
    let movies = []

    const addMovie = (moviesTitle, directorsName, year) => {
        let functionOfMoves = createMovieWithDetails(moviesTitle, directorsName, year);
        movies.push(functionOfMoves)
    };

    const findMovieByTitle = (moviesTitle) => {
        for(let mov = 0; mov < movies.length; mov++){
            if(moviesTitle == movies[mov].getMovieTitle()){
                return movies[mov];
            }
        }  
    };

    const getAverageRatingOfAllMovies = () => {
        let totalAverage = 0
        for(let mov = 0; mov < movies.length; mov++){
            totalAverage += movies[mov].getAverageRating()
        }
        return totalAverage / movies.length
    }
    
    
    return {addMovie, findMovieByTitle, getAverageRatingOfAllMovies}
}

