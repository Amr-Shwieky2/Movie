class Media { 
    #ratings=[3,5,4]; 
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
        return `Title: ${this.title}, Duration: ${this.duration} minutes, ${this.calculateAverageRating()} .`; 
    }
}


const barbie = new Media("barbie",90); 
console.log(barbie.displayDetails());