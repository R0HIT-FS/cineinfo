// import Link from 'next/link'
import { Link } from 'next-view-transitions'
import React from 'react'

const MovieCard = (props) => {
    const {item}  = props
  return (
    <Link href={`/details/${item.id}`} className='flex justify-center'>
    <div className="md:h-[25vw] md:w-[20vw] h-[80vw] w-[60vw] flex flex-col items-center rounded-lg mb-2">
        <div className='image h-[90%] w-[90%] rounded-lg overflow-hidden'>
        <img className='h-full w-full object-fit object-center hover:scale-105 transition-all' src={(item.poster_path)?`https://image.tmdb.org/t/p/w500${item.poster_path}`:"https://imgs.search.brave.com/oa_lN5wRmgndqtlAsgF3QmfrNXA7VSKJVO-jvnrdgz4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA0/MjQxMjkyL3Bob3Rv/L29sZC1mYXNob25l/ZC1tb3ZpZS1jYW1l/cmEuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPTg2Q2N6a2V0/dkZNTkdPdjdlRF9S/bUx2M0xhTnU2REZu/bW5Kamo4Qy1xMFE9"} alt="" /></div>
        <p className='text-md uppercase font-medium p-1 text-left'>{item.title}</p>
    </div>
    </Link> 
  )
}

export default MovieCard