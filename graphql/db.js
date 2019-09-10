export let movies =[
    {
        id:0,
        name:"yeong",
        score: 1
    
    },
    {
        id:1,
        name:"yoon",
        score: 8
    
    },
    {
        id:2,
        name:"mee",
        score: 5
    
    }
];
export const getmovies=()=>movies;
export const getById = id => {
    const filteredPeople = movies .filter(movies  => movies .id === id);
    return filteredPeople[0];
 };
 export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movies => movies.id !== id); /*movies id와 다른 부분을 새로 집어 넣는 방법 */
    if (movies.length > cleanedMovies.length) {
      movies = cleanedMovies;
      return true;
    } else {
      return false;
    }
  };
export const addMovie=(name,score)=>{
    const newMovies={
        id:`${movies.length+1}`,
        name,
        score
    };
    movies.push(newMovies);
    return newMovies;
};