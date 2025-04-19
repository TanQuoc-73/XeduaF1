import React from 'react'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'

export default function Contact() {
  return (
    <div className='Contact'>
        <NavBar/>
        <div className='flex flex-col justify-center items-center bg-white h-screen'>
            <h1 className='text-black'>Phan page cua Contacts</h1>
        </div>
        <Footer/>

    </div>
  )
}
