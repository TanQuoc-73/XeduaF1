 import React from 'react'
 import { NavBar } from '@/components/NavBar'
 import { Footer } from '@/components/Footer'
 
 export default function About() {
   return (
     <div className='About'>
        <NavBar/>
        <div className='flex flex-col justify-center items-center bg-white h-screen'>
            <h1 className='text-black'>Phan page cua About</h1>
        </div>
        <Footer/>
     </div>
   )
 }
 
 