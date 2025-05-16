"use client"

import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-evenly bg-blue-400 p-4 rounded-md text-white  '>
        {/* <Link href="/">Home</Link> */}
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/contact">Crud</Link>
    </div>
  )
}

export default Navbar