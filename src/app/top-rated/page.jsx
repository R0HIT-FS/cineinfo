
import React from 'react'
import { getMovies } from '../action';
import MovieCard from '@/Components/MovieCard';

// const fetchMovies = async () => {
//   const res = getMovies();
//   const data = await res;
//   // console.log(data.results)

//   return {
//     props: {
//       movies: data.results
//     }
//   }
// }

const res = getMovies("top_rated");
const movies = await res;


const Home = () => {
  return (
    <div className='p-5 min-h-screen w-full bg-black pt-28 md:pt-20'>
      <h1 className='md:text-left text-center md:pl-24 text-3xl font-medium mb-6 uppercase'>top rated</h1>
      <div className='bg-black flex gap-5 justify-center flex-wrap'>
      {
        movies.results?.map((item,i) => {
          return <MovieCard key={i} item={item} />
        })
      }
      </div>


    </div>
  )
}

export default Home