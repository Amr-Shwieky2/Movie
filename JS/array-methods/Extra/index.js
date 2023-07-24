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
console.log(moviesByGenres(mockData)); 