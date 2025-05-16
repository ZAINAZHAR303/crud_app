"use client"

import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
  return (
    <div className='mt-60 bg-gray-200 p-4 rounded-md flex flex-col gap-4  align-center justify-center'>
      <h1 className='font-bold text-[60px]  '>Counter</h1>
        <h1>{count}</h1>
        <button  className='text-gray-100 font-bold text-2xl bg-amber-400 p-1 rounded-xl hover:bg-amber-500 '  onClick={() => setCount(count + 1)}>Increment</button>
        
    </div>
  )
}

export default Counter