import React from 'react'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import { Menu } from '@/components/Menu'

export default function New() {
  return (
    <div className='bg-gray-100'>
            <NavBar/>
            <Menu/>
            <div className='flex flex-col bg-white justify-center items-center h-screen bg-black '>
                <h1 className='text-black'>Phan page cua New</h1>
            </div>
            <Footer/>
    </div>
  )
}
