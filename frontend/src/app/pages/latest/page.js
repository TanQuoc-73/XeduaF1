import React from 'react'
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import { Menu } from '@/components/Menu';

export default function Latest() {
  return (
    <div className='bg-white'>
        <NavBar />
        <Menu/>
        <div className='flex flex-col items-center justify-center h-screen text-black'>
          <h1 className='text-2xl font-bold'>Latest</h1>
          <p className='mt-4 text-gray-600'>phần content của trang chủ latest </p>
        </div>
        <Footer />
    </div>
  )
}
