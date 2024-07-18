import React from 'react'
import { IoMdArrowBack } from "react-icons/io";
import { getDetails,getSimilar,getCredits } from '@/app/details'
import MovieCard from '@/Components/MovieCard'
import SimilarCard from '@/Components/SimilarCard'
import CastCard from '@/Components/CastCard'
// import Link from 'next/link'
import { Link } from 'next-view-transitions'



const Details = async({params}) => {
const data = getDetails(params.id)
const res = getSimilar(params.id);
const Res = getCredits(params.id);
const [details,similar,cast] = await Promise.all([data,res,Res])
  return (
    <div className='min-h-screen w-full p-5 pt-28 md:pt-20'>
      {/* //<Link className='text-2xl uppercase font-medium pl-24 mb-4 flex items-center' href="/"><IoMdArrowBack/> Go back</Link> */}
        <h1 className='md:text-3xl text-xl uppercase font-medium text-center md:text-left md:pl-24 mb-4'>{details.title}</h1>
        <div className='flex justify-center'>
        <div className='md:h-[40vw] md:w-[30vw] h-[80vw] w-[60vw] overflow-hidden rounded-sm'>
            <img className='h-full w-full object-center object-cover' src={(details.poster_path)?`https://image.tmdb.org/t/p/w500${details.poster_path}`:"https://imgs.search.brave.com/oa_lN5wRmgndqtlAsgF3QmfrNXA7VSKJVO-jvnrdgz4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA0/MjQxMjkyL3Bob3Rv/L29sZC1mYXNob25l/ZC1tb3ZpZS1jYW1l/cmEuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPTg2Q2N6a2V0/dkZNTkdPdjdlRF9S/bUx2M0xhTnU2REZu/bW5Kamo4Qy1xMFE9"} alt="" />
        </div>
        </div>
        <Link href={`/details/${params.id}/images`} className='px-4 py-2 bg-[#db0000] rounded-lg inline-block ml-5 mt-4 md:ml-24 md:mt-4'>View Images</Link>
        <div className='w-full p-5 flex flex-col gap-2 md:pl-24'>
            <h1 className='text-xl font-medium text-red-600'>Title :  <span className='text-white text-lg'>{details.title}</span></h1>
            <h1 className='text-xl font-medium text-red-600'>Tagline : <span className='text-white text-lg'>{details.tagline}</span></h1>
            <h1 className='text-xl text-red-600'>Overview : </h1>
            <h1 className='text-lg w-full md:w-3/4'>{details.overview}</h1>
            <h1 className='text-lg font-medium text-red-600'>Cast : {
                        cast.cast?.map((item,i) => {
                            return <span key={i} className='text-white text-lg'>{item.name}, </span>
                          })
                } </h1>
            <h1 className='text-xl font-medium text-red-600'>Release Date : <span className='text-white text-lg'>{details.release_date}</span></h1>
            <h1 className='text-xl font-medium text-red-600'>Runtime : <span className='text-white text-lg'>{details.runtime} minutes</span></h1>
            <h1 className='text-xl font-medium text-red-600'>Budget : <span className='text-white text-lg'>{(!details.budget)?"No data available" : details.budget +"$"}</span></h1>
            <h1 className='text-xl font-medium text-red-600'>Revenue : <span className='text-white text-lg'>{(!details.revenue)?"No data available" : details.revenue +"$"}</span></h1>
            
        </div>
        <div className='p-5 min-h-screen w-full bg-black pt-20'>
      <h1 className='text-left pl-24 text-3xl font-medium mb-6 uppercase'>SIMILAR</h1>
      <div className='bg-black flex flex-col md:flex-row gap-5 justify-center items-center flex-wrap'>
      {
        similar.results?.map((item,i) => {
          return <SimilarCard key={i} item={item} />
        })
      }
      </div>


    </div>

    </div>
  )
}

export default Details