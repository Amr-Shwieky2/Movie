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


const barbie = new Movie("barbie",90,"greta", "comdey"); 
// barbie.addRating(5); 
const got = new Series("game of thrones",60, "8"); 
const breakingBad = new Series("breaking bad",60, "5"); 

const mahmoud=new User("mahmoud"); 
mahmoud.addMedia(barbie); 
mahmoud.addMedia(got); 
mahmoud.addMedia(breakingBad); 
console.log(mahmoud.rateMedia(barbie,7));
// console.log(barbie.calculateAverageRating())
console.log(mahmoud.displayWatchedMedia());


