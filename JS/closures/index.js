function createMovie(movieTitle){ 
    const ratings=[];

    return {
        movieTitle,
        addRating : (rating)=> {
            if(ratings.length < 10) ratings.push(rating); 
            else return "Maximum number of ratings reached";
        },
        getAverageRating : ()=>{
            return ratings.reduce((acc,curr)=> acc+curr,0)/ratings.length; 
        }
    }
  }

function createMovieWithDetails (movieTitle, director , releaseYear){
    let ratings=[]; 
    return {
        movieTitle, 
        getDetails : ()=>{
            return `movie: ${movieTitle},director: ${director},year: ${releaseYear}`; 
        }, 
        addRating : (rating)=> {
            if(ratings.length < 10) 
            ratings.push(rating); 
            else console.log("Maximum number of ratings reached");
        },
        getAverageRating : ()=>{
            if(ratings.length === 0 ) return 0; 
            else return ratings.reduce((acc,curr)=> acc+curr,0)/ratings.length; 
        }
    }
}
function createMovieDatabase(){
    let movies =[]; 
    return {
        addMovie :(title,director,year)=> movies.push(createMovieWithDetails(title,director,year)), 
        printMovies: ()=> {movies.map(movie => console.log(movie.getDetails()))},
        findMovieByTitle :(title) => {
            for(movie of movies){
                if(movie.movieTitle === title)
                return movie; 
            }
        }, 
        getAverageRatingOfAllMovies : ()=>{
            return movies.reduce((acc,curr)=> acc + curr.getAverageRating(),0)/movies.length; 
        }
    }

}


// Usage example:
// Create a movie with details
let titanic = createMovieWithDetails("Titanic", "James Cameron", 1997);
console.log(titanic.getDetails());
// Output: { title: 'Titanic', director: 'James Cameron', year: 1997 }

// Adding ratings to the movie
titanic.addRating(8);
titanic.addRating(9);
titanic.addRating(7);
console.log(titanic.getAverageRating());
// Output: 8

// Attempting to add more than 10 ratings to the movie
for (let i = 0; i < 11; i++) {
  titanic.addRating(7);
}
// Output: "Maximum number of ratings reached!"

// Create a movie database
let myDatabase = createMovieDatabase();

// Add movies to the database
myDatabase.addMovie("Titanic", "James Cameron", 1997);
myDatabase.addMovie("Inception", "Christopher Nolan", 2010);
myDatabase.printMovies(); 

// Find a movie in the database
let foundMovie = myDatabase.findMovieByTitle("Titanic");
console.log(foundMovie.getDetails());
// Output: { title: 'Titanic', director: 'James Cameron', year: 1997 }

// Calculate the average rating of all movies in the database
console.log(myDatabase.getAverageRatingOfAllMovies());
// Output: 0, as no ratings have been added yet to the movies in the database