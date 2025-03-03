import React from 'react'

export default function Button({children}) {
  return (
    <div className='text-lav2 bg-lav w-fit px-3 py-1 rounded-full text-sm font-semibold'>
      {children}
    </div>
  )
}
