const movieDatabase = {
    movies : [{title: "the oppenhimer", ratings :[4,7,6], averageRating:5.3}], 
    addMovie: function(movieTitle){
        this.movies.push({ title: movieTitle, ratings: [], averageRating: 0}); 
        return this.movies; 
    },
    removeMovie: function(movieTitle){ 
        this.movies= this.movies.filter(movie => movieTitle !== movie.title); 
        return this.movies;
    }, 
    addRating : function(movieTitle, rating){ 
        for(let movie of this.movies)
            if(movie.title === movieTitle)
                movie.ratings.push(rating); 
        
        this.averageRating(movieTitle); 
    },
    removeRating: function(movieTitle, rating){ 
        for(let movie of this.movies){
            if(movie.title === movieTitle){
            const index=movie.ratings.indexOf(rating); 
            movie.ratings.splice(index, 1);
            }
        }
        this.averageRating(movieTitle); 
    },
    averageRating: function(movieTitle){
        for(let movie of this.movies)
            if(movie.title === movieTitle){
                movie.averageRating=0; 
                for(let rate of movie.ratings){
                    movie.averageRating+=rate; 
                }
                movie.averageRating=(movie.averageRating/movie.ratings.length).toFixed(2); 
                }
    },
    searchMovie : function(query){
        let answer=[]; 
        for(let movie of this.movies){
            if(movie.title.includes(query))
            answer.push(movie); 
        }
        return answer;
    }

    
}; 
movieDatabase.addMovie("The Godfather");
movieDatabase.addRating("The Godfather", 9);
movieDatabase.addRating("The Godfather", 10);
movieDatabase.addRating("The Godfather", 9);
movieDatabase.averageRating("The Godfather");
console.log(movieDatabase.searchMovie("the"))