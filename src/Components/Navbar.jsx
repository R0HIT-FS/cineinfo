"use client"
// import Link from 'next/link'
import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className='w-full p-4 px-4 bg-black flex flex-col gap-2 items-center md:flex-row md:px-28 item-center justify-between fixed top-0 left-0 z-10'>
        <div><Link href="/" className='text-5xl text-[#db0000] font-bold uppercase'>CINEINFO</Link></div>
        <div className='flex items-center gap-3 md:gap-5'>
            <Link className={`link ${pathname === '/' ? 'active' : ''} hover:text-[#564d4d] whitespace-nowrap inline-block font-medium uppercase`} href="/">Popular</Link>
            <Link className={`link ${pathname === '/upcoming' ? 'active' : ''} hover:text-[#564d4d] whitespace-nowrap inline-block font-medium uppercase`} href="/upcoming">Upcoming</Link>
            <Link className={`link ${pathname === '/top-rated' ? 'active' : ''} hover:text-[#564d4d] whitespace-nowrap inline-block font-medium uppercase`} href="/top-rated">Top Rated</Link>
            <Link className={`link ${pathname === '/now-playing' ? 'active' : ''} hover:text-[#564d4d] whitespace-nowrap inline-block font-medium uppercase`} href="/now-playing">Now Playing</Link>
        </div>
    </div>
  )
}

export default Navbar