"use server"

export async function getDetails(id){
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`);
    const data = await res.json();
    return data
}

export async function getImages(id){
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.API_KEY}`);
    const data = await res.json();
    return data
}


export async function getCredits(id){
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.API_KEY}`);
    const data = await res.json();
    return data
}

export async function getSimilar(id){
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.API_KEY}`);
    const data = await res.json();
    return data
}