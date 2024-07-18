"use server"

export async function getMovies(category){
    const res = await fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=${process.env.API_KEY}`);
    const data = await res.json()
    // console.log(data)
    return data;
}
