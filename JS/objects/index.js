const movieDatabase = {
    movies: [{title: "oppenhimer", ratings :[4,7,6], averageRating:5.3}], 
    addMovie: function(movieTitle){
        this.movies.push({ title: movieTitle, ratings: [], averageRating: 0});  
    },
    removeMovie: (movieTitle) => { 
        this.movies= this.movies.filter(movie => movieTitle !== movie.title); 
    }, 
    addRating : (movieTitle, rating) => { 
        console.log(this.movies1);
        for(let movie of this.movies){
            if(movie.title[i] === movieTitle)
                movie.ratings[i].push(rating); 
        }
        this.averageRating(movieTitle); 
    },
    removeRating: (movieTitle, rating) => { 
        for(let movie of this.movies)
            if(movie.title === movieTitle){
            const index=movie.ratings.indexOf(rating); 
            movie.ratings.splice(index, 1);
            }
        this.averageRating(movieTitle); 
    },
    averageRating: (movieTitle) => {
        for(let movie of this.movies)
            if(movie.title === movieTitle){
                movie.averageRating=0; 
                for(let rate of movie.ratings)
                    movie.averageRating+=rate; 
                movie.averageRating/=movie.ratings.length; 
                }
    },
    searchMovie : (query) => {
        let answer=[]; 
        for(let movie of this.movies){
            if(movie.title.toLowerCase().includes(query))
            answer.push(movie); 
        }
        return answer;
    },
    sortMoviesByRating: () => {
        for(let i=0 ; i< this.movies.length-1;i++){
            for(let j=i+1 ; j< this.movies.length;j++){
                if(this.movies[i].averageRating < this.movies[j].averageRating )
                    [this.movies[i] , this.movies[j]]= [this.movies[j], this.movies[i]]; 
                else if(this.movies[i].averageRating === this.movies[j].averageRating)
                        if(this.movies[i].title.toLowerCase() > this.movies[j].title.toLowerCase())
                            [this.movies[i] , this.movies[j]]= [this.movies[j], this.movies[i]];
            }
        }
    }, 
    sortMoviesByTitle: () => { 
        for(let i=0 ; i< this.movies.length-1;i++)
            for(let j=i+1 ; j< this.movies.length;j++)
                if(this.movies[i].title.toLowerCase() > this.movies[j].title.toLowerCase()){
                    [this.movies[i] , this.movies[j]]= [this.movies[j], this.movies[i]]; 
                }
    }
}; 
// console.log(movieDatabase.movies);
movieDatabase.addMovie("The Godfather");
movieDatabase.addRating("The Godfather", 9);
movieDatabase.addRating("The Godfather", 10);
movieDatabase.addRating("The Godfather", 9);

movieDatabase.addMovie("The Shawshank Redemption");
movieDatabase.addRating("The Shawshank Redemption", 9);
movieDatabase.addRating("The Shawshank Redemption", 10);
movieDatabase.addRating("The Shawshank Redemption", 8);

movieDatabase.addMovie("Pulp Fiction");
movieDatabase.addRating("Pulp Fiction", 8);
movieDatabase.addRating("Pulp Fiction", 9);
movieDatabase.addRating("Pulp Fiction", 8);

movieDatabase.addMovie("The Empire Strikes Back");
movieDatabase.addRating("The Empire Strikes Back", 9);
movieDatabase.addRating("The Empire Strikes Back", 8);
movieDatabase.addRating("The Empire Strikes Back", 10);

movieDatabase.addMovie("banana");


movieDatabase.addMovie("The Dark Knight");
movieDatabase.addRating("The Dark Knight", 9);
movieDatabase.addRating("The Dark Knight", 10);
movieDatabase.addRating("The Dark Knight", 8);

movieDatabase.addMovie("Inception");
movieDatabase.addRating("Inception", 8);
movieDatabase.addRating("Inception", 8);
movieDatabase.addRating("Inception", 9);

// console.log(movieDatabase.searchMovie("the")); // Search for movies with "the" in the title
// console.log(movieDatabase.movies); // Log the full database
movieDatabase.sortMoviesByRating(); // Sort the movies by rating
// console.log(movieDatabase.movies); // Log the sorted database
movieDatabase.sortMoviesByTitle(); // Sort the movies by title
movieDatabase.removeMovie("banana"); // Sort the movies by title
movieDatabase.removeMovie("oppenhimer"); // Sort the movies by title
// console.log(movieDatabase.movies); // Log the sorted database