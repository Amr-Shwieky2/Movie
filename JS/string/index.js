// Relevant to string exercises 3, 4, 5, 6
// Relevant to string exercises 4, 5, 6, 7
let movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    genre: "Drama",
    director: "Frank Darabont",
    releaseYear: 1994,
    rating: 9.3,
    votes: 2345890,
  },
  {
    id: 2,
    title: "The Godfather",
    genre: "Crime, Drama",
    director: "Francis Ford Coppola",
    releaseYear: 1972,
    rating: 9.2,
    votes: 1620360,
  },
  {
    id: 3,
    title: "The Godfather: Part II",
    genre: "Crime, Drama",
    director: "Francis Ford Coppola",
    releaseYear: 1974,
    rating: 9.0,
    votes: 1133175,
  },
  {
    id: 4,
    title: "The Dark Knight",
    genre: "Action, Crime, Drama",
    director: "Christopher Nolan",
    releaseYear: 2008,
    rating: 9.0,
    votes: 2303232,
  },
  {
    id: 5,
    title: "12 Angry Men",
    genre: "Crime, Drama",
    director: "Sidney Lumet",
    releaseYear: 1957,
    rating: 9.0,
    votes: 689845,
  },
];
//====================="1"=======================
function toTitleCase(title) {
    const words = title.split(" ");
    return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
}

//======================"2"======================
function searchMovies(inventory, query){
      return inventory.filter(n => n.includes(query));
} 

//========================"3"====================
function formatDirectorName(name){
    const newName = name.split(",");
    return newName[1], newName[0].join(" ");
}


//=========================="4"==================
function parseDuration(duration){
    const [hours, minutes] = duration.split(" ");
    return { hours: parseInt(hours), minutes: parseInt(minutes) };
}

//======================="5"=====================
function  getMovieInitials(title){
  const words = title.split(" ");
  return words.map(word => word.charAt(0)).join("")
}

//======================="6"=====================
function getCharacterDetails(movie){
    return `${movie.title}, director by ${movie.director}, genre: ${movie.genre}`;
}

//======================="7"=====================
function createSlug(location){
    const words = location.split(" ");
    return words.map(word => word.charAt(0).toLowerCase()+ word.slice(1)).join("-")
}
//======================="8"=====================
function trimSynopsis(description, maxLength){ 
    return description.substring(0, maxLength) + "...";
}

//======================="9"=====================
function splitGenres(genres){
    return genres.split(",");
}

//======================="10"=====================
function decodeQuote(quote){
  const mapping = { '1': 'i', '2': 'b', '3': 'e', '4': 'a', '5': 'e' };
 
  return quote.replace(/[1-5]/g, (matched) => mapping[matched]);
}