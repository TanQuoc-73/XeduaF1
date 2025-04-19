import React from 'react'
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer'; 

export default function result() {
  return (
    <div className='bg-white'>
        <NavBar />
            <div className='flex flex-col items-center justify-center h-screen text-black'>
            <h1 className='text-2xl font-bold'>Result</h1>
            <p className='mt-4 text-gray-600'>phần content của giao diện kết quả giải đua </p>
            </div>
        <Footer />
    </div>
  )
}
