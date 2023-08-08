class Media { 
    #ratings=[]; 
    constructor(title, duration){
        this.title=title; 
        this.duration=duration; 
    }

    addRating (rating){ 
        this.#ratings.push(rating); 
    }
    calculateAverageRating (){ 
        if(this.#ratings.length === 0) return "no ratings yet"
        return `Average Rating : ${((this.#ratings.reduce((acc,curr)=> acc+curr,0))/this.#ratings.length).toFixed(2)}`; 
    }
    displayDetails (){
        return `Title: ${this.title}, Duration: ${this.duration} minutes, ${this.calculateAverageRating()} `; 
    }
}
class Movie extends Media { 
    constructor(title, duration ,director, genre){
        super(title,duration); 
        this.director=director; 
        this.genre=genre; 
    }
    displayDetails(){
        return super.displayDetails() + `,Director: ${this.director}, Genre: ${this.genre}`; 
    }
}
class Series extends Media{ 
    constructor(title, duration ,seasons){ 
        super(title,duration); 
        this.seasons=seasons; 
    }
    displayDetails(){
        return super.displayDetails() + `,Seasons: ${this.seasons}`; 
    }
}
class User{ 
    constructor(username){ 
        this.username=username;
        this.watchedMedia =[]; 
    }
    addMedia (media){
        this.watchedMedia.push(media); 
        return this; 
    }
    rateMedia (media, rating){ 
        if(this.watchedMedia.includes(media)){
            media.addRating(rating);
            return "Rating added"; 
        }
        else return "You can only add a rating of the media you've watched"; 
    }
    displayWatchedMedia (){
        return this.watchedMedia.reduce((acc,curr)=> acc + "\n" + curr.displayDetails(),""); 
    }

}


// Create some media
console.log("Creating media");
const movie = new Movie("Inception", "2 hours 28 minutes", "Christopher Nolan", "Science fiction");
const series = new Series("Breaking Bad", "45 minutes per episode", 5);
console.log(movie.displayDetails());
console.log(series.displayDetails());

// Create a user
console.log("Creating user");
const user = new User("Alice");
console.log(`User: ${user.username}`);

// Add media to the user's watched list
console.log("Adding media to watched list");
user.addMedia(movie);
user.addMedia(series);
console.log(user.displayWatchedMedia());

// Rate some media
console.log("Rating media");
user.rateMedia(movie, 5);
user.rateMedia(series, 4);
console.log(user.displayWatchedMedia());

// Show average rating of media
console.log("Average Ratings");
console.log(movie.calculateAverageRating());
console.log(series.calculateAverageRating());

// Try to rate a media that the user hasn't watched
console.log("Try to rate unwatched media");
const unwatchedMovie = new Movie("Unwatched Movie", "2 hours", "Unknown Director", "Unknown Genre");
console.log(user.rateMedia(unwatchedMovie, 3));


