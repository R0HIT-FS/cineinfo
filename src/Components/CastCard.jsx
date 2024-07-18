
import React from 'react'

const CastCard = (props) => {
    const {item}  = props
  return (

    <div className="h-[10vw] w-[6vw] flex flex-col items-start rounded-lg mb-2">
        <div className='image h-[90%] w-[90%] rounded-lg overflow-hidden'>
        <img className='h-full w-full object-fit object-center hover:scale-105 transition-all' src={(item.profile_path)?`https://image.tmdb.org/t/p/w500${item.profile_path}`:"https://imgs.search.brave.com/fbxInw05M6mkNEHaT64Qm3dNEzTIVXrwCD4lxk4ve3A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzE3LzM0LzY3/LzM2MF9GXzIxNzM0/Njc4Ml83WHBDVHQ4/YkxOSnF2VkFhRFpK/d3Zaam0wZXBRbWo2/ai5qcGc"} alt="" /></div>
        <p className='text-[0.8vw] uppercase font-medium p-1 text-left'>{item.name}</p>
    </div>
  )
}

export default CastCard