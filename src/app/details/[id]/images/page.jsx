import Link from 'next/link'
import React from 'react'
import { getImages } from '@/app/details'
const Images = async ({ params }) => {
    const data = getImages(params.id)
    const images = await data;
    // console.log(images)

    return (
        <div className='min-h-screen w-full bg-black px-10 pt-36'>
            {/* <Link href={`/details/${params.id}`} className='text-xl px-4 py-2 inline-block mb-10 rounded-lg bg-[#db0000]'>Go Back</Link> */}
            <div className='min-h-screen flex flex-wrap justify-center gap-5 w-full bg-black'>
                {
                    images.backdrops.length==0 ? (
                        <h1 className='text-white text-4xl font-medium'>NO IMAGES AVAILABLE!</h1>
                    ) : (
                        images.backdrops?.map((image, i) => (
                             <div key={i} className=" w-[20vw] flex flex-col items-start rounded-lg mb-2">
                                <div className='image h-[full] w-[full] rounded-lg overflow-hidden'>
                                    <img className='h-full w-full object-fit object-cover object-center hover:scale-105 transition-all' src={`https://image.tmdb.org/t/p/w500${image.file_path}`} alt="" /></div>

                            </div>
                        ))
                    )



                }

            </div>


        </div>

    )
}

export default Images