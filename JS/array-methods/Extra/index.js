const mockData = [
    {
      title: "Movie1",
      rating: 8.5,
      genre: "Drama",
      director: "Director1",
      votes: 10000,
      year: 2000
    },
    {
      title: "Movie2",
      rating: 9.5,
      genre: "Action",
      director: "Director2",
      votes: 15000,
      year: 2005
    },
    {
      title: "Movie3",
      rating: 7.5,
      genre: "Drama",
      director: "Director1",
      votes: 20000,
      year: 2010
    }
  ];

const moviesByGenres = movies =>{
    let genres={}; 
    for(let movie of movies){
        if (genres[movie.genre])
        genres[movie.genre].push(movie); 
        else {
        genres[movie.genre]=[];
        genres[movie.genre].push(movie)
        }
    }
    return genres; 
}

// console.log(moviesByGenres(mockData)); 

const highestRate = movies =>{
    let genres={};
    let maxRate=0; 
    for(let movie of movies){
        if (genres[movie.genre]){
            if(movie.rating > maxRate ){
                maxRate=movie.rating; 
                genres[movie.genre]=movie; 
            }
        }
        else {
        genres[movie.genre]=movie; 
        maxRate=movie.rating; 
        }
    }
    return genres;
}
// console.log(highestRate(mockData));

const countGenres = movies => {
        let genres={}; 
        for(let movie of movies){
            if (genres[movie.genre])
            genres[movie.genre]++; 
            else {
            genres[movie.genre]=1; 
            }
        }
        return genres; 
}
// console.log(countGenres(mockData)) 

const GenreByYear = (movies,genre) =>{
    let year={}; 
    for(let movie of movies){
        if (movie.genre === genre){
            if(year[movie.year]) year[movie.year]++;
            else year[movie.year]=1; 
        }   
    }
    return year; 
}
// console.log(GenreByYear(mockData,"Drama"));  

const moviesByRange = (movies , r1,r2)=> movies.filter(movie => {
    if(movie.rating >= r1 && movie.rating <=r2)
    return movie.title; 
 } );
//  console.log(moviesByRange(mockData,4,8)) ;  

const uniqueGenres = movies =>{
    let genres=[]; 
    for(let movie of movies)
        if (!genres.includes(movie.genre))
            genres.push(movie.genre); 
     
    return genres; 
}
//  console.log(uniqueGenres(mockData));  

const deepCopy = movies => movies.map(({title , rating ,genre ,director,votes, year}) => {
    return {title , rating, genre  , director ,votes ,year}; 
}
); 
 console.log(deepCopy(mockData));  
//  2. Find Highest Level Character
// Input: An array of character objects
// Task: Write a function that returns the character object with the highest level.
// Example:
const characters = [
    { name: 'John', level: 2 },
    { name: 'Jane', level: 5 }
   ];

   const findHighestLevelCharacter = (characters)=>{
        maxLevel = 0;
        for(let i=0; i < characters.length; i++){
            if(characters[i].level > maxLevel){
                maxLevel = characters[i].level
            }
        }

    return characters.filter(obj => obj.level === maxLevel)
   }
   console.log({"maxlevel": findHighestLevelCharacter(characters)}); // { name: 'Jane', level: 5 }
   















