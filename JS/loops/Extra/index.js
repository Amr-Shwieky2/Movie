const movies = [
    { name: "Movie 1", ratings: [5, 6, 7] },
    { name: "Movie 2", ratings: [8, 9, 9] },
    { name: "Movie 3", ratings: [6, 8, 8, 5, 7] }
  ];

  const averageRating = (movies,name) => {
 
    let average=0;  
    for(let i=0;i<movies.length;i++){
        if(movies[i].name ===name){
        for(let j=0;j<movies[i].ratings.length;j++)
            average+=movies[i].ratings[j]; 
        average/=movies[i].ratings.length;  
        }
    }
    return average; 
}
console.log(averageRating(movies,"Movie 3")); 

const highestRatedTitle = movies => {
    let maxRating=0; 
    let ans; 
    for(let i=0;i< movies.length; i++){
        let average=0;  
        for(let j=0;j<movies[i].ratings.length;j++)
            average+=movies[i].ratings[j]; 
        average/=movies[i].ratings.length;
        if(average > maxRating){
        ans=movies[i];
        maxRating=average; 
        }
    }
    return ans; 
}

// console.log(highestRatedTitle(movies))

const mostRating = movies => { 
    let ans; 
    let mostRatings=0; 
    for(let i=0;i<movies.length;i++){
         if(movies[i].ratings.length > mostRatings )
         ans=movies[i]; 
         mostRatings=movies[i].ratings.length; 
    }
    return ans; 
}
console.log(mostRating(movies))

const removeLowestRating = (movies,name) => {
    let index=0; 
    for(let i=0;i<movies.length;i++)
        if(movies[i].name === name)
            index=i; 
        
    let ans=[]; 
    let lowest =10; 
    for(let i=0;i<movies[index].ratings.length;i++)
        if(movies[index].ratings[i] < lowest)
        lowest = movies[index].ratings[i];
    for(let i=0;i<movies[index].ratings.length;i++)
        if(movies[index].ratings[i] !==  lowest )
            ans.push(movies[index].ratings[i]); 
    return { 
        ...movies[index], 
        ratings: ans
    }
}
console.log(removeLowestRating(movies, "Movie 3"));

const histogramRating = (movies, name)=> { 
    let movieRate={}; 
    for(let i=0;i<movies.length;i++)
        if(movies[i].name === name){
            for(let j=0;j<movies[i].ratings.length;j++){
                if(movieRate[movies[i].ratings[j]])
                movieRate[movies[i].ratings[j]]++;
                else movieRate[movies[i].ratings[j]]=1; 
        }
    }
    return movieRate; 

}
console.log(histogramRating(movies,"Movie 3"))