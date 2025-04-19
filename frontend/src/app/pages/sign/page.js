import React from 'react'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'

export default function Sign() {
  return (
    <div className='Sign'>
        <NavBar/>
        <div className='flex flex-col bg-white justify-center items-center h-screen '>
            <h1 className='text-black'>Phan page cua dang ky lam tay dua</h1>
        </div>
        <Footer/>
        
    </div>
  )
}
